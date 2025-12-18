let lastAdTime = 0;
const COOLDOWN = 60 * 60 * 1000; // 1 hour

function watchAd() {
  const now = Date.now();

  if (now - lastAdTime < COOLDOWN) {
    document.getElementById("status").innerText =
      "⏳ Please wait before watching next ad.";
    return;
  }

  if (typeof window.showMonetagAd !== "function") {
    document.getElementById("status").innerText =
      "❌ Ad not ready. Try again later.";
    return;
  }

  window.showMonetagAd({
    adUnitId: "PASTE_YOUR_AD_UNIT_ID_HERE",
    onComplete: () => {
      lastAdTime = Date.now();
      document.getElementById("status").innerText =
        "✅ Ad completed! Reward added.";
    },
    onError: () => {
      document.getElementById("status").innerText =
        "❌ Ad failed. Try again later.";
    },
  });
}
