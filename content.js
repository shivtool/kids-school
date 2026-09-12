/* ============================================================
   YAHAN SE CONTENT UPDATE KAREIN
   ============================================================
   Ab content "months" ke roop mein bana hai — poore saal (12
   mahine) ka pura syllabus, taaki bachcha step-by-step, mahine
   dar mahine seekhta chale.

   Har level ke andar:
     months: [ { name, learning:[...], exercises:[...] }, ... x12 ]

   "learning" list sirf jaankari ke cards hain — inhe jaise chahe
   badal / jod sakte hain (emoji, title, desc).

   "exercises" list FUNCTIONAL HAI. Har exercise ka ek "type"
   hota hai jo batata hai kaunsa activity chalega:

     type: "quiz"   -> sawaal + options, sahi jawab par ✅
                        fields: question, options:[...], answer: (sahi option ka index, 0 se shuru)

     type: "match"  -> do column, jodi milaana
                        fields: pairs: [ {left:"...", right:"..."} , ... ]

     type: "trace"  -> ungli/mouse se akshar/number/shape trace karna
                        fields: letter: "A" (ya "1", "क") — ya shape: "circle" | "square" | "triangle" | "star"

     type: "color"  -> chitra par rang bharna
                        fields: shape: "balloon" | "fish" | "circle" | "sun" | "star" | "apple" | "umbrella"

     type: "spell"  -> bikhre akshar jodkar sahi shabd banana
                        fields: letters: ["C","A","T"] (SAHI KRAM MEIN),
                                hintEmoji: "🐱"

   Naya mahina jodna ho to "months" list mein { name, learning, exercises }
   ka ek naya block copy-paste karke jod dein.
   ============================================================ */

