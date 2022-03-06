let skipIntroCheckbox = document.getElementById("skip-intro");
let skipRecapCheckbox = document.getElementById("skip-recap");

skipIntroCheckbox.addEventListener("click", async () => {
  chrome.storage.local.set({ skipIntro: skipIntroCheckbox.checked });
});

skipRecapCheckbox.addEventListener("click", async () => {
  chrome.storage.local.set({ skipRecap: skipRecapCheckbox.checked });
});


chrome.storage.local.get(
  ["skipIntro", "skipRecap"],
  ({ skipIntro, skipRecap}) => {
    if (skipIntro) {
      skipIntroCheckbox.checked = true;
    }
    if (skipRecap) {
      skipRecapCheckbox.checked = true;
    }
  }
);
