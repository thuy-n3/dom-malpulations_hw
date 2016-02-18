
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

// var expandingCircle = document.querySelector('.circle-red')

// var expandingCircleStyle = window.getComputedStyle(expandingCircle)

// var oldWidth = parseInt(expandingCircleStyle.width)

// expandingCircle.style.width = (oldWidth * 2) + "px"

// })



//-------------------------------------------------------------

document.querySelector("#blow-up button").addEventListener('click',function(){
 

var circleRed = document.querySelector(".circle-red")

var circleRedStyles = window.getComputedStyle(circleRed)

var circleSizeWidth = parseInt(circleRedStyles.width, 10)
var circleSizeHeight = parseInt(circleRedStyles.height, 10)

if(circleSizeWidth < 300){
circleRed.style.width = (circleSizeWidth*2) + "px"
circleRed.style.height = (circleSizeHeight*2) + "px"
}
else{
  circleRed.style.width = 40 + "px"
  circleRed.style.height = 40 + "px"
}

})

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


// document.querySelector("#remove button").addEventListener('click',function(){
//   // TASK #5

// var allLiElements = document.querySelectorAll('#userList li')

//   var activeUserArray = []

//   for(i=0; i<allLiElements.length; i++){
       
//     if(allLiElements[i].className === "active"){
//       activeUserArray.push(allLiElements[i].outerHTML)
//     }
//   }

// //-----------------------------------------------------------

// var findActiveUser = function(userElement){
//   if(userElement.classList.contain('active')){
//     return true 
//   }
// else{
//     return false
//   }
// }

// var allUl = document.querySelector("#userList")

// var allLi = document.querySelectorAll("#userList li")

// for (var i=0; i<allUsers.length i++){


// })





//------------------
//   //step 1 - select all userList <li> element 
//   var allLiElements = document.querySelectorAll('#userList li')
//   console.log(allLiElements)

//   console.log(allLiElements.length)

//   var activeUserArray = []

//   for(i=0; i<allLiElements.length; i++){
//     console.log(allLiElements[i].className)
       
//     if(allLiElements[i].className === "active"){
//       console.log(allLiElements[i].outerHTML)
//       activeUserArray.push(allLiElements[i].outerHTML)
//     }

//   }
//   console.log(activeUserArray)
//   console.log(activeUserArray.join())


//   document.querySelector('#remove .answer-box').innerHTML = activeUserArray.join('')

// })


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

//change first square from orange to dark blue 
//last square from dark to to orange when click 

var switchAroundSquares = document.querySelector("#answerbox")



})


//-------------------------------------------------------------------------------
var answerboxNode = document.querySelector("#reverse-squares #answerbox")
var squares = answerboxNode.querySelectorAll
//taking out the block and moving to the back//

})
//-------------------------------------------------------------------------------


document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

var taskBox = document.querySelectorAll("#tasks li")


var reverseString = function(input){
  var newString = ''
    for(var i = input.length-1; i>=0; i--){
      var char = input.charAt(i)
      newString += char 
    }
    return newString
}

//console.log(reverseString("This Sting"))


var newArray = []
  for(var i=0; i <taskBox.length; i++){
    var newStringArray = reverseString(taskBox[i].innerHTML)
    taskBox[i].innerHTML=newStringArray
    newArray.push(newStringArray)
  }

console.log(newArray)




})


//------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8



})


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
