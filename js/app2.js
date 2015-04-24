$(document).ready(
    function() {
        $( "#answers" ).append( "<h2>ALL THE BEST</h2>" );
        $("#counters").hide();
        $("#question").hide();
        $("#answer").hide();
        $("#over").hide();
        $("#scorecnt").hide();
        $('button#choice1,button#choice2,button#choice3,button#choice4').hide();
        $("#questions").hide();
        $("#next").hide();


       /* var timerId = setInterval(function(){
      countdown = countdown - 1000;
      var min = Math.floor(countdown / (60 * 1000));
         
          var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

          if (countdown <= 0) {
           alert("30 min!");
           clearInterval(timerId);
           
         } 
         else {
           $(".countdown").html(min + " : " + sec);
          }}, 1000); */
        $("#start").click(
            function() {
              $(this).hide();
              $("h2").remove();
                $("#counters").show();
                $("#question").show();
                $("#answer").show();
                $("#scorecnt").show();
                $('button#choice1,button#choice2,button#choice3,button#choice4').show();
                $("#questions").show();
               
                $("#next").show();
                //load question and choices
                x();
                //get score
                y();
            }
        )
    });

var myobj = {
    questions: ['Former Australian captain Mark Taylor has had several nicknames over his playing career. Which of the following was NOT one of them?',
        'Which was the 1st non Test playing country to beat India in an international match?',
        'Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?',
        'Which county did Ravi Shastri play for?',
        'Who was the first Indian to win the World Amateur Billiards title?',
        'Who is the first Indian woman to win an Asian Games gold in 400m run?',
        'Which two counties did Kapil Dev play?',
        'When was Amateur Athletics Federation of India established?',
        'Who did Stone Cold Steve Austin wrestle at the 1998 edition of "Over the Edge"?',
        'Ricky Ponting is also known as what?'
    ],
    choice_1: ['A. Tubby', 'A. Canada', 'A. Two', 'A. Glamorgan', 'A. Geet Sethi', 'A. M.L.Valsamma', 'A. Northamptonshire & Worcestershire', 'A. 1936', 'A. Cactus Jack', 'A. The Rickster'],
    choice_2: ['B. Stodge', 'B. Sri Lanka', 'B. Three', 'B. Leicestershire', 'B. Wilson Jones', 'B. P.T.Usha', 'B. Northamptonshire & Warwickshire', 'B. 1956', 'B. Mankind', 'B. Ponts'],
    choice_3: ['C. Helium Bat', 'C. Zimbabwe', 'C. Four', 'C. Gloucestershire', 'C. Michael Ferreira', 'C. Kamaljit Sandhu', 'C. Nottinghamshire & Worcestershire', 'C. 1966', 'C. Dude LovC. e', 'C. Ponter'],
    choice_4: ['D. Stumpy', 'D. East Africa', 'D. Eight', 'D. Lancashire', 'D. Manoj Kothari', 'D. K.Malleshwari', 'D. Nottinghamshire & Warwickshire', 'D. 1976', 'D. Mick Foley', 'D. Punter'],
    answer: ['D. Stumpy', 'B. Sri Lanka', 'C. Four', 'A. Glamorgan', 'B. Wilson Jones', 'C. Kamaljit Sandhu', 'A. Northamptonshire & Worcestershire', 'B. 1946', 'C. Dude Love', 'D. Punter'],
    count: 0,
    total: 10,
    scorecount: 0

}

var x = function() {
    if (myobj.count < myobj.total) {
        var q = myobj.questions[myobj.count]
        var qtns = document.getElementById('questions');
        qtns.innerHTML = q;
        console.log(qtns.innerHTML);
        var ch1 = myobj.choice_1[myobj.count];
        var ch11 = document.getElementById('choice1');
        ch11.innerHTML = ch1;
        var ch2 = myobj.choice_2[myobj.count];
        var ch12 = document.getElementById('choice2');
        ch12.innerHTML = ch2;
        var ch3 = myobj.choice_3[myobj.count];
        var ch13 = document.getElementById('choice3');
        ch13.innerHTML = ch3;
        var ch4 = myobj.choice_4[myobj.count];
        var ch14 = document.getElementById('choice4');
        ch14.innerHTML = ch4;
        var answer = myobj.answer[myobj.count];
        console.log(answer);

    } else {
        $("#answers").remove();
        $("#questions").remove();
        $("#start").remove();
    }
}


var y = function() {
    $('button#choice1,button#choice2,button#choice3,button#choice4').click(function() {

        if (this.innerHTML == myobj.answer[myobj.count]) {
            console.log(this.innerHTML);
            console.log(myobj.answer);
            console.log("they are equal")
            $(this).css("background-color", "green");
            myobj.scorecount++;
            console.log(myobj.scorecount);
            //disbale next click on every button
            $('button#choice1,button#choice2,button#choice3,button#choice4').prop("disabled", true);
            $("button#scorecnt").text("SCORE =  " + myobj.scorecount + "/10");
            myobj.count = myobj.count + 1;
            console.log(myobj.count);
            $("#next").click(function() {
                $('button#choice1,button#choice2,button#choice3,button#choice4').css("background-color", "");
                $('button#choice1,button#choice2,button#choice3,button#choice4').prop("disabled", false);
                x();
            })

        } else {
            console.log(this.innerHTML);
            console.log(myobj.answer);
            console.log("they are not  equal")
            $(this).css("background-color", "red");
            //disbale next click on every button
            $('button#choice1,button#choice2,button#choice3,button#choice4').prop("disabled", true);
            myobj.count = myobj.count + 1;
            console.log(myobj.count);
            $("#next").click(function() {
                $('button#choice1,button#choice2,button#choice3,button#choice4').css("background-color", "");
                $('button#choice1,button#choice2,button#choice3,button#choice4').prop("disabled", false);
                x();
            })
            if (myobj.count > myobj.total) {
                $("#answers").remove();
            }


        }


    })

}