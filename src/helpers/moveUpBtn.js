const moveUpBtnHandle = () => {
  if((typeof document !== 'undefined')&&(typeof window !== 'undefined')) {
    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 200) {
        if(document.querySelector(".moveUpBtn") !== null) document.querySelector(".moveUpBtn").style.opacity = "1";
      }
      else {
        if(document.querySelector(".moveUpBtn") !== null) document.querySelector(".moveUpBtn").style.opacity = "0";
      }
    });

    if(document.querySelector(".moveUpBtn") !== null) {
      document.querySelector('.moveUpBtn').addEventListener("click", () => {
        document.querySelector("#___gatsby").scrollIntoView({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
    }
  }
}

export default moveUpBtnHandle;