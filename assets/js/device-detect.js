// Auto-set App Store / Play Store links

document.addEventListener("DOMContentLoaded", () => {
  const ua = navigator.userAgent.toLowerCase();

  // REPLACE THESE WITH YOUR REAL STORE LINKS
  const appleLink = "https://apps.apple.com/us/app/your-app-id";
  const androidLink = "https://play.google.com/store/apps/details?id=your.app.id";

  document.getElementById("apple-btn").href = appleLink;
  document.getElementById("android-btn").href = androidLink;

  // Optional automatic redirect (disabled)
  // if (/iphone|ipad|ipod/.test(ua)) window.location.href = appleLink;
  // if (/android/.test(ua)) window.location.href = androidLink;
});
