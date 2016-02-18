
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

var expandingCircle = document.querySelector('.circle-red')

var expandingCircleStyle = window.getComputedStyle(expandingCircle)

var oldWidth = parseInt(expandingCircleStyle.width)

expandingCircle.style.width = (oldWidth * 2) + "px"

})



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


//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

var userStatus = function(userElement){
  if(userElement.classList.contains('inactive')){
    return true
  }
  else{
    return false
  }
}

var allLi = document.querySelectorAll('#userList li')
//console.log(allLi)

var allUl = document.querySelector('#userList')
//console.log(allUl) 

for(i=0; i<allLi.length; i++){
  //console.log(allLi[i].className)
  var activeUserLi = allLi[i]
  if(userStatus(activeUserLi)){
    allUl.removeChild(activeUserLi)
  }

}

})

//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

  var switchingSquaresContainer = document.querySelectorAll('.answerBox')
  var switchingSquares = document.querySelector('.answerbox span')

  for(var i=switchingSquares-1; i=0; i--){
    
  }





 })

// //-------------------------------------------------------------------------------
// var answerboxNode = document.querySelector("#reverse-squares #answerbox")
// var squares = answerboxNode.querySelectorAll
//taking out the block and moving to the back//

//change first square from orange to dark blue 
//last square from dark to to orange when click 

// var switchAroundSquares = document.querySelector("#answerbox")


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
