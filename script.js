// Firebase Config (หากใช้งาน Firebase)
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     databaseURL: "YOUR_DATABASE_URL",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };
// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();

document.addEventListener("DOMContentLoaded", () => {
    const nickname = localStorage.getItem("nickname");
    if (!nickname) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("welcome-message").innerText = `Hello, ${nickname}!`;
    const catImage = document.getElementById("cat-image");
    const clickCounter = document.getElementById("click-counter");
    const stats = document.getElementById("stats");

    let clickCount = 0;
    let openMouth = false;

    // Load previous stats (ถ้าใช้ Firebase)
    // firebase.database().ref(`users/${nickname}/clicks`).on('value', (snapshot) => {
    //     clickCount = snapshot.val() || 0;
    //     clickCounter.innerText = `Clicks: ${clickCount}`;
    // });

    catImage.addEventListener("click", () => {
        clickCount += 1;
        clickCounter.innerText = `Clicks: ${clickCount}`;

        // Toggle image
        openMouth = !openMouth;
        catImage.src = openMouth ? "erth2.png" : "erth1.png";

        // Update database (ถ้าใช้ Firebase)
        // firebase.database().ref(`users/${nickname}`).set({
        //     clicks: clickCount
        // });

        // Show stats (จำลองข้อมูล)
        stats.innerText = `${nickname}'s clicks: ${clickCount}`;
    });
});