const CONTENT = {

  playgroup: {
    label: "Play Group",
    tagline: "Khelte-khelte seekhna — poore saal ka safar",
    color: "#FF6F91",
    colorSoft: "#FFE3EA",
    emoji: "🧸",
    months: [
      {
        name: "Mahina 1 · Mera Naam aur Parivar",
        learning: [
          { emoji: "👋", title: "Mera Naam", desc: "Apna naam bolna aur khud ko pehchaanna seekhna." },
          { emoji: "👨‍👩‍👧‍👦", title: "Mera Parivar", desc: "Maa, Papa, Dada-Dadi ko pehchaanna aur naam batana." },
          { emoji: "🏠", title: "Mera Ghar", desc: "Ghar ke kamre — rasoi, sone ka kamra, aangan pehchaanna." }
        ],
        exercises: [
          { type: "quiz", emoji: "❤️", title: "Pehchaan karo", question: "Jo humein khana banati hain unhe kya kehte hain?",
            options: ["Maa", "Chacha", "Mama", "Nana"], answer: 0 },
          { type: "match", emoji: "👆", title: "Parivar milaan", instruction: "Hindi naam ko sahi rishtey se jodo.",
            pairs: [
              { left: "👩 Maa", right: "Mother" },
              { left: "👨 Papa", right: "Father" },
              { left: "👦 Bhai", right: "Brother" },
              { left: "👧 Behen", right: "Sister" }
            ] }
        ]
      },
      {
        name: "Mahina 2 · Rang (Colors)",
        learning: [
          { emoji: "🔴", title: "Laal Rang", desc: "Seb aur gulab jaisi cheezein laal rang ki hoti hain." },
          { emoji: "🟡", title: "Peela Rang", desc: "Suraj aur kela jaisa chamakta peela rang." },
          { emoji: "🔵", title: "Neela Rang", desc: "Aasman aur paani jaisa thanda neela rang." }
        ],
        exercises: [
          { type: "color", emoji: "✏️", title: "Rang bharo", instruction: "Neeche rang chuno, fir gubbare par click karo.", shape: "balloon" },
          { type: "quiz", emoji: "☀️", title: "Rang pehchano", question: "Suraj kaunse rang ka hota hai?",
            options: ["Laal", "Peela", "Neela", "Hara"], answer: 1 }
        ]
      },
      {
        name: "Mahina 3 · Aakar (Shapes)",
        learning: [
          { emoji: "⚪", title: "Gol (Circle)", desc: "Gend aur thali jaisa gol aakar." },
          { emoji: "🟧", title: "Chaukor (Square)", desc: "Khidki aur box jaisa chaukor aakar." },
          { emoji: "🔺", title: "Tikon (Triangle)", desc: "Pahaad aur pizza slice jaisa tikon aakar." }
        ],
        exercises: [
          { type: "trace", emoji: "🖍️", title: "Gol banao", instruction: "Ungli/mouse se gole ki lakeer par chalao.", letter: "circle" },
          { type: "trace", emoji: "✏️", title: "Chaukor banao", instruction: "Ungli/mouse se chaukor ki lakeer par chalao.", letter: "square" }
        ]
      },
      {
        name: "Mahina 4 · Fal (Fruits)",
        learning: [
          { emoji: "🍎", title: "Seb", desc: "Laal ya hara, gol aur meetha fal." },
          { emoji: "🍌", title: "Kela", desc: "Lamba, peela aur narm fal." },
          { emoji: "🍇", title: "Angoor", desc: "Chhote-chhote, gol, guchhon mein lagne wale fal." }
        ],
        exercises: [
          { type: "match", emoji: "👆", title: "Fal-Rang milaan", instruction: "Fal ko uske sahi rang se jodo.",
            pairs: [
              { left: "🍎 Seb", right: "Laal" },
              { left: "🍌 Kela", right: "Peela" },
              { left: "🍇 Angoor", right: "Baingani" },
              { left: "🍉 Tarbooj (andar)", right: "Laal" }
            ] },
          { type: "quiz", emoji: "🐒", title: "Sochkar batao", question: "Bandar ko sabse zyada kya pasand hai?",
            options: ["Kela", "Seb", "Aam", "Angoor"], answer: 0 }
        ]
      },
      {
        name: "Mahina 5 · Sabziyaan (Vegetables)",
        learning: [
          { emoji: "🥕", title: "Gajar", desc: "Narangi rang ki, meethi aur crunchy sabzi." },
          { emoji: "🍅", title: "Tamatar", desc: "Laal, gol aur khatti-meethi sabzi." },
          { emoji: "🥔", title: "Aloo", desc: "Zameen ke andar ugne wali sabse chahiti sabzi." }
        ],
        exercises: [
          { type: "quiz", emoji: "🍅", title: "Rang pehchano", question: "Tamatar kis rang ka hota hai?",
            options: ["Laal", "Neela", "Kala", "Safed"], answer: 0 },
          { type: "spell", emoji: "🥔", title: "Shabd banao", instruction: "Akshar sahi kram mein click karo.", letters: ["A", "L", "O", "O"], hintEmoji: "🥔" }
        ]
      },
      {
        name: "Mahina 6 · Paaltu Janwar (Pet Animals)",
        learning: [
          { emoji: "🐶", title: "Kutta", desc: "Vafadaar paaltu janwar jo Bhow-Bhow karta hai." },
          { emoji: "🐱", title: "Billi", desc: "Pyaari paaltu janwar jo Miyaon karti hai." },
          { emoji: "🐄", title: "Gaay", desc: "Doodh dene wala shaant paaltu janwar." }
        ],
        exercises: [
          { type: "quiz", emoji: "🔊", title: "Awaaz pehchano", question: "Kutta kaisi awaaz karta hai?",
            options: ["Bhow-Bhow", "Miyaon", "Dahaad", "Hinhinana"], answer: 0 },
          { type: "match", emoji: "👶", title: "Janwar ke bacche", instruction: "Janwar ko uske bacche se jodo.",
            pairs: [
              { left: "🐶 Kutta", right: "Pillai (Puppy)" },
              { left: "🐱 Billi", right: "Bacha (Kitten)" },
              { left: "🐄 Gaay", right: "Bachhda (Calf)" },
              { left: "🐴 Ghoda", right: "Bachhera (Foal)" }
            ] }
        ]
      },
      {
        name: "Mahina 7 · Jungle ke Janwar (Wild Animals)",
        learning: [
          { emoji: "🦁", title: "Sher", desc: "Jungle ka raja, zor se dahaadta hai." },
          { emoji: "🐘", title: "Hathi", desc: "Sabse bada aur bhaari jungle ka janwar." },
          { emoji: "🐒", title: "Bandar", desc: "Ped par uchhalne-koodne wala chatur janwar." }
        ],
        exercises: [
          { type: "quiz", emoji: "🦁", title: "Awaaz pehchano", question: "Sher kaise bolta hai?",
            options: ["Bhow-Bhow", "Dahaad", "Miyaon", "Hinhinana"], answer: 1 },
          { type: "match", emoji: "🌳", title: "Ghar milaan", instruction: "Janwar ko uske rehne ki jagah se jodo.",
            pairs: [
              { left: "🦁 Sher", right: "Jungle" },
              { left: "🐟 Machhli", right: "Paani" },
              { left: "🐦 Chidiya", right: "Ped" },
              { left: "🐫 Oont", right: "Registaan" }
            ] }
        ]
      },
      {
        name: "Mahina 8 · Shareer ke Ang (Body Parts)",
        learning: [
          { emoji: "👀", title: "Aankh", desc: "Ismein hum dekhte hain." },
          { emoji: "👃", title: "Naak", desc: "Ismein hum khushboo sungte hain." },
          { emoji: "👂", title: "Kaan", desc: "Ismein hum awaazein sunte hain." }
        ],
        exercises: [
          { type: "quiz", emoji: "🧠", title: "Sochkar batao", question: "Hum kis se sunte hain?",
            options: ["Aankh", "Naak", "Kaan", "Haath"], answer: 2 },
          { type: "match", emoji: "🖐️", title: "Ang aur kaam", instruction: "Sharir ke ang ko uske kaam se jodo.",
            pairs: [
              { left: "👀 Aankh", right: "Dekhna" },
              { left: "👃 Naak", right: "Sunghna" },
              { left: "👂 Kaan", right: "Sunna" },
              { left: "👄 Muh", right: "Khana" }
            ] }
        ]
      },
      {
        name: "Mahina 9 · Khaane-Peene ki Cheezein",
        learning: [
          { emoji: "🍚", title: "Chawal", desc: "Roz khaya jaane wala safed anaaj." },
          { emoji: "🥛", title: "Doodh", desc: "Sehat ke liye zaroori safed peya padaarth." },
          { emoji: "🍞", title: "Roti", desc: "Gehun ke aate se banti hai." }
        ],
        exercises: [
          { type: "quiz", emoji: "💪", title: "Sochkar batao", question: "Doodh peene se kya milta hai?",
            options: ["Taakat", "Neend", "Dar", "Gussa"], answer: 0 },
          { type: "color", emoji: "🍎", title: "Rang bharo", instruction: "Neeche rang chuno, fir seb par click karo.", shape: "apple" }
        ]
      },
      {
        name: "Mahina 10 · Vahan (Transport)",
        learning: [
          { emoji: "🚗", title: "Car", desc: "Sadak par chalne wala chaar pahiyon ka vahan." },
          { emoji: "✈️", title: "Hawai Jahaz", desc: "Aasman mein udne wala bada vahan." },
          { emoji: "🚂", title: "Train", desc: "Patri par chalne wala lamba vahan." }
        ],
        exercises: [
          { type: "quiz", emoji: "✈️", title: "Sochkar batao", question: "Aasman mein kaunsa vahan udta hai?",
            options: ["Car", "Cycle", "Hawai Jahaz", "Naav"], answer: 2 },
          { type: "match", emoji: "🛣️", title: "Vahan-Jagah milaan", instruction: "Vahan ko uski jagah se jodo.",
            pairs: [
              { left: "🚗 Car", right: "Sadak" },
              { left: "✈️ Hawai Jahaz", right: "Aasman" },
              { left: "⛵ Naav", right: "Paani" },
              { left: "🚂 Train", right: "Patri" }
            ] }
        ]
      },
      {
        name: "Mahina 11 · Mausam aur Tyohar",
        learning: [
          { emoji: "☀️", title: "Garmi (Summer)", desc: "Tez dhoop aur garam mausam." },
          { emoji: "🌧️", title: "Barish (Rain)", desc: "Baadal se paani girta hai, thandak aati hai." },
          { emoji: "🎉", title: "Tyohar", desc: "Diwali, Holi jaise khushi ke din." }
        ],
        exercises: [
          { type: "quiz", emoji: "☔", title: "Sochkar batao", question: "Barish mein hum kya use karte hain?",
            options: ["Chhata", "Topi", "Chashma", "Joota"], answer: 0 },
          { type: "color", emoji: "☂️", title: "Rang bharo", instruction: "Neeche rang chuno, fir chhate par click karo.", shape: "umbrella" }
        ]
      },
      {
        name: "Mahina 12 · Kavitaayein aur Punaravlokan",
        learning: [
          { emoji: "🎵", title: "Twinkle Twinkle", desc: "Chamakte taaron par pyaari kavita." },
          { emoji: "🎶", title: "Chanda Mama", desc: "Chanda mama ke baare mein saral kavita." },
          { emoji: "⭐", title: "Saal Bhar ki Yaad", desc: "Rang, aakar, fal, janwar — sabka punaravlokan." }
        ],
        exercises: [
          { type: "quiz", emoji: "🍎", title: "Punaravlokan", question: "Seb kis rang ka hota hai?",
            options: ["Laal", "Neela", "Kala", "Safed"], answer: 0 },
          { type: "color", emoji: "⭐", title: "Rang bharo", instruction: "Neeche rang chuno, fir taare par click karo.", shape: "star" }
        ]
      }
    ]
  },

  nursery: {
    label: "Nursery",
    tagline: "Akshar aur ginti ki shuruaat — poore saal ka safar",
    color: "#4FC3F7",
    colorSoft: "#E1F5FE",
    emoji: "🚌",
    months: [
      {
        name: "Mahina 1 · Capital Letters A-M",
        learning: [
          { emoji: "🔤", title: "A se M tak", desc: "Capital letters A, B, C ... M pehchaanna." },
          { emoji: "📖", title: "Shabd ke saath", desc: "A for Apple, B for Ball jaise saral shabd." },
          { emoji: "✍️", title: "Likhna Practice", desc: "Har letter ko hawa mein aur kaagaz par likhna." }
        ],
        exercises: [
          { type: "trace", emoji: "✍️", title: "Letter Tracing", instruction: "'A' ke upar ungli/mouse se chalao.", letter: "A" },
          { type: "quiz", emoji: "🧩", title: "Sahi jawab chuno", question: "C for ___",
            options: ["Cat", "Ball", "Dog", "Egg"], answer: 0 }
        ]
      },
      {
        name: "Mahina 2 · Capital Letters N-Z",
        learning: [
          { emoji: "🔤", title: "N se Z tak", desc: "Capital letters N, O, P ... Z pehchaanna." },
          { emoji: "📖", title: "Naye Shabd", desc: "N for Nest, O for Orange jaise shabd." },
          { emoji: "✍️", title: "Poori Varnamala", desc: "A se Z tak pura order yaad karna." }
        ],
        exercises: [
          { type: "trace", emoji: "✍️", title: "Letter Tracing", instruction: "'S' ke upar ungli/mouse se chalao.", letter: "S" },
          { type: "quiz", emoji: "🦓", title: "Sahi jawab chuno", question: "Z for ___",
            options: ["Zebra", "Yak", "Umbrella", "Van"], answer: 0 }
        ]
      },
      {
        name: "Mahina 3 · Small letters a-m",
        learning: [
          { emoji: "🔡", title: "a se m tak", desc: "Small letters a, b, c ... m pehchaanna." },
          { emoji: "🔠", title: "Capital-Small jodi", desc: "Har capital letter ki small jodi pehchaanna." },
          { emoji: "✍️", title: "Likhna Practice", desc: "Small letters ka aakar dhyan se likhna." }
        ],
        exercises: [
          { type: "trace", emoji: "✍️", title: "Letter Tracing", instruction: "'a' ke upar ungli/mouse se chalao.", letter: "a" },
          { type: "match", emoji: "👆", title: "Capital-Small milaan", instruction: "Capital letter ko uski small jodi se jodo.",
            pairs: [
              { left: "A", right: "a" },
              { left: "B", right: "b" },
              { left: "C", right: "c" },
              { left: "D", right: "d" }
            ] }
        ]
      },
      {
        name: "Mahina 4 · Small letters n-z",
        learning: [
          { emoji: "🔡", title: "n se z tak", desc: "Small letters n, o, p ... z pehchaanna." },
          { emoji: "🔠", title: "Poori Small Varnamala", desc: "a se z tak pura order yaad karna." },
          { emoji: "📖", title: "Chhote Shabd", desc: "on, in, up jaise 2-akshar shabd padhna." }
        ],
        exercises: [
          { type: "trace", emoji: "✍️", title: "Letter Tracing", instruction: "'s' ke upar ungli/mouse se chalao.", letter: "s" },
          { type: "match", emoji: "👆", title: "Capital-Small milaan", instruction: "Capital letter ko uski small jodi se jodo.",
            pairs: [
              { left: "N", right: "n" },
              { left: "O", right: "o" },
              { left: "P", right: "p" },
              { left: "Q", right: "q" }
            ] }
        ]
      },
      {
        name: "Mahina 5 · Ginti 1-5",
        learning: [
          { emoji: "1️⃣", title: "Number 1-5", desc: "1 se 5 tak number pehchaanna aur likhna." },
          { emoji: "🖐️", title: "Ungliyon se Ginti", desc: "Ungliyon par ginkar number samajhna." },
          { emoji: "🔢", title: "Ginti Kram", desc: "1,2,3,4,5 ka sahi kram yaad karna." }
        ],
        exercises: [
          { type: "trace", emoji: "🔢", title: "Number Tracing", instruction: "'3' ke upar ungli/mouse se chalao.", letter: "3" },
          { type: "quiz", emoji: "🧩", title: "Ginti ka kram", question: "3 ke baad kaunsi ginti aati hai?",
            options: ["2", "4", "5", "1"], answer: 1 }
        ]
      },
      {
        name: "Mahina 6 · Ginti 6-10",
        learning: [
          { emoji: "6️⃣", title: "Number 6-10", desc: "6 se 10 tak number pehchaanna aur likhna." },
          { emoji: "🔟", title: "Poori Ginti 1-10", desc: "1 se 10 tak bina ruke ginna." },
          { emoji: "✏️", title: "Number Likhna", desc: "Har number ka sahi aakar practice karna." }
        ],
        exercises: [
          { type: "trace", emoji: "🔢", title: "Number Tracing", instruction: "'7' ke upar ungli/mouse se chalao.", letter: "7" },
          { type: "quiz", emoji: "🧩", title: "Ginti ka kram", question: "9 ke baad kaunsi ginti aati hai?",
            options: ["8", "10", "7", "6"], answer: 1 }
        ]
      },
      {
        name: "Mahina 7 · Rang aur Naye Aakar",
        learning: [
          { emoji: "🥚", title: "Oval", desc: "Ande jaisa lamba-gol aakar." },
          { emoji: "⭐", title: "Star", desc: "Chamakta paanch-konon wala aakar." },
          { emoji: "❤️", title: "Heart", desc: "Pyaar dikhane wala dil ka aakar." }
        ],
        exercises: [
          { type: "trace", emoji: "🖍️", title: "Tara banao", instruction: "Ungli/mouse se star ki lakeer par chalao.", letter: "star" },
          { type: "color", emoji: "⭐", title: "Rang bharo", instruction: "Neeche rang chuno, fir taare par click karo.", shape: "star" }
        ]
      },
      {
        name: "Mahina 8 · Fal-Sabzi (English Naam)",
        learning: [
          { emoji: "🍎", title: "Fruits", desc: "Apple, Banana, Grapes ke naam English mein." },
          { emoji: "🥕", title: "Vegetables", desc: "Carrot, Potato, Tomato ke naam English mein." },
          { emoji: "🗣️", title: "Bolne ki Practice", desc: "Hindi aur English dono naam bolna." }
        ],
        exercises: [
          { type: "match", emoji: "👆", title: "Hindi-English milaan", instruction: "Hindi naam ko English naam se jodo.",
            pairs: [
              { left: "Seb", right: "Apple" },
              { left: "Kela", right: "Banana" },
              { left: "Gajar", right: "Carrot" },
              { left: "Aloo", right: "Potato" }
            ] },
          { type: "quiz", emoji: "🥕", title: "Naam batao", question: "Carrot ka Hindi naam kya hai?",
            options: ["Gajar", "Aloo", "Matar", "Pyaz"], answer: 0 }
        ]
      },
      {
        name: "Mahina 9 · Janwar aur unke Bacche",
        learning: [
          { emoji: "🐕", title: "Dog-Puppy", desc: "Kutte ke bacche ko Puppy kehte hain." },
          { emoji: "🐈", title: "Cat-Kitten", desc: "Billi ke bacche ko Kitten kehte hain." },
          { emoji: "🐄", title: "Cow-Calf", desc: "Gaay ke bacche ko Calf kehte hain." }
        ],
        exercises: [
          { type: "match", emoji: "👶", title: "Janwar-Baccha milaan", instruction: "Janwar ko uske bacche ke naam se jodo.",
            pairs: [
              { left: "🐕 Dog", right: "Puppy" },
              { left: "🐈 Cat", right: "Kitten" },
              { left: "🐄 Cow", right: "Calf" },
              { left: "🐎 Horse", right: "Foal" }
            ] },
          { type: "quiz", emoji: "🐈", title: "Naam batao", question: "Cat ka baccha kya kehlata hai?",
            options: ["Puppy", "Kitten", "Calf", "Cub"], answer: 1 }
        ]
      },
      {
        name: "Mahina 10 · Parivaar aur Rishtedaar",
        learning: [
          { emoji: "👴", title: "Nana-Nani", desc: "Maa ke Maa-Papa ko Nana-Nani kehte hain." },
          { emoji: "👨‍👩‍👦", title: "Chacha-Chachi", desc: "Papa ke chhote bhai-bhabhi." },
          { emoji: "👪", title: "Mama-Mami", desc: "Maa ke bhai-bhabhi." }
        ],
        exercises: [
          { type: "quiz", emoji: "👴", title: "Rishtey pehchano", question: "Papa ke Papa ko kya kehte hain?",
            options: ["Nana", "Dada", "Mama", "Chacha"], answer: 1 },
          { type: "match", emoji: "👆", title: "Rishtey milaan", instruction: "Rishta samjhein aur sahi naam se jodo.",
            pairs: [
              { left: "Maa ke Papa", right: "Nana" },
              { left: "Maa ki Maa", right: "Nani" },
              { left: "Papa ke Papa", right: "Dada" },
              { left: "Papa ki Maa", right: "Dadi" }
            ] }
        ]
      },
      {
        name: "Mahina 11 · Vahan aur Awaazein",
        learning: [
          { emoji: "🚗", title: "Car", desc: "Car 'Poo-Poo' awaaz karti hai." },
          { emoji: "🚂", title: "Train", desc: "Train 'Chuk-Chuk' awaaz karti hai." },
          { emoji: "🚲", title: "Cycle", desc: "Cycle ki ghanti 'Ting-Ting' bajti hai." }
        ],
        exercises: [
          { type: "quiz", emoji: "🚂", title: "Awaaz pehchano", question: "Train kaisi awaaz karti hai?",
            options: ["Chuk-Chuk", "Poo-Poo", "Ting-Ting", "Vroom"], answer: 0 },
          { type: "spell", emoji: "🚌", title: "Shabd banao", instruction: "Akshar sahi kram mein click karo.", letters: ["B", "U", "S"], hintEmoji: "🚌" }
        ]
      },
      {
        name: "Mahina 12 · Kavitaayein aur Punaravlokan",
        learning: [
          { emoji: "🎵", title: "ABCD Song", desc: "Poori varnamala gaana yaad karna." },
          { emoji: "🎶", title: "Johny Johny Yes Papa", desc: "Maza aur seekh dono wali kavita." },
          { emoji: "📚", title: "Saal ka Punaravlokan", desc: "Akshar aur ginti sab ek saath yaad karna." }
        ],
        exercises: [
          { type: "trace", emoji: "✍️", title: "Letter Tracing", instruction: "'Z' ke upar ungli/mouse se chalao.", letter: "Z" },
          { type: "quiz", emoji: "🔟", title: "Punaravlokan", question: "1 se 10 tak ginti mein sabse aakhri number kaunsa hai?",
            options: ["8", "9", "10", "7"], answer: 2 }
        ]
      }
    ]
  },

  lkg: {
    label: "LKG",
    tagline: "Shabd, Varnamala aur nayi baatein — poore saal ka safar",
    color: "#FFB74D",
    colorSoft: "#FFF3E0",
    emoji: "📚",
    months: [
      {
        name: "Mahina 1 · Teen-akshar Shabd",
        learning: [
          { emoji: "🐱", title: "CAT, DOG, SUN", desc: "3 akshar ke saral shabd padhna." },
          { emoji: "🖼️", title: "Chitra se Shabd", desc: "Chitra dekhkar sahi shabd pehchaanna." },
          { emoji: "✍️", title: "Likhna Practice", desc: "Chhote shabdon ko sahi tarike se likhna." }
        ],
        exercises: [
          { type: "spell", emoji: "✍️", title: "Shabd banao", instruction: "Akshar sahi kram mein click karo.", letters: ["C", "A", "T"], hintEmoji: "🐱" },
          { type: "quiz", emoji: "🧩", title: "Sahi shabd chuno", question: "D-O-G se kaunsa shabd banta hai?",
            options: ["DOG", "GOD", "ODG", "DGO"], answer: 0 }
        ]
      },
      {
        name: "Mahina 2 · Hindi Varnamala (क-ङ, च-ञ)",
        learning: [
          { emoji: "🕉️", title: "क, ख, ग, घ, ङ", desc: "Kavarg ke akshar pehchaanna." },
          { emoji: "📖", title: "च, छ, ज, झ, ञ", desc: "Chavarg ke akshar pehchaanna." },
          { emoji: "✍️", title: "Likhna Practice", desc: "Har akshar ka sahi aakar likhna." }
        ],
        exercises: [
          { type: "trace", emoji: "📝", title: "Varnamala likhna", instruction: "'क' ke upar ungli/mouse se chalao.", letter: "क" },
          { type: "quiz", emoji: "🐄", title: "Shabd pehchano", question: "'ग' se kaunsa shabd shuru hota hai?",
            options: ["Gaay", "Kabootar", "Machhli", "Ped"], answer: 0 }
        ]
      },
      {
        name: "Mahina 3 · Hindi Varnamala (ट-न, प-म)",
        learning: [
          { emoji: "🕉️", title: "ट, ठ, ड, ढ, ण", desc: "Tavarg ke akshar pehchaanna." },
          { emoji: "📖", title: "त, थ, द, ध, न", desc: "Tavarg (dant) ke akshar pehchaanna." },
          { emoji: "✍️", title: "प, फ, ब, भ, म", desc: "Pavarg ke akshar pehchaanna." }
        ],
        exercises: [
          { type: "trace", emoji: "📝", title: "Varnamala likhna", instruction: "'म' ke upar ungli/mouse se chalao.", letter: "म" },
          { type: "quiz", emoji: "🐟", title: "Shabd pehchano", question: "'म' se kaunsa shabd shuru hota hai?",
            options: ["Machhli", "Ganesh", "Kela", "Suraj"], answer: 0 }
        ]
      },
      {
        name: "Mahina 4 · Ginti 1-20",
        learning: [
          { emoji: "🔢", title: "1 se 10", desc: "1 se 10 tak ginti bolna aur likhna." },
          { emoji: "🔢", title: "11 se 20", desc: "11 se 20 tak ginti bolna aur likhna." },
          { emoji: "✏️", title: "Ginti Likhna", desc: "Har number ko sahi kram mein likhna." }
        ],
        exercises: [
          { type: "trace", emoji: "🔢", title: "Number Tracing", instruction: "'15' ke upar ungli/mouse se chalao.", letter: "15" },
          { type: "quiz", emoji: "🧩", title: "Ginti ka kram", question: "11 ke baad kaunsi ginti hai?",
            options: ["10", "12", "13", "9"], answer: 1 }
        ]
      },
      {
        name: "Mahina 5 · Ginti 21-50",
        learning: [
          { emoji: "🔢", title: "21 se 30", desc: "Dus-dus karke aage badhna." },
          { emoji: "🔢", title: "31 se 50", desc: "31 se 50 tak ginti bolna." },
          { emoji: "🔟", title: "Dahai ke Number", desc: "20, 30, 40, 50 ko Hindi mein bolna — Bees, Tees, Chaalis, Pachaas." }
        ],
        exercises: [
          { type: "quiz", emoji: "🧩", title: "Ginti ka kram", question: "30 ke baad kaunsi ginti hai?",
            options: ["29", "31", "40", "21"], answer: 1 },
          { type: "match", emoji: "👆", title: "Number-Shabd milaan", instruction: "Number ko uske Hindi naam se jodo.",
            pairs: [
              { left: "10", right: "Dus" },
              { left: "20", right: "Bees" },
              { left: "30", right: "Tees" },
              { left: "40", right: "Chaalis" }
            ] }
        ]
      },
      {
        name: "Mahina 6 · Hafte ke Din aur Mahine",
        learning: [
          { emoji: "📅", title: "Saaton Din", desc: "Somvar se Ravivar tak saaton din ke naam." },
          { emoji: "🗓️", title: "12 Mahine", desc: "Janvary se December tak mahinon ke naam." },
          { emoji: "⏳", title: "Aaj-Kal-Parso", desc: "Samay ke saral shabd samajhna." }
        ],
        exercises: [
          { type: "quiz", emoji: "📅", title: "Din pehchano", question: "Hafte ka pehla din (school ke hisaab se) kaunsa hai?",
            options: ["Somvar", "Ravivar", "Mangalvar", "Shanivar"], answer: 0 },
          { type: "match", emoji: "👆", title: "Din milaan", instruction: "English din ko Hindi naam se jodo.",
            pairs: [
              { left: "Monday", right: "Somvar" },
              { left: "Tuesday", right: "Mangalvar" },
              { left: "Sunday", right: "Ravivar" },
              { left: "Saturday", right: "Shanivar" }
            ] }
        ]
      },
      {
        name: "Mahina 7 · Mausam (Seasons)",
        learning: [
          { emoji: "☀️", title: "Garmi (Summer)", desc: "Tez dhoop, pasina aur thandi cheezein khaana." },
          { emoji: "❄️", title: "Sardi (Winter)", desc: "Thand, sweater aur garam kapde pehenna." },
          { emoji: "🌧️", title: "Barsaat (Monsoon)", desc: "Baadal, barish aur chhata ka mausam." }
        ],
        exercises: [
          { type: "quiz", emoji: "🧥", title: "Sochkar batao", question: "Sardiyon mein hum kya pehente hain?",
            options: ["Sweater", "Half-shirt", "Chappal", "Chashma"], answer: 0 },
          { type: "color", emoji: "☂️", title: "Rang bharo", instruction: "Neeche rang chuno, fir chhate par click karo.", shape: "umbrella" }
        ]
      },
      {
        name: "Mahina 8 · Opposites (Ulti Baatein)",
        learning: [
          { emoji: "⬆️", title: "Bada-Chhota", desc: "Size ke ulte shabd samajhna." },
          { emoji: "🔼", title: "Upar-Neeche", desc: "Jagah batane wale ulte shabd." },
          { emoji: "🌡️", title: "Garam-Thanda", desc: "Tapman batane wale ulte shabd." }
        ],
        exercises: [
          { type: "quiz", emoji: "🖤", title: "Ulta batao", question: "'Kaala' ka ulta kya hota hai?",
            options: ["Safed", "Laal", "Neela", "Peela"], answer: 0 },
          { type: "match", emoji: "👆", title: "Opposite milaan", instruction: "Shabd ko uske ulte shabd se jodo.",
            pairs: [
              { left: "Bada", right: "Chhota" },
              { left: "Upar", right: "Neeche" },
              { left: "Din", right: "Raat" },
              { left: "Garam", right: "Thanda" }
            ] }
        ]
      },
      {
        name: "Mahina 9 · Parivaar aur Rishtey",
        learning: [
          { emoji: "👩", title: "Mausi-Fufa", desc: "Maa ki behen aur unke pati ko Mausi-Fufa kehte hain." },
          { emoji: "👦", title: "Bhatija-Bhatiji", desc: "Bhai-Behen ke bachche." },
          { emoji: "👪", title: "Poora Parivaar", desc: "Sabhi rishton ka ek saath punaravlokan." }
        ],
        exercises: [
          { type: "quiz", emoji: "👩", title: "Rishtey pehchano", question: "Maa ki behen ko kya kehte hain?",
            options: ["Mausi", "Bua", "Chachi", "Mami"], answer: 0 },
          { type: "match", emoji: "👆", title: "Rishtey milaan", instruction: "Rishta samjhein aur sahi naam se jodo.",
            pairs: [
              { left: "Papa ki behen", right: "Bua" },
              { left: "Maa ki behen", right: "Mausi" },
              { left: "Maa ka bhai", right: "Mama" },
              { left: "Papa ka bhai", right: "Chacha" }
            ] }
        ]
      },
      {
        name: "Mahina 10 · Sthaan (Prepositions)",
        learning: [
          { emoji: "🔼", title: "Upar-Neeche", desc: "Kisi cheez ke upar ya neeche hone ki jagah." },
          { emoji: "📦", title: "Andar-Bahar", desc: "Kisi cheez ke andar ya bahar hone ki jagah." },
          { emoji: "↔️", title: "Aage-Peeche", desc: "Kisi cheez ke aage ya peeche hone ki jagah." }
        ],
        exercises: [
          { type: "quiz", emoji: "🐦", title: "Jagah batao", question: "Chidiya ped ke ___ baithi hai (chitra mein upar)",
            options: ["Upar", "Neeche", "Andar", "Peeche"], answer: 0 },
          { type: "match", emoji: "👆", title: "Sthaan milaan", instruction: "Shabd ko uske ulte sthaan se jodo.",
            pairs: [
              { left: "Andar", right: "Bahar" },
              { left: "Aage", right: "Peeche" },
              { left: "Upar", right: "Neeche" },
              { left: "Paas", right: "Door" }
            ] }
        ]
      },
      {
        name: "Mahina 11 · Saphai aur Achhi Aadatein",
        learning: [
          { emoji: "🧼", title: "Haath Dhona", desc: "Khana khane se pehle aur baad mein haath dhona." },
          { emoji: "🪥", title: "Daant Saaf Karna", desc: "Subah-shaam daant brush karna." },
          { emoji: "🛏️", title: "Samay se Sona", desc: "Roz raat ko sahi samay par sona." }
        ],
        exercises: [
          { type: "quiz", emoji: "🍽️", title: "Achhi aadat batao", question: "Khana khane se pehle kya karna chahiye?",
            options: ["Haath dhona", "Sona", "Rona", "Khelna"], answer: 0 },
          { type: "spell", emoji: "🧼", title: "Shabd banao", instruction: "Akshar sahi kram mein click karo.", letters: ["S", "O", "A", "P"], hintEmoji: "🧼" }
        ]
      },
      {
        name: "Mahina 12 · Punaravlokan aur Kavitaayein",
        learning: [
          { emoji: "📚", title: "Saal ka Punaravlokan", desc: "Varnamala, ginti aur shabd sabka ek saath revision." },
          { emoji: "🎵", title: "Favorite Kavita", desc: "Poore saal mein seekhi hui pyaari kavitaayein." },
          { emoji: "🌟", title: "Shabhas!", desc: "Poora saal mehnat se seekhne ke liye shabhas." }
        ],
        exercises: [
          { type: "quiz", emoji: "🔢", title: "Punaravlokan", question: "'Bees' ka number kya hai?",
            options: ["20", "12", "2", "200"], answer: 0 },
          { type: "trace", emoji: "📝", title: "Varnamala likhna", instruction: "'न' ke upar ungli/mouse se chalao.", letter: "न" }
        ]
      }
    ]
  },

  ukg: {
    label: "UKG",
    tagline: "Padhna, likhna aur thoda ganit — poore saal ka safar",
    color: "#81C784",
    colorSoft: "#E8F5E9",
    emoji: "🎓",
    months: [
      {
        name: "Mahina 1 · Chhote Vaakya (Sentences)",
        learning: [
          { emoji: "📖", title: "Saral Vaakya", desc: "'I am a good boy/girl' jaise saral vaakya padhna." },
          { emoji: "🏫", title: "Apne Baare Mein", desc: "'This is my school' jaise vaakya banana." },
          { emoji: "✍️", title: "Vaakya Likhna", desc: "Chhote-chhote vaakya khud likhna." }
        ],
        exercises: [
          { type: "quiz", emoji: "🗣️", title: "Sahi vaakya chuno", question: "'Main achha bachcha hoon' English mein kya hoga?",
            options: ["I am a good child", "I am a bad child", "He is a boy", "She is a girl"], answer: 0 },
          { type: "spell", emoji: "👍", title: "Shabd banao", instruction: "Akshar sahi kram mein click karo.", letters: ["G", "O", "O", "D"], hintEmoji: "👍" }
        ]
      },
      {
        name: "Mahina 2 · Ginti 51-100",
        learning: [
          { emoji: "🔢", title: "51 se 75", desc: "51 se 75 tak ginti bolna aur likhna." },
          { emoji: "🔢", title: "76 se 100", desc: "76 se 100 tak ginti bolna aur likhna." },
          { emoji: "💯", title: "Sau tak Ginti", desc: "1 se 100 tak poori ginti ka punaravlokan." }
        ],
        exercises: [
          { type: "quiz", emoji: "🧩", title: "Ginti ka kram", question: "100 se pehle kaunsi ginti aati hai?",
            options: ["98", "99", "101", "90"], answer: 1 },
          { type: "trace", emoji: "🔢", title: "Number Tracing", instruction: "'99' ke upar ungli/mouse se chalao.", letter: "99" }
        ]
      },
      {
        name: "Mahina 3 · Jod (Addition)",
        learning: [
          { emoji: "➕", title: "Jod ka Matlab", desc: "Do sankhyaon ko jodkar naya total nikaalna." },
          { emoji: "🖐️", title: "Ungliyon se Jod", desc: "Ungliyon ki madad se chhote jod karna." },
          { emoji: "🧮", title: "1 se 10 tak Jod", desc: "1 anke ke saral jod ke sawaal." }
        ],
        exercises: [
          { type: "quiz", emoji: "➕", title: "Jod karo", question: "2 + 3 = ?",
            options: ["4", "5", "6", "7"], answer: 1 },
          { type: "quiz", emoji: "➕", title: "Jod karo", question: "4 + 4 = ?",
            options: ["6", "7", "8", "9"], answer: 2 }
        ]
      },
      {
        name: "Mahina 4 · Ghatao (Subtraction)",
        learning: [
          { emoji: "➖", title: "Ghatao ka Matlab", desc: "Ek sankhya mein se doosri sankhya nikaalna." },
          { emoji: "🖐️", title: "Ungliyon se Ghatao", desc: "Ungliyan mod-mod kar ghatao samajhna." },
          { emoji: "🧮", title: "Saral Ghatao ke Sawaal", desc: "1 anke ke saral ghatao ke sawaal." }
        ],
        exercises: [
          { type: "quiz", emoji: "➖", title: "Ghatao karo", question: "5 - 2 = ?",
            options: ["2", "3", "4", "1"], answer: 1 },
          { type: "quiz", emoji: "➖", title: "Ghatao karo", question: "9 - 4 = ?",
            options: ["4", "5", "6", "3"], answer: 1 }
        ]
      },
      {
        name: "Mahina 5 · Hindi Matraayein (आ, इ, ई)",
        learning: [
          { emoji: "🕉️", title: "आ ki Matra", desc: "क + ा = का jaise shabd banana." },
          { emoji: "🕉️", title: "इ ki Matra", desc: "क + ि = कि jaise shabd banana." },
          { emoji: "🕉️", title: "ई ki Matra", desc: "क + ी = की jaise shabd banana." }
        ],
        exercises: [
          { type: "quiz", emoji: "🔤", title: "Matra lagao", question: "क + ा = ?",
            options: ["का", "कि", "की", "कु"], answer: 0 },
          { type: "quiz", emoji: "🔤", title: "Matra lagao", question: "क + ी = ?",
            options: ["का", "कि", "की", "के"], answer: 2 }
        ]
      },
      {
        name: "Mahina 6 · Hindi Matraayein (उ, ऊ, ए, ऐ)",
        learning: [
          { emoji: "🕉️", title: "उ, ऊ ki Matra", desc: "क + ु = कु aur क + ू = कू." },
          { emoji: "🕉️", title: "ए ki Matra", desc: "क + े = के jaise shabd banana." },
          { emoji: "🕉️", title: "ऐ ki Matra", desc: "क + ै = कै jaise shabd banana." }
        ],
        exercises: [
          { type: "quiz", emoji: "🔤", title: "Matra lagao", question: "क + ु = ?",
            options: ["कु", "कू", "के", "कै"], answer: 0 },
          { type: "quiz", emoji: "🔤", title: "Matra lagao", question: "क + े = ?",
            options: ["कु", "कू", "के", "कै"], answer: 2 }
        ]
      },
      {
        name: "Mahina 7 · Samay (Time)",
        learning: [
          { emoji: "🕐", title: "Ghadi Pehchanna", desc: "Ghante aur minute ki suiyaan pehchaanna." },
          { emoji: "☀️", title: "Subah-Dopahar-Shaam", desc: "Din ke alag-alag hisson ke naam." },
          { emoji: "⏰", title: "Poora Ghanta", desc: "Ghadi mein poora ghanta dekhna seekhna." }
        ],
        exercises: [
          { type: "quiz", emoji: "🕐", title: "Ghadi dekho", question: "🕐 mein kitne baje hain?",
            options: ["1 baje", "3 baje", "6 baje", "9 baje"], answer: 0 },
          { type: "quiz", emoji: "🕕", title: "Ghadi dekho", question: "🕕 mein kitne baje hain?",
            options: ["3 baje", "6 baje", "9 baje", "12 baje"], answer: 1 }
        ]
      },
      {
        name: "Mahina 8 · Paise (Money Basics)",
        learning: [
          { emoji: "🪙", title: "Sikke (Coins)", desc: "1, 2, 5, 10 rupaye ke sikke pehchaanna." },
          { emoji: "💵", title: "Note", desc: "10, 20, 50, 100 rupaye ke note pehchaanna." },
          { emoji: "🛒", title: "Kharidna-Bechna", desc: "Dukaan mein paison ka saral upyog samajhna." }
        ],
        exercises: [
          { type: "quiz", emoji: "🪙", title: "Hisaab karo", question: "2 sikke, har ek 5 rupaye ka — kul kitne rupaye hue?",
            options: ["7", "10", "15", "5"], answer: 1 },
          { type: "match", emoji: "👆", title: "Sikka-Kimat milaan", instruction: "Sikke ko uski sahi kimat se jodo.",
            pairs: [
              { left: "🪙 Ek Sikka", right: "1 Rupaya" },
              { left: "🪙🪙 Do Sikke", right: "2 Rupaye" },
              { left: "💵 Chhota Note", right: "10 Rupaye" },
              { left: "💵 Bada Note", right: "100 Rupaye" }
            ] }
        ]
      },
      {
        name: "Mahina 9 · Saamanya Gyan (GK)",
        learning: [
          { emoji: "🐅", title: "Rashtriya Pashu", desc: "Bagh (Tiger) Bharat ka Rashtriya Pashu hai." },
          { emoji: "🦚", title: "Rashtriya Pakshi", desc: "Mor (Peacock) Bharat ka Rashtriya Pakshi hai." },
          { emoji: "🌸", title: "Rashtriya Phool", desc: "Kamal (Lotus) Bharat ka Rashtriya Phool hai." }
        ],
        exercises: [
          { type: "quiz", emoji: "🦚", title: "GK sawaal", question: "Bharat ka Rashtriya Pakshi kaunsa hai?",
            options: ["Mor", "Tota", "Kauwa", "Ullu"], answer: 0 },
          { type: "quiz", emoji: "🌸", title: "GK sawaal", question: "Bharat ka Rashtriya Phool kaunsa hai?",
            options: ["Gulab", "Kamal", "Suraj-mukhi", "Chameli"], answer: 1 }
        ]
      },
      {
        name: "Mahina 10 · Tyohar aur Ritu",
        learning: [
          { emoji: "🪔", title: "Diwali", desc: "Roshni aur diyon ka tyohar." },
          { emoji: "🎨", title: "Holi", desc: "Rangon aur khushiyon ka tyohar." },
          { emoji: "🇮🇳", title: "Independence Day", desc: "15 August ko azaadi ka tyohar." }
        ],
        exercises: [
          { type: "quiz", emoji: "🌸", title: "Ritu batao", question: "Holi kis ritu mein manaya jaata hai?",
            options: ["Garmi", "Basant (Spring)", "Sardi", "Barsaat"], answer: 1 },
          { type: "color", emoji: "🪔", title: "Rang bharo", instruction: "Neeche rang chuno, fir suraj/diye ki roshni par click karo.", shape: "sun" }
        ]
      },
      {
        name: "Mahina 11 · Opposites aur Rhyming Words",
        learning: [
          { emoji: "📏", title: "Lamba-Chota", desc: "Lambaai batane wale ulte shabd." },
          { emoji: "🏃", title: "Tez-Dheere", desc: "Speed batane wale ulte shabd." },
          { emoji: "🎵", title: "Rhyming Words", desc: "Cat-Hat-Mat jaise ek jaisi awaaz wale shabd." }
        ],
        exercises: [
          { type: "quiz", emoji: "📏", title: "Ulta batao", question: "'Lamba' ka ulta kya hota hai?",
            options: ["Chota", "Bada", "Mota", "Patla"], answer: 0 },
          { type: "match", emoji: "👆", title: "Rhyming milaan", instruction: "Shabd ko uske rhyming (ek jaisi awaaz wale) shabd se jodo.",
            pairs: [
              { left: "Cat", right: "Hat" },
              { left: "Sun", right: "Fun" },
              { left: "Ball", right: "Wall" },
              { left: "Box", right: "Fox" }
            ] }
        ]
      },
      {
        name: "Mahina 12 · Poora Punaravlokan",
        learning: [
          { emoji: "📚", title: "Akshar aur Matraayein", desc: "Poore saal ki varnamala aur matraon ka revision." },
          { emoji: "🔢", title: "Ginti aur Ganit", desc: "1-100 ginti, jod-ghatao ka revision." },
          { emoji: "🎓", title: "Agli Kaksha ke liye Taiyaar", desc: "Class 1 mein jaane se pehle poora punaravlokan." }
        ],
        exercises: [
          { type: "quiz", emoji: "➕", title: "Punaravlokan", question: "7 + 2 = ?",
            options: ["8", "9", "10", "7"], answer: 1 },
          { type: "quiz", emoji: "🔤", title: "Punaravlokan", question: "'बड़ा' ka ulta kya hai?",
            options: ["छोटा", "मोटा", "पतला", "लंबा"], answer: 0 }
        ]
      }
    ]
  }

};
