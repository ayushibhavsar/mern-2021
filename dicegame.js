var score = 0
var count = 0
var winningScore = 50


document.getElementById('btnroll').addEventListener('click', ()=>{
  var random =  Math.round(Math.random()*100)%6 + 1
  console.log(random)
  var imgUrl = `./${random}.png`

  document.getElementById('diceimage').src = imgUrl
 
  score += random
  count++

  if(score >= winningScore){
      alert("Reached to Winning Score")
      score = 0
      count = 0
  }

  document.getElementById('score').innerText = score
  document.getElementById('count').innerText = count


})