let menuVisible = false;
function togleMenu() {
  if (menuVisible) {
    document.getElementById("navbar").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("navbar").classList = "responsive";
    menuVisible = true;
  }
  console.log(document.getElementById("navbar"));
}

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

skills = [
  {
    name: "HTML",
    percent: 90,
    color: "#Ec8d26",
  },
  {
    name: "CSS",
    percent: 60,
    color: "#71EAF0",
  },
  {
    name: "JavaScript",
    percent: 90,
    color: "#Faee12",
  },
  {
    name: "Angular",
    percent: 70,
    color: "#C32b1a",
  },
  {
    name: "React",
    percent: 60,
    color: "#3c9ee5",
  },
  {
    name: "Firebase",
    percent: 80,
    color: "#ffeb3b",
  },
  {
    name: "MySQL",
    percent: 70,
    color: "#51cf36",
  },
];


skills.forEach(skill =>{
  document.getElementById("skills-container").innerHTML += `
  <div class="single-chart">
    <h3>${skill.name}</h3>
    <svg viewBox="0 0 36 36" class="circular-chart" >
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle" style="stroke: ${skill.color}"
        stroke-dasharray="${skill.percent}, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">${skill.percent}%</text>
    </svg>
  </div>
  `;
});

function contact() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const error = document.getElementById("error");
  let text;
  // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error.innerHTML = text;
    error.style.display = "block";

    return false;
  }
  if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    text = "Please Enter valid Email";
    error.innerHTML = text;
    error.style.display = "block";
    return false;
  }
  if (message.length <= 20) {
    text = "Please Enter More Than 20 Characters";
    error.innerHTML = text;
    error.styl.display = "block";
    return false;
  }
  alert("Form Submitted Successfully!");
  error.style.display = "none";
  return true;
}
