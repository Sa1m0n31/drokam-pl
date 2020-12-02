const disableScroll = () => {
  if(typeof document !== 'undefined') {
    const body = document.querySelector("body");
    body.style.overflowY = "hidden";
    body.style.height = "100vh";
  }
}

const enableScroll = () => {
  if(typeof document !== 'undefined') {
    const body = document.querySelector("body");
    body.style.overflowY = "auto";
    body.style.height = "auto";
  }
}

export {disableScroll, enableScroll};