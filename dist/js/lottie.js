let lottieSearchAnimation, lottieNotificationAnimation, lottieDownloadAnimation;
const Search = function () {
  lottie.loadAnimation({
    container: lottieSearchAnimation, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "data/Search.json", // the path to the animation json
    preserveAspectRatio: "xMinYMax meet",
  });
};

const NotificationAnimation = function () {
  lottie.loadAnimation({
    container: lottieNotificationAnimation, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "data/Notification.json", // the path to the animation json
    preserveAspectRatio: "xMinYMax meet",
  });
};

const Download = function () {
  lottie.loadAnimation({
    container: lottieDownloadAnimation, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "data/Download.json", // the path to the animation json
    preserveAspectRatio: "xMinYMax meet",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  lottieSearchAnimation = document.querySelector(".js-lottie-search-animation");
  lottieNotificationAnimation = document.querySelector(
    ".js-lottie-notification-animation"
  );
  lottieDownloadAnimation = document.querySelector(
    ".js-lottie-download-animation"
  );
  Search();
  NotificationAnimation();
  Download();
});
