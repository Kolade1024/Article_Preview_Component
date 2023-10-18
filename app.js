const share_btn = document.querySelector(".profile .share");
const share_btn_active = document.querySelector(".profile_active .active");

const profile = document.querySelector(".profile");
const profile_active = document.querySelector(".profile_active");

const mqLarge = window.matchMedia("(min-width: 600px)");
if (mqLarge.matches) {
  share_btn.addEventListener("click", (e) => {
    profile_active.classList.toggle("display");
    share_btn.classList.toggle("share-active");
  });
} else {
  share_btn.addEventListener("click", (e) => {
    profile.classList.toggle("display");
    profile_active.classList.remove("display");
  });
  share_btn_active.addEventListener("click", (e) => {
    profile.classList.remove("display");
    profile_active.classList.toggle("display");
  });
}
