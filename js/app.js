$(document).ready(
  function(){

$("#counters").hide();
$("#question").hide();
$("#answer").hide();
$("#over").hide();
$("#scorecnt").hide();
$('button#choice1,button#choice2,button#choice3,button#choice4').hide();
$("#questions").hide();
$("#start").show();

  // Function to update counters on all elements with class counter
/*  var doUpdate = function() {
    $('.countdown').each(function() {
      var count = parseInt($(this).html());
      if (count > 0) {
        $(this).html(count - 1);
      }
      else if(count == 0)
      {
        
        $("#counters").remove();
$("#question").remove();
$("#answers").remove();
$("#scorecnt").remove();
$('button#choice1,button#choice2,button#choice3,button#choice4').remove();
$("#questions").remove();
$("#over").show();        
        return false;}
   });

  // Schedule the update to happen once every second
  setInterval(doUpdate, 1000);
}  
$('#start').click(
  function(){
    $(this).hide();
    $("#counters").show();

$("#answer").show();
$("#scorecnt").show();
$("#questions").show();
$('button#choice1,button#choice2,button#choice3,button#choice4').show();

      setInterval(doUpdate,1000);
       myPage.init();
   });

*/





var countdown = 30 * 60 * 1000;
var timerId = setInterval(function(){
  countdown -= 1000;
  var min = Math.floor(countdown / (60 * 1000));
  //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
  var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

  if (countdown <= 0) {
     alert("30 min!");
     clearInterval(timerId);
     //doSomething();
  } else {
     $(".countdown").html(min + " : " + sec);
  }

}, 1000); //1000ms. = 1sec.


$('#start').click(
  function(){
    $(this).hide();
    $("#counters").show();

$("#answer").show();
$("#scorecnt").show();
$("#questions").show();
$('button#choice1,button#choice2,button#choice3,button#choice4').show();

      setInterval(timerId,1000);
       myPage.init();
   });



 myPage.init();




});


var myPage = (function() {

    var that = {};

    that.init = function (){
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

var i = 0;
var quiz = new Quiz(quiz_questions[i],choice_one[i],choice_two[i],choice_four[i],correct_answer[i]);

quiz.q= quiz_questions[i];
var qtns = document.getElementById('questions');
qtns.innerHTML =quiz.q;
console.log(qtns.innerHTML);
console.log(quiz.q);

quiz.ch1 = choice_one[i];
var ch11= document.getElementById('choice1');
ch11.innerHTML =quiz.ch1;
console.log(ch11.innerHTML);
console.log(quiz.ch1);

quiz.ch2=  choice_two[i];
var ch12= document.getElementById('choice2');
ch12.innerHTML =quiz.ch2;
console.log(ch12.innerHTML);
console.log(quiz.ch2);

quiz.ch3 = choice_three[i];
var ch13 = document.getElementById('choice3');
ch13.innerHTML =quiz.ch3;
console.log(ch13.innerHTML);
console.log(quiz.ch3);

quiz.ch4 = choice_four[i];
var ch14= document.getElementById('choice4');
ch14.innerHTML =quiz.ch4;
quiz.answer = correct_answer[i];
/*console.log(ch14.innerHTML);
console.log(quiz.ch4);
*/

var scorecount = 0;
var s = function(){ $('button#choice1,button#choice2,button#choice3,button#choice4').click(function () {
  console.log(this.innerHTML);
  console.log(quiz.answer);
  if(this.innerHTML == quiz.answer ){
    console.log("they are equal")
    $(this).css("background-color", "green");
    scorecount ++;
    console.log(scorecount);
      //disbale next click on every button
      $('button#choice1,button#choice2,button#choice3,button#choice4').prop("disabled",true);
      $("p#scorecnt").text(scorecount);
      console.log($("p#scorecnt").val());
      //return scorecount;
    }
    else {
      console.log("They are not equal");
      $(this).css("background-color", "red");
      //disbale next click on every button
      $('button#choice1,button#choice2,button#choice3,button#choice4').prop("disabled",true);
    }    
    

  })
}
$("button#scorecnt").innerHTML = s();
}

return that;

})();