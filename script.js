// function yoyo() {
//   var els = document.body.querySelectorAll("*");
//   for (var i = 0; i < els.length; i++) {
//     els[i].style.fontFamily=x;
//   }
// }
class question{
    constructor(inputQuest, inputOP1, inputOP2, inputOP3, inputOP4, inputCorrect){
        this.Quest = inputQuest,
        this.OP1 = inputOP1,
        this.OP2 = inputOP2,
        this.OP3 = inputOP3,
        this.OP4 = inputOP4,
        this.Correct = inputCorrect
    }
}
function enter(){
    var Question = document.getElementById("Question").value;
    var Option1 = document.getElementById("Option1").value;
    var Option2 = document.getElementById("Option2").value;
    var Option3 = document.getElementById("Option3").value;
    var Option4 = document.getElementById("Option4").value;
    if(Question.trim() != "" && Option1.trim() != "" && Option2.trim() != "" && Option3.trim() != "" && Option4.trim() != ""){
        Question1 = new question(Question, Option1, Option2, Option3, Option4);
        document.getElementById("q1").innerHTML = Question1.Quest;
        document.getElementById("questcheck").innerHTML = Question1.Quest;
        document.getElementById("a").innerHTML = Question1.OP1;
        document.getElementById("sop1").innerHTML = Question1.OP1;
        document.getElementById("b").innerHTML = Question1.OP2;
        document.getElementById("sop2").innerHTML = Question1.OP2;
        document.getElementById("c").innerHTML = Question1.OP3;
        document.getElementById("sop3").innerHTML = Question1.OP3;
        document.getElementById("d").innerHTML = Question1.OP4;
        document.getElementById("sop4").innerHTML = Question1.OP4;
        document.getElementById("row").style.transform = "translate(-25%)";
    }
    else {   
        document.getElementById("error1").innerHTML = "Please give proper inputs.";   
    }
}

function answer() {
    CorrectAns = document.getElementById("select").value;
    if(CorrectAns != null){
        Question1.Correct = CorrectAns;
        document.getElementById("row").style.transform = "translate(-50%)";
    }
    else {   
        document.getElementById("error2").innerHTML = "Please select correct answer.";   
    }
}

function checkButton() {    
    var selectedValue = document.querySelector('input[name="option"]:checked'); 
    if(selectedValue != null) { 
        if(selectedValue.value == CorrectAns){
            document.getElementById("display").innerHTML   
            = "<b>HURREY!</b> <br> Correct Answer"; 
        }
        else{
            document.getElementById("display").innerHTML   
            = "<b>OOPS!</b> <br> Wrong Answer"; 
        }
        document.getElementById("row").style.transform = "translate(-75%)"; 

    }   
    else {   
        document.getElementById("error3").innerHTML   
            = "Please select any option ?";   
    }
}

function back(){
    document.getElementById("row").style.transform = "translate(0%)"; 

}

function backagain(){
    document.getElementById("row").style.transform = "translate(-25%)"; 

}

function reset(){
    document.getElementById("row").style.transform = "translate(0%)";
    document.getElementById("Question").value = "";
    document.getElementById("Option1").value = "";
    document.getElementById("Option2").value = "";
    document.getElementById("Option3").value = "";
    document.getElementById("Option4").value = ""; 

}
