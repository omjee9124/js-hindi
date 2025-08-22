const button = document.querySelectorAll('.button');
const body = document.querySelector("body");

button.forEach(function(butt){
  console.log(butt);
  butt.addEventListener('click',function(ev){
    console.log(ev)
    console.log(ev.target)
    if(ev.target.id === 'grey'){
      body.style.backgroundColor = "grey"
    }
    if(ev.target.id === 'white'){
      body.style.backgroundColor = "white"
    }
    if(ev.target.id === 'blue'){
      body.style.backgroundColor = "blue"
    }
    if(ev.target.id === 'yellow'){
      body.style.backgroundColor = "yellow"
    }
  })
})