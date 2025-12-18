function watchAd() {
  document.getElementById("status").innerText = "⏳ Ad loading...";

  // Temporary demo ad (later Monetag real ad বসাবো)
  window.open("https://monetag.com", "_blank");

  setTimeout(() => {
    document.getElementById("status").innerText =
      "✅ Ad completed! Reward added (demo)";
  }, 15000);
}
