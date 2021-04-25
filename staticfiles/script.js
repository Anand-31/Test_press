window.onload = sendApiRequest
function start(){
    var name = document.getElementById('user_name').value
    sessionStorage.setItem("Name",name)   
}

var list;
var count = 0;
var corrected_answer = 0;
var wronged_answer = 0;
var answer_ind = 0;
async function sendApiRequest(){
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple');
    let data = await response.json()
    list = data.results
    useApilist(list)
}
var text="</ul>" ;
var answer;
var selected_answer;
function useApilist(list){
    $("#button").hide()
    if(count<10){
        var quiz = list[count]
        answer = quiz.incorrect_answers
        answer.push(quiz.correct_answer)
        answer.sort(()=> Math.random()-0.5)
        text = [];
        for (j = 0; j < answer.length; j++) {
            text += "<li>" + answer[j] + "</li>";
          }
          text += "</ul>";
        document.getElementById("number").innerHTML = count+1
        document.getElementById("question").innerHTML = quiz.question
        document.getElementById("answer").innerHTML = text    
                  
        $(document).ready(function(){
            $('.answer_list li').click(function(){
                if(count<9){
                    $("#button").show()
                }
                if(count==9){
                    $(".submit").show()
                }
                selected_answer = $(this).text()
                if(quiz.correct_answer == selected_answer){
                    corrected_answer+=1;
                    answer_ind+=1;
                    $(this).addClass("correct")
                    updateIndicatorAnswer("correct")
                } else {
                    wronged_answer+=1;
                    answer_ind+=1;
                    $(this).addClass("wrong")
                    updateIndicatorAnswer("wrong")
                    $(".correct1").show();
                    var len =$('.answer_list li').length;
                    for(k=0; k<len; k++){
                        if($('.answer_list li')[k].innerHTML==quiz.correct_answer){
                            var correct = $('.answer_list li')[k].innerHTML
                            document.getElementById("correct").innerHTML = correct 
                        }
                    }
                }
                unclickableoption();
            })
        })
    }
}
function unclickableoption(){
    const len = answer.length;
    for(i=0; i<len; i++){
        $('.answer_list li').addClass("already-answered");
    }
}
function updateIndicatorAnswer(type){
    document.querySelector('.indicator').children[answer_ind-1].classList.add(type)
}
function Next(){
    $("#button").hide()
    $(".correct1").hide();
    if(count<10){
        count++
        useApilist(list)
    } 
}
function Submit(){
    $(".quiz-bg").css("height","100vh")
    var message = sessionStorage.setItem("correct_answer",corrected_answer )
    if(message <= 5){
        document.getElementById("message").value = "pass"
    }else{
        document.getElementById("message").value = "fail"
    }
    sessionStorage.setItem("wrong_answer",wronged_answer )
    document.getElementById("correct_ans").value = sessionStorage.getItem("correct_answer")
    document.getElementById("wrong").value = sessionStorage.getItem("wrong_answer")
    document.getElementById("user").value = sessionStorage.getItem("Name")   
}
