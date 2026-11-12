// --- PART 1: Time-based Greeting ---
let userName = "Pragya Thapa Magar";
let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log(`Good morning, ${userName}!`);
} else if (currentHour < 18) {
    console.log(`Good afternoon, ${userName}!`);
} else {
    console.log(`Good evening, ${userName}!`);
}


// --- PART 2: Age and Days Lived Verification ---
let age = 19; // Age: 19 yrs
let daysLived = age * 365;
console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// --- PART 3: Week 11 DOM & Dynamic Event Handling ---
// 1. Pinpoint the theme toggle button element using querySelector[span_2](start_span)[span_2](end_span)
const themeButton = document.querySelector('#theme-toggle');

// 2. Deploy an event listener ('security guard') to detect clicks[span_3](start_span)[span_3](end_span)
themeButton.addEventListener('click', () => {
    // 3. Toggle the 'dark-mode' class on the body element[span_4](start_span)[span_4](end_span)
    document.body.classList.toggle('dark-mode');
});
