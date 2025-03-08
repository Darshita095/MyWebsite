// GSAP Animations
gsap.from("header", { opacity: 0, y: -50, duration: 1.5, ease: "bounce.out" });

gsap.from("nav ul li", { opacity: 0, y: 30, stagger: 0.2, duration: 1 });

gsap.from("section", { opacity: 0, scale: 0.9, duration: 1, delay: 0.5 });

gsap.from("footer", { opacity: 0, y: 20, duration: 1.2, delay: 1.5 });

// Interactive Love Quiz
function checkQuiz() {
    let correctAnswers = ["college", "pizza", "beach"];
    let userAnswers = [
        document.getElementById("q1").value.toLowerCase(),
        document.getElementById("q2").value.toLowerCase(),
        document.getElementById("q3").value.toLowerCase()
    ];

    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }

    let resultText = "";
    if (score === 3) {
        resultText = "💖 Wow! You know me so well! You're the best boyfriend ever! 😍";
    } else if (score === 2) {
        resultText = "😊 Pretty good! But I expected you to know a little more. 😆";
    } else {
        resultText = "😂 Hmm, are you even my boyfriend? We need a serious talk! 🤨";
    }

    document.getElementById("quiz-result").innerText = resultText;
}

// Date Idea Generator
function randomDateIdea() {
    let ideas = [
        "🌙 Stargazing & late-night snacks",
        "🍕 A pizza-making competition",
        "🎨 Painting together at home",
        "🌊 A beach picnic",
        "🎬 Movie marathon with cozy blankets"
    ];
    let randomIndex = Math.floor(Math.random() * ideas.length);
    document.getElementById("date-idea").innerText = ideas[randomIndex];
}

document.addEventListener("DOMContentLoaded", function() {
    let timerElement = document.getElementById("timer");

    // Check if the timer element exists
    if (!timerElement) {
        console.error("❌ Timer element not found!");
        return;
    }

    // Set your next anniversary date (YYYY, MM (0-based), DD, HH, MM, SS)
    let nextAnniversary = new Date(2025, 2, 8, 0, 0, 0).getTime(); // March 8, 2025

    function updateCountdown() {
        let now = new Date().getTime();
        let timeLeft = nextAnniversary - now;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.innerHTML = "💖 Happy Anniversary, Love! 💖";
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerElement.innerHTML = `⏳ ${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs left`;
    }

    // Run the function immediately and set interval
    updateCountdown();
    let timerInterval = setInterval(updateCountdown, 1000);
});

// Reveal Love Letter
function revealLetter() {
    document.getElementById("letter").style.display = "block";
}

// Animate Love Notes
gsap.from(".love-note", { opacity: 0, y: 50, stagger: 0.3, duration: 1 });

// Animate Photo Polaroids
gsap.from(".polaroid", { opacity: 0, scale: 0.8, stagger: 0.3, duration: 1 });


// Date Idea Generator
function randomDateIdea() {
    let ideas = [
        "🌙 Stargazing & late-night snacks",
        "🍕 A pizza-making competition",
        "🎨 Painting together at home",
        "🌊 A beach picnic",
        "🎬 Movie marathon with cozy blankets"
    ];
    let randomIndex = Math.floor(Math.random() * ideas.length);
    document.getElementById("date-idea").innerText = ideas[randomIndex];
}

function checkQuiz() {
    let correctAnswers = { q1: "college", q2: "rajma chawal", q3: "romance", q4: "buy me my favorite food", q5: "look into my eyes until I blush", q6: "saggitarius", q7: "oversized", q8: "MPS", q9: "dharuhera", q10: "thighs" };
    

    let userAnswers = {};
    for (let i = 1; i <= 10; i++) {
        userAnswers["q" + i] = document.querySelector(`input[name="q${i}"]:checked`)?.value;
    }

    let score = 0;
    for (let key in correctAnswers) {
        if (userAnswers[key] === correctAnswers[key]) {
            score++;
        }
    }

    let resultText = "";
    if (score === 10) {
        resultText = "💖 You're my soulmate! You know me PERFECTLY! 😍";
    } else if (score >= 7) {
        resultText = "😊 Wow! You know me really well! 💕";
    } else if (score >= 5) {
        resultText = "😆 Not bad! But you need to pay more attention! 😜";
    } else {
        resultText = "😂 Uh oh... do we need to talk? 🤨";
    }

    document.getElementById("quiz-result").innerText = resultText;
    document.getElementById("quiz-score").innerText = `Score: ${score}/10`;
}


function randomDateIdea() {
    let ideas = [
        "🌙 Stargazing & late-night snacks",
        "🍕 A pizza-making competition",
        "🎨 Painting together at home",
        "🌊 A beach picnic",
        "🎬 Movie marathon with cozy blankets",
        "💃 Dance under the stars",
        "🍷 Wine & painting night",
        "🚗 A spontaneous road trip",
        "🍜 Cooking a romantic dinner together",
        "🏕️ Camping in the backyard with fairy lights"
    ];

    let dateIdeaText = document.getElementById("date-idea");

    // Start slot machine shuffle effect
    let shuffleCount = 10;
    let shuffleInterval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * ideas.length);
        dateIdeaText.innerText = ideas[randomIndex];
        dateIdeaText.style.opacity = "0.5";
    }, 100);

    // Final reveal after shuffle
    setTimeout(() => {
        clearInterval(shuffleInterval);
        let randomIndex = Math.floor(Math.random() * ideas.length);
        dateIdeaText.innerText = `❤️ ${ideas[randomIndex]} ❤️`;
        dateIdeaText.style.opacity = "1";
        dateIdeaText.style.transform = "scale(1.1)";
        dateIdeaText.style.animation = "fadeIn 1s ease-in-out";
    }, shuffleCount * 100);
}

function surpriseMe() {
    let surprises = [
        "💋 Give me 10 kisses now!",
        "🤗 Give me a tight hug now!",
        "😍 Whisper 'I love you' in my ear!",
        "🎶 Sing me a romantic song!",
        "📸 Take a super cute selfie together!",
        "📝 Write me a short love note right now!",
        "💃 Dance with me for 1 minute!",
        "🎭 Act out a love scene from a movie!",
        "🎁 I get to make a wish, and you must fulfill it!"
    ];

    let surpriseText = document.getElementById("date-idea");

    // Start slot machine shuffle effect
    let shuffleCount = 10;
    let shuffleInterval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * surprises.length);
        surpriseText.innerText = surprises[randomIndex];
        surpriseText.style.opacity = "0.5";
    }, 100);

    // Final reveal after shuffle
    setTimeout(() => {
        clearInterval(shuffleInterval);
        let randomIndex = Math.floor(Math.random() * surprises.length);
        surpriseText.innerText = `🎁 ${surprises[randomIndex]} 🎁`;
        surpriseText.style.opacity = "1";
        surpriseText.style.transform = "scale(1.1)";
        surpriseText.style.animation = "fadeIn 1s ease-in-out";
    }, shuffleCount * 100);
}

