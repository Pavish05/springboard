function countdown(num){
    var tNum = num;

var tId = setInterval(
    function(){
        tNum--;
    if(tNum == 0){
          clearInterval(tId);
          console.log("DONE!");
        } else (
          console.log(tNum)
        )
    } , 1000);}

