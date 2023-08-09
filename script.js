import questions from './assets/questions.json' assert { type: 'json' };

console.log(questions)
const width = screen.width;
const numberOfQuestions = Object.keys(questions).length
const initialQuestion = getRandom(1, numberOfQuestions)
let previousQuestions = [initialQuestion,]
let data = questions[`${initialQuestion}`]
let numberOfCorrectAnswers = 0

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function resetQuestion(qNo){
    data = questions[`${qNo}`]
    let i = 0
    $('.question').text(data["question"])
    $('.answer-container').children().each(function(){
        $(this).text(data["options"][i])
        i++
    })
    $($('.answer-container').children()[[parseInt(data["answer"])]]).addClass('correct-answer')
}

$(".begin").click(function(){
    $(".begin").animate({opacity: 0}, 750, function(){
        $(".begin").css("display", "none")
        $(".container").css("display", "flex")
        $(".container").animate({opacity: 1}, 750)
    })
})

$(".answer").click(function() {
    if($(this).text() == data["options"][parseInt(data["answer"])]){
        numberOfCorrectAnswers++
        console.log(numberOfCorrectAnswers)
    }

    $(".correct-answer").removeClass('correct-answer')

    if(previousQuestions.length == 15){
        let text = ""
        if (numberOfCorrectAnswers >= 0 && numberOfCorrectAnswers < 5){
            text = "Train harder young padawan, one day you may be able to fight the forces of the empire"
        } else if (numberOfCorrectAnswers >= 5 && numberOfCorrectAnswers < 10){
            text = "You have potential train harder and learn the skills of a true jedi"
        } else if (numberOfCorrectAnswers >= 10 && numberOfCorrectAnswers < 15){
            text = "You are close to mastery padawan, train harder"
        } else if (numberOfCorrectAnswers == 15) {
            text = "You are not only a true jedi but the council grants you the rank of master"
        }
        
        Swal.fire({
            html: 
            `<div style="font-size: ${width > 541 ? "1.75rem" : "1.25rem"}; margin-bottom: 1rem;">${text}</div>
            <div style="font-size: ${width > 541 ? "1.5rem" : "1rem" };">Your Score: ${numberOfCorrectAnswers}/15</div>`,
            background: '#1c1c1c',
            color: '#fff',
            width: `${width > 541 ? "60vw" : "80vw"}`,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            confirmButtonText: 'Try Again',
            confirmButtonColor: "#e6d11c",
            scrollbarPadding: false,
        }).then(() => {
            window.location.reload()
        })
    } else {
        let nextQuestion = getRandom(1, numberOfQuestions)
        while(previousQuestions.includes(nextQuestion)){
            nextQuestion = getRandom(1, numberOfQuestions)
        }
        previousQuestions.push(nextQuestion)

        resetQuestion(nextQuestion)
    }
})


resetQuestion(initialQuestion) //pick random question on start
