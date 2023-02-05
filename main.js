let menuVisible = false;
function togleMenu(){
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