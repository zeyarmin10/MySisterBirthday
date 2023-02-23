let ball1 = document.querySelector("#color_balloon_1");
let ball2 = document.querySelector("#color_balloon_2");
let ball3 = document.querySelector("#color_balloon_3");
let ball4 = document.querySelector("#color_balloon_4");
let ball5 = document.querySelector("#color_balloon_5");
let ball6 = document.querySelector("#color_balloon_6");
let bdball = document.querySelector("#bd_balloon");
let bdcake = document.querySelector("#bd_cake_gif");
let bdTitle = document.querySelector(".bd-title");
let surpriseBtn = document.querySelector(".surprise-btn");
let bdWishBtn = document.querySelector(".bd-wish-btn");
let surpriseVideo = document.querySelector("#myvideo");
let pointingFinger = document.querySelector(".pointing-hand");
let openSpan = document.querySelector(".open-span");

let bdCakeBot = 130;
let bottom1 = -30;
let left1 = -5;
let right2 = 0;
let bottom2 = -30;
let bottom3 = -30;
let right3 = 0;
let bottom4 = -30;
let left4 = -15;
let bottom5 = -30;
let right5 = 0;
let bottom6 = -30;
let left6 = 0;
let bdtitleTop = -20;
let surpriseBtnTop = -20;
let bdBalloonBot = 160;
let bdWishBtnBot = 190;

function playMusic() {
  document.querySelector(".gift-yellow").classList.add("fadeOut");
  let bdMusic = document.getElementById("my_audio").play();
  surpriseVideo.pause();
  surpriseVideo.currentTime = 0;
  setTimeout(() => {
    document.querySelector(".gift-yellow").classList.add("hide-playme");
    document.querySelector(".bd-cake-gif").classList.add("fadeIn");
    document.querySelector(".play-btn").style.display = "none";
    document.querySelector(".space-div").style.display = "none";
    openSpan.style.display = "none";
  }, 2000);
  document.querySelector(".color-balloon").style.display = "block";
  document.querySelector(".bd-balloon");
  document.querySelector(".surprise-btn").style.display = "block";
  document.querySelector("#bd_balloon").style.display = "block";
  document.querySelector(".bd-wish-btn").style.display = "block";

  // bd cake
  setTimeout(() => {
    setInterval(() => {
      if (bdCakeBot > 9) {
        bdCakeBot -= 1;
      }
      bdcake.style.bottom = `${bdCakeBot}vh`;
    }, 50);
  }, 2000);

  // balloon 1
  setTimeout(() => {
    setInterval(() => {
      if (bottom1 < 125) {
        bottom1 += 1;
      }
      if (left1 < 125) {
        left1 += 1;
      }
      ball1.style.bottom = `${bottom1}vh`;
      ball1.style.left = `${left1}vw`;
    }, 30);
  }, 3000);
  // balloon 2
  setTimeout(() => {
    setInterval(() => {
      if (bottom2 < 125) {
        bottom2 += 1;
      }
      if (right2 < 120) {
        right2 += 1;
      }
      ball2.style.bottom = `${bottom2}vh`;
      ball2.style.right = `${right2}vw`;
    }, 20);
  }, 4000);

  // balloon 3
  setTimeout(() => {
    setInterval(() => {
      if (bottom3 < 125) {
        bottom3 += 1;
      }
      if (right3 < 120) {
        right3 += 1;
      }
      ball3.style.bottom = `${bottom3}vh`;
      ball3.style.right = `${right3}vw`;
    }, 20);
  }, 5500);

  // balloon 4
  setTimeout(() => {
    setInterval(() => {
      if (bottom4 < 125) {
        bottom4 += 1;
      }
      if (left4 < 120) {
        left4 += 1;
      }
      ball4.style.bottom = `${bottom4}vh`;
      ball4.style.left = `${left4}vw`;
    }, 30);
  }, 6500);

  // balloon 5
  setTimeout(() => {
    setInterval(() => {
      if (bottom5 < 125) {
        bottom5 += 1;
      }
      if (right5 < 120) {
        right5 += 1;
      }
      ball5.style.bottom = `${bottom5}vh`;
      ball5.style.right = `${right5}vw`;
    }, 20);
  }, 7500);

  // balloon 6
  setTimeout(() => {
    setInterval(() => {
      if (bottom6 < 125) {
        bottom6 += 1;
      }
      if (left6 < 120) {
        left6 += 1;
      }
      ball6.style.bottom = `${bottom6}vh`;
    }, 20);
  }, 8500);

  // bd surprise  btn
  setTimeout(() => {
    setInterval(() => {
      if (surpriseBtnTop < 20) {
        surpriseBtnTop += 1;
      }
      surpriseBtn.style.top = `${surpriseBtnTop}vh`;
      // pointingFinger.style.display = "block";
    }, 40);
  }, 10500);

  //bd title
  setTimeout(() => {
    setInterval(() => {
      if (bdtitleTop < 4) {
        bdtitleTop += 1;
      }
      bdTitle.style.top = `${bdtitleTop}vh`;
    }, 40);
  }, 10500);

  // bd balloon
  setTimeout(() => {
    setInterval(() => {
      if (bdBalloonBot > -500) {
        bdBalloonBot -= 1;
      }
      bdball.style.top = `${bdBalloonBot}vh`;
    }, 50);
  }, 10500);

  //bd wish btn
  setTimeout(() => {
    setInterval(() => {
      if (bdWishBtnBot > 37) {
        bdWishBtnBot -= 1;
      }
      bdWishBtn.style.top = `${bdWishBtnBot}vh`;
    }, 50);
  }, 11000);
}

const pauseMusic = () => {
  let bdMusic = document.getElementById("my_audio");
  let isPlaying = true;

  if (!isPlaying) {
    isPlaying == true;
    bdMusic.play();
    surpriseVideo.pause();
    surpriseVideo.currentTime = 0;
  } else {
    isPlaying == false;
    bdMusic.pause();
    surpriseVideo.play();
  }
};
