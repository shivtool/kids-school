/* ============================================================
   Shiv PDF Joiner — worker.js
   Shiv Computer | shivtool.github.io
   ============================================================
   Runs off the main thread so large merges never freeze the UI.
   Uses pdf-lib to copy pages from each source PDF (in the order
   provided by the UI) into one merged output document.
   ============================================================ */

importScripts("pdf-lib.min.js");

self.onmessage = async function (e) {
  const msg = e.data;
  if (!msg || msg.type !== "merge") return;

  const files = msg.files || [];

  try {
    if (files.length < 2) {
      throw new Error("Kam se kam 2 PDF files chahiye merge karne ke liye.");
    }

    const { PDFDocument } = self.PDFLib;
    const mergedPdf = await PDFDocument.create();

    let processed = 0;
    for (const f of files) {
      postMessage({
        type: "progress",
        percent: 5 + (processed / files.length) * 85,
        label: `Jod rahe hain: ${f.name}`,
      });

      let srcDoc;
      try {
        srcDoc = await PDFDocument.load(f.buffer, { ignoreEncryption: true });
      } catch (loadErr) {
        throw new Error(`"${f.name}" ek valid ya unlocked PDF nahi hai.`);
      }

      const pageIndices = srcDoc.getPageIndices();
      const copiedPages = await mergedPdf.copyPages(srcDoc, pageIndices);
      copiedPages.forEach((p) => mergedPdf.addPage(p));

      processed += 1;
    }

    postMessage({ type: "progress", percent: 92, label: "Final PDF taiyaar ki ja rahi hai\u2026" });

    // Brand the merged PDF's metadata as Shiv Computer instead of the
    // default "pdf-lib (github.com/Hopding/pdf-lib)" that shows up under
    // Document Properties in PDF viewers.
    const now = new Date();
    mergedPdf.setProducer("Shiv Computer");
    mergedPdf.setCreator("Shiv PDF Joiner \u2014 Shiv Computer (shivtool.github.io)");
    mergedPdf.setAuthor("Shiv Computer");
    mergedPdf.setTitle("Shiv PDF Joiner \u2014 Merged Document");
    mergedPdf.setCreationDate(now);
    mergedPdf.setModificationDate(now);

    const mergedBytes = await mergedPdf.save();

    postMessage({ type: "progress", percent: 98, label: "Bas ho gaya\u2026" });
    postMessage({ type: "done", bytes: mergedBytes }, [mergedBytes.buffer]);
  } catch (err) {
    postMessage({ type: "error", message: err && err.message ? err.message : String(err) });
  }
};
