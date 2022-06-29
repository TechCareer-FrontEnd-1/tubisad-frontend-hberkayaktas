let Current = 0;
// düz slider fonksiyonu
const Slide = () => {
  //document.getElementById('sliderCatcher').style.left += "-500px";
  let getter = document.getElementById("sliderCatcher").style.left;
  console.log(getter,"Çalıştı");

  if (!getter) {
    console.log("yok");
    document.getElementById("sliderCatcher").style.left = Current + "px";
  } else {
    Current -= document.getElementById("sliderCatcher").offsetWidth;
    let allLong =
      document.getElementById("sliderCatcher").offsetWidth * 2;
    let dotCalculate = allLong / Current;
    if (Math.abs(Current) <= allLong) {
      document.getElementById("sliderCatcher").style.left =
        Current + "px";
      //console.log(document.getElementById('sliderCatcher').clientWidth)
      console.log(Current, allLong);
      if (dotCalculate == -2) {
        document.getElementById("dot2").classList.add("sliderDot-a");

        document.getElementById("dot1").classList.remove("sliderDot-a");
        document.getElementById("dot3").classList.remove("sliderDot-a");
      } else if (dotCalculate == -1) {
        document.getElementById("dot3").classList.add("sliderDot-a");

        document.getElementById("dot1").classList.remove("sliderDot-a");
        document.getElementById("dot2").classList.remove("sliderDot-a");
      }
    } else {
      document.getElementById("sliderCatcher").style.left = 0 + "px";
      Current = 0;
      document.getElementById("dot1").classList.add("sliderDot-a");

      document.getElementById("dot2").classList.remove("sliderDot-a");
      document.getElementById("dot3").classList.remove("sliderDot-a");
    }
    console.log("bölüm:", dotCalculate, typeof dotCalculate);
  }
};
var timer = setInterval(Slide, 3000);
const degistir = (takeId) => {
  if (takeId == 1) {
    document.getElementById("sliderCatcher").style.left = 0 + "px";
    Current = 0;
    document.getElementById("dot1").classList.add("sliderDot-a");

    document.getElementById("dot2").classList.remove("sliderDot-a");
    document.getElementById("dot3").classList.remove("sliderDot-a");
    clearInterval(timer);
    console.log("durdu", takeId);
    setTimeout(timer,1000);
  }
  else if(takeId == 2){
        document.getElementById("sliderCatcher").style.left = -880 + "px";
        Current = 0;
        document.getElementById("dot2").classList.add("sliderDot-a");

        document.getElementById("dot1").classList.remove("sliderDot-a");
        document.getElementById("dot3").classList.remove("sliderDot-a");
        clearInterval(timer);
        setTimeout(timer,1000);
        console.log("durdu", takeId);
  }
  else if(takeId == 3){
    document.getElementById("sliderCatcher").style.left = -1760 + "px";
    Current = 0;
    document.getElementById("dot3").classList.add("sliderDot-a");

    document.getElementById("dot1").classList.remove("sliderDot-a");
    document.getElementById("dot2").classList.remove("sliderDot-a");
    clearInterval(timer);
    console.log("durdu", takeId);
    setTimeout(timer,1000);
  }
};