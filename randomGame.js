function randomGame(){
  var gameCount=0;
  var count = 1;
  var timerId = setInterval(function(){
    var randomNum = Math.random();
   console.log(randomNum);
    if(randomNum > 0.75){
      console.log("It took " + gameCount + " try/tries.");
        clearInterval(timerId);
    } else {
        gameCount=++count;
        
    }
  }, 1000);
}
