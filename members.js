const members = [
    {
        name: "SUNGHO",
        image: "images/members/sungho.jpg",
        stats: [
            "<b>Birth Name:</b> Park Sung-ho (박성호)",
            "<b>Position(s):</b> Main Vocalist",
            "<b>Birthday:</b> September 4th, 2003",
            "<b>Height:</b> 174 cm (5'9\")",
            "<b>MBTI Type:</b> ENTJ",
            "<b>Nationality:</b> Korean",
            "<b>Representative Emoji:</b> 🐱 (Cat)"
        ],
        factsTitle: "Sungho Facts:",
        facts: [
            "Born in Wonju, Gangwon, South Korea.",
            "Family of four (parents, older brother).",
            "Hobbies: Cafe hopping and taking pictures.",
            "Loves cycling and art."
        ]
    },
    {
        name: "RIWOO",
        image: "images/members/riwoo.jpg",
        stats: [
            "<b>Birth Name:</b> Lee Sang-hyeok (이상혁)",
            "<b>Position(s):</b> Main Dancer, Vocalist",
            "<b>Birthday:</b> October 22nd, 2003",
            "<b>Zodiac Sign:</b> Libra",
            "<b>Height:</b> 170 cm (5'7\")",
            "<b>MBTI Type:</b> ISFP",
            "<b>Nationality:</b> Korean",
            "<b>Representative Emojis:</b> 🦦 (Otter), 🍩 (Donut)"
        ],
        factsTitle: "Riwoo Facts:",
        facts: [
            "Born in Beon-dong, Gangbuk, Seoul, South Korea.",
            "Family of five (parents, older brother, younger brother).",
            "Hobbies: Dancing and Gaming."
        ]
    },
    {
        name: "JAEHYUN",
        // Using the filename you provided: Jeahyun.jpg
        image: "images/members/Jeahyun.jpg",
        stats: [
            "<b>Birth Name:</b> Myung Jae-hyun (명재현)",
            "<b>Position(s):</b> Leader, Main Rapper",
            "<b>Birthday:</b> December 4th, 2003",
            "<b>Zodiac Sign:</b> Sagittarius",
            "<b>Height:</b> 177 cm (5'10\")",
            "<b>MBTI Type:</b> ENFP",
            "<b>Nationality:</b> Korean",
            "<b>Representative Emojis:</b> 🐶 (Dog), 🐺 (Wolf)"
        ],
        factsTitle: "Jaehyun Facts:",
        facts: [
            "Born in Daebang-dong, Dongjak, Seoul, South Korea.",
            "Family of four (parents, older brother).",
            "He was a former YG Entertainment trainee.",
            "Hobbies: Competing and Playing Sports (especially Soccer)."
        ]
    },
    {
        name: "TAESAN",
        image: "images/members/taesan.jpg",
        stats: [
            "<b>Birth Name:</b> Han Dong-min (한동민)",
            "<b>Position(s):</b> Lead Vocalist, Rapper",
            "<b>Birthday:</b> August 10th, 2004",
            "<b>Zodiac Sign:</b> Leo",
            "<b>Height:</b> 182 cm (6'0\")",
            "<b>MBTI Type:</b> INTJ",
            "<b>Nationality:</b> Korean",
            "<b>Representative Emojis:</b> 🐈‍⬛ (Black Cat), 🗻 (Mountain)"
        ],
        factsTitle: "Taesan Facts:",
        facts: [
            "Born in Hwajeong-dong, Seo, Gwangju, South Korea.",
            "Family of five (parents, younger brother, younger sister).",
            "Huge lover of music, has been writing since youth.",
            "Hobbies: Reading and Playing the piano."
        ]
    },
    {
        name: "LEEHAN",
        image: "images/members/leehan.jpg",
        stats: [
            "<b>Birth Name:</b> Kim Dong-hyun (김동현)",
            "<b>Position(s):</b> Lead Vocalist, Visual",
            "<b>Birthday:</b> October 20th, 2004",
            "<b>Zodiac Sign:</b> Libra",
            "<b>Height:</b> 180 cm (5'11\")",
            "<b>MBTI Type:</b> ESFJ",
            "<b>Nationality:</b> Korean",
            "<b>Representative Emojis:</b> 🐠 (Fish), 🧚‍♂️ (Fairy)"
        ],
        factsTitle: "Leehan Facts:",
        facts: [
            "Born in Allak-dong, Dongnae, Busan, South Korea.",
            "Family of four (parents, older sister).",
            "Hobbies: Raising fishes and his favorite hobby is decorating fish tanks."
        ]
    },
    {
        name: "WOONHAK",
        // Using the filename you provided: wookhak.jpg
        image: "images/members/wookhak.jpg",
        stats: [
            "<b>Birth Name:</b> Kim Woon-hak (김운학)",
            "<b>Position(s):</b> Maknae, Rapper, Vocalist",
            "<b>Birthday:</b> November 29th, 2006",
            "<b>Zodiac Sign:</b> Sagittarius",
            "<b>Height:</b> 182 cm (6'0\")",
            "<b>MBTI Type:</b> ENFP",
            "<b>Nationality:</b> Korean",
            "<b>Representative Emojis:</b> 🧸 (Bear), 🧼 (Soap)"
        ],
        factsTitle: "Woonhak Facts:",
        facts: [
            "Born in Iksan-dong, Yeongtong, Suwon, Gyeonggi-do, South Korea.",
            "Family of three (parents, younger sister).",
            "He loves music, working out, and fashion.",
            "Hobbies: Playing basketball and other sports."
        ]
    }
];

const container = document.getElementById("members-container");

members.forEach(member => {
    const card = document.createElement("div");
    card.className = "member-card";

    card.innerHTML = `
        <img src="${member.image}" class="member-photo" alt="${member.name}" title="Click me!">
        
        <div class="member-info-middle">

            <ul>
                ${member.stats.map(stat => `<li>${stat}</li>`).join("")}
            </ul>
            <button class="toggle-facts-btn">Show Facts</button>
        </div>

        <div class="member-facts-right" style="display: none;">
            <span class="facts-title">${member.factsTitle}</span>
            <ul>
                ${member.facts.map(fact => `<li>${fact}</li>`).join("")}
            </ul>
        </div>
    `;

    // 3. Button Interaction: Show/Hide Facts
    const toggleBtn = card.querySelector(".toggle-facts-btn");
    const factsDiv = card.querySelector(".member-facts-right");

    toggleBtn.addEventListener("click", () => {
        if (factsDiv.style.display === "none") {
            // Show the facts
            factsDiv.style.display = "block";
            toggleBtn.textContent = "Hide Facts"; 
        } else {
            // Hide the facts
            factsDiv.style.display = "none";
            toggleBtn.textContent = "Show Facts"; 
        }
    });

    // Image Interaction: Click to say Hello
    const image = card.querySelector(".member-photo");
    image.addEventListener("click", () => {
        alert(`Hello! You clicked on ${member.name}! 💙`);
    });

    // Append the card to the container (Only happens once per member)
    container.appendChild(card);
});