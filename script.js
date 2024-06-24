const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".link-content");
const sideMenu = document.getElementById("side-menu");

const form = document.querySelector("form");
const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const result = document.querySelector("#result");

function sendEmail() {
  var params = {
    name: fullname.value,
    email: email.value,
    message: message.value,
  };
  const serviceID = "service_038z3ux";
  const templateID = "template_3rb8xge";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      result.innerHTML = "Your message sent successfully...";
      setTimeout(()=>{result.innerHTML=""},5000)
      fullname.value = "";
      email.value = "";
      message.value = "";
    })
    .catch((err) => {
      result.innerHTML = "There is a problem while sending please try again!!";
      setTimeout(()=>{result.innerHTML=""},5000)
    });
}

function tabswitch(tabname) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  sideMenu.style.right = "0";
}
function closemenu() {
  sideMenu.style.right = "-200px";
}
