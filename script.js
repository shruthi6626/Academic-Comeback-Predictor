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
        text: "It's looking rough 💀 You might want to open the textbook."
    },

    {
        min: 21,
        max: 40,
        text: "Potential detected... motivation not detected."
    },

    {
        min: 41,
        max: 60,
        text: "A comeback is possible. The academic weapon is still loading."
    },

    {
        min: 61,
        max: 80,
        text: "Wait... you're actually starting to lock in 🔥"
    },

    {
        min: 81,
        max: 94,
        text: "Academic weapon detected. Professors are getting nervous."
    },

    {
        min: 95,
        max: 100,
        text: "ABSOLUTE ACADEMIC COMEBACK. 4.0 ENERGY DETECTED. 🧠🔥"
    }

];


function getMessage(score) {

    const result = messages.find(item =>
        score >= item.min && score <= item.max
    );

    return result.text;
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

        const score =
            Math.floor(Math.random() * 101);


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