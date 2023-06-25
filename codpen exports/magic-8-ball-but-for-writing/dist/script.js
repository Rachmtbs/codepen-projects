// create an array
//window.onload function why do I need this
//in the function document. get element.id for each element in the html
// create an event listener for each element with an if and else 

//create the array

var answers = ['A ghost who refuses to believe hes dead', 'An assassin trying to solve a plot against them without resorting to assassination', 
'Fantasy with a twist', 
'A prince pretending to need rescuing just to steel the souls of rescuers', 
'Horror', 'A haunted house that protects people from the outside world', 'A demon that does not care to be evil', 
 'A modern day horror on a different world', ' a fantasy world in the modern world', 
 'A dragon that likes to play pranks on people', 'A ghost that believes they have supper powers', 
 'A dwarf who cant sale his castle', 'A lazy hero', 'A banana', 'A god who needs to find a replacement', 'A ruler who has no communication skills must use diplomacy to not go to war',
 ' Gods who cant stop fighting'
  ];
//windowson load alows for a task to be perfomed as soon as the page is done loading 
window.onload = function() {
     var story = document.getElementById('story')
     var answer = document.getElementById('answer')
     var eightball = document.getElementById('eight-ball')
     var plot = document.getElementById('plot')

    //create an event listener
    
     story.addEventListener("click", function(){
      if (plot.value.length< 1) {
        alert("Enter a Question");
      } else{
        var num = Math.floor(Math.random() * Math.floor(answers.length));
        eightball.innerText = "";
        answer.innerText = answers[num];
      }
       
     })
}

// used a tutorial to help but most was done on my own. 
// disected info between the html and js
//