const camera = document.getElementById("camera");
const predictButton = document.getElementById("predictButton");
const againButton = document.getElementById("againButton");

const scanLine = document.getElementById("scanLine");
const statusText = document.getElementById("status");

const result = document.getElementById("result");
const scoreText = document.getElementById("score");
const messageText = document.getElementById("message");


/* -------------------------
   START CAMERA
------------------------- */

async function startCamera() {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "user"
            },
            audio: false
        });

        camera.srcObject = stream;

        statusText.textContent =
            "Position your face inside the scanner.";

    }

    catch (error) {

        console.error(error);

        statusText.textContent =
            "Camera permission is needed to use the scanner.";

        predictButton.disabled = true;
    }
}


/* -------------------------
   RANDOM RESULTS
------------------------- */

const messages = [

    {
        min: 0,
        max: 20,
        texts: [
            "It's looking rough 💀 You might want to open the textbook.",
            "My academic downfall was just part of the lore.",
            "My GPA has suffered enough under my leadership.",
            "I'm bringing my grades back from the dead.",
            "My comeback starts right after this one TikTok."
        ]
    },

    {
        min: 21,
        max: 40,
        texts: [
            "Potential detected... motivation not detected.",
            "Academic comeback sponsored by caffeine and panic.",
            "My calculator and I are back on speaking terms.",
            "Can't talk, I'm pretending to have my life together.",
            "I have two options: lock in or become mysteriously wealthy."
        ]
    },

    {
        min: 41,
        max: 60,
        texts: [
            "A comeback is possible. The academic weapon is still loading.",
            "My grades are about to receive an unexpected software update.",
            "They said lock in, so I changed my screen time password.",
            "Straight A's or a very convincing explanation.",
            "New semester. New habits. New opportunities."
        ]
    },

    {
        min: 61,
        max: 80,
        texts: [
            "Wait... you're actually starting to lock in 🔥",
            "From academic victim to academic weapon.",
            "Going from 'what assignment?' to 'already submitted.'",
            "One good grade and suddenly I think I'm Einstein.",
            "The syllabus said 'good luck' like I'm gonna need it."
        ]
    },

    {
        min: 81,
        max: 94,
        texts: [
            "Academic weapon detected. Professors are getting nervous.",
            "The comeback will be studied in future textbooks.",
            "I'm either making the Dean's List or making memories.",
            "From academic victim to academic weapon. 🧠🔥",
            "Going from 'what assignment?' to 'already submitted.'"
        ]
    },

    {
        min: 95,
        max: 100,
        texts: [
            "ABSOLUTE ACADEMIC COMEBACK. 4.0 ENERGY DETECTED. 🧠🔥",
            "Academic weapon detected. Professors are getting nervous.",
            "The comeback will be studied in future textbooks. 📚🔥",
            "From academic victim to academic weapon. ⚔️📚",
            "I'm either making the Dean's List or making memories. 🏆",
            "One good grade and suddenly I think I'm Einstein. 🧠"
        ]
    }

];


function getMessage(score) {

    const category = messages.find(item =>
        score >= item.min && score <= item.max
    );

    const randomIndex =
        Math.floor(Math.random() * category.texts.length);

    return category.texts[randomIndex];
}


/* -------------------------
   FAKE SCAN
------------------------- */

predictButton.addEventListener("click", () => {

    predictButton.disabled = true;

    result.classList.add("hidden");

    scanLine.classList.add("scanning");


    const scanningMessages = [

        "Scanning academic aura...",

        "Analyzing procrastination levels...",

        "Checking assignment survival probability...",

        "Measuring locked-in potential...",

        "Calculating comeback..."
    ];


    let messageIndex = 0;

    statusText.textContent =
        scanningMessages[messageIndex];


    const messageInterval = setInterval(() => {

        messageIndex++;

        if (messageIndex < scanningMessages.length) {

            statusText.textContent =
                scanningMessages[messageIndex];
        }

    }, 700);


    setTimeout(() => {

        clearInterval(messageInterval);

        scanLine.classList.remove("scanning");


        /* Completely random score */

/* Random score between 60 and 100 */

const score =
    Math.floor(Math.random() * 41) + 60;


        scoreText.textContent =
            score + "%";


        messageText.textContent =
            getMessage(score);


        statusText.textContent =
            "Analysis complete.";


        result.classList.remove("hidden");

        predictButton.disabled = false;


    }, 3500);

});


/* -------------------------
   SCAN AGAIN
------------------------- */

againButton.addEventListener("click", () => {

    result.classList.add("hidden");

    scoreText.textContent = "0%";

    statusText.textContent =
        "Position your face inside the scanner.";

});


/* START */

startCamera();