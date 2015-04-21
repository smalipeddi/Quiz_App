$(document).ready(
  function(){
//hiding all elements exept the start button
$("#counters").hide();
$("#question").hide();
$("#answer").hide();
$("#over").hide();
$("#scorecnt").hide();
$('button#choice1,button#choice2,button#choice3,button#choice4').hide();
$("#questions").hide();
$(".countdown").hide();

var countdown = 30 * 60 * 1000;

//on user clickign start button all elements are shown and start will hide
$('#start').click(
  function(){
    $(this).hide();
    $("#counters").show();
    $(".countdown").show();
    $("#answer").show();
    $("#scorecnt").show();
    $("#questions").show();
    $('button#choice1,button#choice2,button#choice3,button#choice4').show();

    //timer for 30 min starts
    var timerId = setInterval(function(){
          countdown -= 1000;
          var min = Math.floor(countdown / (60 * 1000));
          //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
          var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

          if (countdown <= 0) {
           alert("30 min!");
           clearInterval(timerId);
           
          } 
          else {
                 $(".countdown").html(min + " : " + sec);
          }}, 1000); //1000ms. = 1sec.
    });

//calling the init method
$(init(0));


});

 function Quiz(question,ch1,ch2,ch3,ch4,answer) {
            this.question = question;
            this.ch1 = ch1;
            this.ch2 = ch2;
            this.ch3 = ch3;
            this.ch4  = ch4;
            this.answer = answer;

          }
          Quiz.count = 0;
          Quiz.total = 2;
          var quiz_questions = ['Former Australian captain Mark Taylor has had several nicknames over his playing career. Which of the following was NOT one of them?',
          'Which was the 1st non Test playing country to beat India in an international match?'
          ]

          //Array of choices
          var choice_one = ['A. Tubby','A. Canada']
          var choice_two = [ 'B. Stodge' ,'B. Sri Lanka']
          var choice_three = ['C. Helium Bat','C. Zimbabwe']
          var choice_four = ['D. Stumpy','D. East Africa']
          var correct_answer=['D. Stumpy','B. Sri Lanka']
          var scorecount = 0;


for(var c = 0; c < 2; c++) 
{

 function init(c){
     
//object creation and assignmentz
var quiz = new Quiz(quiz_questions[c],choice_one[c],choice_two[c],choice_four[c],correct_answer[c]);
quiz.q= quiz_questions[c];
var qtns = document.getElementById('questions');
qtns.innerHTML =quiz.q;
quiz.ch1 = choice_one[c];
var ch11= document.getElementById('choice1');
ch11.innerHTML =quiz.ch1;
quiz.ch2=  choice_two[c];
var ch12= document.getElementById('choice2');
ch12.innerHTML =quiz.ch2;
quiz.ch3 = choice_three[c];
var ch13 = document.getElementById('choice3');
ch13.innerHTML =quiz.ch3;
quiz.ch4 = choice_four[c];
var ch14= document.getElementById('choice4');
ch14.innerHTML =quiz.ch4;
quiz.answer = correct_answer[c];
console.log(quiz.ch4);



//start of answer click fucntion
var s = function(){ $('button#choice1,button#choice2,button#choice3,button#choice4').click(function () {
      if(this.innerHTML == quiz.answer ){
      console.log("they are equal")
      $(this).css("background-color", "green");
      scorecount ++;
      console.log(scorecount);
      //disbale next click on every button
      $('button#choice1,button#choice2,button#choice3,button#choice4').prop("disabled",true);
      $("button#scorecnt").text(scorecount);
      console.log($("button#scorecnt").val());
      return scorecount;
    }
    else {
      console.log("They are not equal");
      $(this).css("background-color", "red");
      //disbale next click on every button
      $('button#choice1,button#choice2,button#choice3,button#choice4').prop("disabled",true);
      return scorecount;
    }    
  })
} //en dof answers click function
$("button#scorecnt").innerHTML = s();
}//end of init
}


