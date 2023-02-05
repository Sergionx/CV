let menuVisible = false;
function togleMenu(){
  if(menuVisible){
    document.getElementById("navbar").classList ="";
    menuVisible = false;
  }else{
    document.getElementById("navbar").classList ="responsive";
    menuVisible = true;
  }
  console.log(document.getElementById("navbar"))
}

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000)

skills = [
  {
    name: 'HTML',
    percent: 90,
    color: '#f44336'
  },
  {
    name: 'CSS',
    percent: 60,
    color: '#2196f3'
  },
  {
    name: 'JavaScript',
    percent: 90,
    color: '#ffeb3b'
  },
  {
    name: 'Angular',
    percent: 70,
    color: '#f44336'
  },
  {
    name: 'React',
    percent: 60,
    color: '#2196f3'
  },
  {
    name: 'Firebase',
    percent: 80,
    color: '#ffeb3b'
  },
  {
    name: 'MySQL',
    percent: 70,
    color: '#f44336'  
  }
]

skills.forEach(function(skill){
  document.getElementById('skills-container').innerHTML += `
    <h4>${skill.name}</h4>
    <div class="progress-bar" role="progressbar" style="width: ${skill.percent}%; background-color: ${skill.color};" aria-valuenow="${skill.percent}" aria-valuemin="0" aria-valuemax="100">${skill.percent}% ${"   "}</div>
  `
})

function contact(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const error = document.getElementById("error");
  let text;
  // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if(name.length < 5){
    text = "Please Enter valid Name";
    error.innerHTML = text;
    error.style.display = "block";

    return false;
  }
  if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    text = "Please Enter valid Email";
    error.innerHTML = text;
    error.style.display = "block";
    return false;
  }
  if(message.length <= 20){
    text = "Please Enter More Than 20 Characters";
    error.innerHTML = text;
    error.styl.display = "block";
    return false;
  }
  alert("Form Submitted Successfully!");
  error.style.display = "none";
  return true;
}