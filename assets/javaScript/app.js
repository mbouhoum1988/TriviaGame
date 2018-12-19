$(document).ready(function() {
    var interval;
    var number=120;

    $('#start').on('click', function () {
        $('#game').fadeOut('fast', function () {
          $('#question').fadeIn('fast', run)
        })
    })

    $('#submit').on('click', function(){
        $('#question').fadeOut('fast', function () {
          $('#end').fadeIn('fast', finish)
        })
    })

    $('#reset').on('click', function () {
        $('#end').fadeOut('fast', function () {
          $('#game').fadeIn('fast', reset)
        })
    })



    function run(){
      interval = setInterval(decrement, 1000);
    
      function decrement(){
           number--;
          $('#gam').html('time remaining: ' + number +' seconds');

          if (number === 0) {
            $('#question').fadeOut('fast', function () {
                $('#end').fadeIn('fast', finish)
              })
              
          }
        }
    }
    function finish(){
       
                var total = 10;
                var score = 0;
                var losses = 0;
                var inde = 0;
            
                var q1 = document.forms['quizForm']['q1'].value;
                var q2 = document.forms['quizForm']['q2'].value;
                var q3 = document.forms['quizForm']['q3'].value;
                var q4 = document.forms['quizForm']['q4'].value;
                var q5 = document.forms['quizForm']['q5'].value;
                var q6 = document.forms['quizForm']['q6'].value;
                var q7 = document.forms['quizForm']['q7'].value;
                var q8 = document.forms['quizForm']['q8'].value;
                var q9 = document.forms['quizForm']['q9'].value;
                var q10 = document.forms['quizForm']['q10'].value;
                
            
                for (i=1 ; i <= total ; i++){
                if (eval('q'+i) == ''){
                    inde++;
                }
            }
            
        for (i=1 ; i <= total ; i++){
             var arr=['c', 'c', 'c' ,'a' ,'b','c','a','b','c','d'];
            if (eval('q'+i)==arr[i-1]){
                score++;
            }
            else if (eval('q'+i) !== arr[i-1] && eval('q'+i) !== ''){
                losses++
            }
        }
            $('#score').html('<h3>Correct insewers: <span> ' + score +'</span></h3>' + '<h3> Incorrect insewers: <span> ' + losses +'</span></h3>' + '<h3>Unanswered: <span> ' + inde +'</span></h3>');
            return false; 
    }

    function reset(){
        clearInterval(interval);
        $('#gam').empty();
        number=120; 
        document.forms['quizForm'].reset();     
    }
});
