/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Objects:
var timer = new Timer();
var results = new Results();
var area1 = new Area_1();
var area2 = new Area_2();
var style = new Styling();

//Global variablies:
var b_TimeIsOver = false; 
var timeInMin = 1;
var myTimer = 0;          //variable to clean the timer before starting the new one.
var interval;
var prev_keypress = null;

// Initial-Ready State
area1.displayRules();
area2.hideArea();
style.typingEffect();


//Running State
$("#start").click(function(){
   
    getReady();
    area1.displayRandomText();   
    timer.countdown(timeInMin + 0.03);   
 
    //on keyup insert a function to detect errors
    $("#area2").keyup(
            function(event)
            {results.detectErrors(area1.getAreaContent(),area2.getAreaContent(),event);
            changePrevKeypress(event);
            style.highlight(area1.getAreaContent(),area2.getAreaContent());
            });
    // Run setInterval to check if timer is over
    interval = setInterval(function(){
        if(b_TimeIsOver === true) 
        {
            completeTest();
        }
    },1000);     
});

$("#stop").click(function(){interruptTest();});

function changePrevKeypress(event){
    prev_keypress = event.charCode;
}

function getReady(){
    results.resetResults();
    timer.clearTimer();
    area2.showArea();
    $("#area2").focus();
    $("#area2").prop("disabled", false);
    $("#area2").val("");
    area2.preventCheating();
}

function completeTest(){
        results.displayResults(area2.getAreaContent(),timeInMin);
        $("#area2").prop("disabled", true);
        $("#print").prop("disabled", false);
        timer.clearTimer();
        clearInterval(interval);
}

function interruptTest(){
    results.resetResults();
    $("#area2").prop("disabled", true);
    timer.clearTimer();
    clearInterval(interval);
}