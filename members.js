
const members = [
    {
        name: "SUNGHO",
        image: "images/members/sungho.jpg",
        facts: [
            "Birth Name: Park Sungho (박선호)",
            "Birthday: Sept 4, 2003",
            "Birthplace: Anyang, Gyeonggi-do",
            "MBTI: ISTP",
            "Position: Leader, Vocalist",
            "Height: 178 cm"
        ]
    },
    {
        name: "RIWOO",
        image: "images/members/riwoo.jpg",
        facts: [
            "Birth Name: Lee Sanghwan (이상환)",
            "Birthday: Oct 22, 2003",
            "MBTI: INFP",
            "Position: Dancer, Vocalist",
            "Fun Fact: Trained in urban dance"
        ]
    },
    {
        name: "JAEHYUN",
        image: "images/members/jaehyun.jpg",
        facts: [
            "Birth Name: Myung Jaehyun (명재현)",
            "Birthday: Dec 4, 2004",
            "MBTI: ENFJ",
            "Position: Rapper, Vocalist",
            "Fun Fact: Strong stage presence"
        ]
    },
    {
        name: "TAESAN",
        image: "images/members/taesan.jpg",
        facts: [
            "Birth Name: Kim TaeSan (김태산)",
            "Birthday: Aug 10, 2004",
            "MBTI: ISTP",
            "Position: Rapper, Producer",
            "Fun Fact: Writes lyrics"
        ]
    },
    {
        name: "LEEHAN",
        image: "images/members/leehan.jpg",
        facts: [
            "Birth Name: Kim Donghyun (김동현)",
            "Birthday: Oct 20, 2004",
            "MBTI: INFJ",
            "Position: Vocalist",
            "Fun Fact: Very gentle personality"
        ]
    },
    {
        name: "WOONHAK",
        image: "images/members/woonhak.jpg",
        facts: [
            "Birth Name: Park Woonhak (박운학)",
            "Birthday: Nov 29, 2006",
            "MBTI: ENFP",
            "Position: Maknae, Vocalist",
            "Fun Fact: Brightest energy"
        ]
    }
];

const container = document.getElementById("members-container");

members.forEach(member => {
    const card = document.createElement("div");
    card.className = "member-card";

    card.innerHTML = `
        <img src="${member.image}" class="member-photo" alt="${member.name}">
        <div class="member-info">
            <h2 class="member-name">${member.name}</h2>
            <ul>
                ${member.facts.map(f => <li>${f}</li>).join("")}
            </ul>
        </div>
    `;

    container.appendChild(card);
});