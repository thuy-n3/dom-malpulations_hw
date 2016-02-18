
console.log('hi')
// me: write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done". 


var sortChores = function() {

  var isDone = function(choreElement) {
    // is "done" in the classList?   
    if (choreElement.classList.contains('done')) {
      return true
    }
    else {
      return false  
    }
  }

  var incompleteChoresUl = document.querySelector("#box5 ul")

  var completedChoresUl = document.querySelector('#box5s ul')

  var chores = incompleteChoresUl.querySelectorAll('li')

  //console.log(chores)

  for (var i = 0; i < chores.length; i ++) {
    var choreNode = chores[i]
    if (isDone(choreNode)) {
      incompleteChoresUl.removeChild(choreNode)
      completedChoresUl.appendChild(choreNode)
    }
  }

}

sortChores()