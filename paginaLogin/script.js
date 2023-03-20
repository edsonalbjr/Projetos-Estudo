const wrapper = document.querySelector(" .wrapper");
const loginLink = document.querySelector(" .login-link");
const registerLink = document.querySelector(" .register-link");
const btnPopout = document.querySelector(" .btnLogin-popout");
const iconClose = document.querySelector(" .icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopout.addEventListener("click", () => {
  wrapper.classList.add("active-popout");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popout");
});
