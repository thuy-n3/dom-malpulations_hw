
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1 //make an alert pop up 

  alert("yowch! don't click me so hard!")
})


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2

var doubleNumClick = document.querySelector("#compoundInvestment")
doubleNumClick.innerHTML = doubleNumClick.innerHTML*2

})


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  var circle = document.querySelector("#circle-bw")

  if (circle.style.background === "black"){
  	circle.style.background = "white"
  }
  else{
  	circle.style.background = "black"
  }

})


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#blow-up button").addEventListener('click',function(){
  //TASK #4}

var expandingCircle = document.querySelector('#circle-red')

var originalWidth = parseInt(expandingCircleStyle.width, 10)
var originalHeight = parseInt(expandingCircleStyle.height, 10)

var expandingCircleStyle = window.getComputedStyle(expandingCircle)

var currentWidth = parseInt(expandingCircleStyle.width, 10)
var currentHeight = parseInt(expandingCircleStyle.height, 10)


if( currentWidth < originalWidth *5 ){
  expandingCircle.style.height = (currentHeight*2 + "px")
  expandingCircle.style.width = (currentWidth*2 + "px")
}

else{
  expandingCircle.style.height = originalHeight + "px"
  expandingCircle.style.width = originalWidth+ "px"

}

})

//-------------------------------------------------------------

// document.querySelector("#blow-up button").addEventListener('click',function(){
 

// var expandingCircle = document.querySelector('.circle-red')

// var expandingCircleStyle = window.getComputedStyle(circle-red)

// var circleSize = parseInt(expandingCircleStyle.width, 10)
// var circleSize = parseInt(expandingCircleStyle.height, 10)

// if(circleSize < 300){
// circle-red.size.width = (circleSize*2) + "px"
// circle-red.size.height = (circleSize*2) + "px"

// })

//------travis review-----------------------------------------

// var squareDiv = document.querySelector('.square')

// var originalWidth = parseInt(squareStyle.width, 10)
// var originalHeight = parseInt(squareStyle.height, 10)

// //----

// var squareStyle = window.getComputedStyle(squareDiv)
// var currentWidth = parseInt(squareStyle.width, 10)
// var currentHeight = parseInt(squareStyle.height, 10)


// if( currentWidth < originalWidth *5 ){
//   squareDiv.style.height = (currentHeight*2 + "px")
//   squareDiv.style.width = (currentWidth*2 + "px")
// }

// else{
//   squareDiv.style.height = originalHeight + "px"
//   squareDiv.style.width = originalWidth+ "px"

// }


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

//removing all children from an element
var userList = document.getElementById("inactive");
while(element.firstChild){
  element.removeChild(userList.firstChild):
}

//-------------------------------------------

//remove first <li> element from list 
var list = document.getElementById("userList");
list.removeChild(.list.childNods[1]);

//need to remover class li : "inactive"

//-------------------------------------------

//removing all child nodes of a list 
var list = document.getElementById("userList");
while (list.hasChildNodes()){
  list.removeChild(list.firstChild);
}


})


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

//change first square from orange to dark blue 
//last square from dark to to orange when click 

var switchAroundSquares = document.querySelector("#answerbox"//?



})


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

var pigLatinTranslator = document.querySelector("#tasks"//?


//look at pig latin example
// var pigLatin = function(inputWord){
//   var newWord = ""
//     var almostThere = inputWord + inputWord[0] + "ay"
//     return almostThere.substr(1)
// }
// var word = 'depressed'

// log(pigLatin('depressed'))


})


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8



})


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
