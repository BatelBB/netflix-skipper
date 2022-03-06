const INTRO_UIA = "player-skip-intro";
const RECAP_UIA = "player-skip-recap";

const BUTTONS = [INTRO_UIA, RECAP_UIA];

async function skipper() {
  try {
    chrome.storage.local.get(
      ["skipIntro", "skipRecap"],
      ({ skipIntro, skipRecap}) => {
        const mapper = {
          [INTRO_UIA]: skipIntro,
          [RECAP_UIA]: skipRecap,
        };
        BUTTONS.forEach((uia) => {
          const button = Object.values(
            document.getElementsByTagName("button")
          ).find((elem) => elem.getAttribute("data-uia") === uia);
          if (button && mapper[uia]) {
            button.click();
          }
        });
      }
    );
  } catch (err) {
    console.error(err);
  }
}

if (document.location.host.includes(".netflix.")) {
  setInterval(() => skipper(), 500);
}
