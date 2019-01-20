 /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Timer{
    
    countdown(timeInMinutes){
        b_TimeIsOver = false;
        let minutes, seconds;
        var timeInMillisec = timeInMinutes * 60 * 1000;

        var endDate = new Date().getTime()+ timeInMillisec;

        if (isNaN(endDate)) {
              return;
        }
 
        myTimer = setInterval(calculate, 1000);

        function calculate() {

            let startDate = new Date();
            startDate = startDate.getTime();

            let timeRemaining = parseInt((endDate - startDate) / 1000);

            if (timeRemaining >= 0)
            {
              minutes = parseInt(timeRemaining / 60);
              timeRemaining = (timeRemaining % 60);

              seconds = parseInt(timeRemaining);

              if(seconds < 10)
              {
                seconds = "0" + seconds;
              }

              $("#minutes").html("0" + minutes).slice(-2);
              $("#seconds").html("" + seconds).slice(-2);
            }
            else
            {
              $("#timer").html("Time is up");
              b_TimeIsOver = true;
            }
        }
    } 
    
    clearTimer(){
        clearInterval(myTimer);
        $("#timer").html("<span id='minutes'>00</span>:<span id='seconds'>00</span>");
    }
}
