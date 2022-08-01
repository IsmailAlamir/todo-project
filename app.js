var name;
var gender;
var title = "";
var age;
var wel;
var nation;
var developer;
var student;


function genderFn(){
    gender = prompt("Enter your gender \n (male/female)");
if (gender == "male"){
    title = 'Mr' ;
}else if(gender == 'female' ){
    title = 'Ms'; 
}}


function ageFn(){
    age =prompt("Enter your age");
if (age<=0){
alert("Please enter your correct age");
ageFn();
}}


function welcomingFn(){
wel = confirm("Do you wants to skip the welcoming message?");
if (!wel){
    alert("welcome "+ title + " " + name);
}}

function nationality(){
    nation = prompt("Are you Jordanian?");
}

function developerFn(){
    developer = prompt("Are you a develpoer?");
}

function studentFn(){
    student = prompt("Are you a student?");
}

name =prompt("Enter your name");
genderFn();
ageFn();
welcomingFn();
nationality();
developerFn();
studentFn();

var answers=[name, gender, age, wel, nation, developer, student];
for(var i=0 ; i<answers.length ; i++){
    if (answers[i]==""){
        answers[i]="invalid";
    }
    console.log(answers[i]);
}





