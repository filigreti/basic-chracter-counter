//declare the targeted element
let characters = document.getElementById('characters')
let whiteSpace = document.getElementById('whitespace')
let Words = document.getElementById('words')
let area = document.getElementById('area')
let sentence = document.getElementById('sentence')
let paragraph = document.getElementById('paragraph')



// use an event listener on the main element of target and apply various functions to it
let words = area.addEventListener("input", function(){
let length = area.value.trim().length
characters.innerHTML = length;
let worded = area.value.trim().split(" ").length
let word = area.value.trim().split(" ")
word.forEach(function(wo){  
   let value = wo
 if (value === ""){
    Words.innerHTML = 0
 }else{
    Words.innerHTML = worded
 }
})
let sentences = area.value.trim().match(/[^\.!\?]+[\.!\?]+|[^\.!\?]+/g  )
if (sentences == null){
    sentence.innerHTML = 0 
}else{
    sentence.innerHTML = sentences.length 
}
let white = area.value.split(" ").length

whiteSpace.innerHTML = (white - 1)
let single = 0


})


