
$(document).ready(function () {
    //Create a dictionary with category names and their valus are their respective api urls
    var categories = {
        9: "General Knowledge",
        10: "Entertainment: Books",
        11: "Entertainment: Film",
        12: "Entertainment: Music",
        13: "Entertainment: Musicals & Theatres",
        14: "Entertainment: Television",
        15: "Entertainment: Video Games",
        16: "Entertainment: Board Games",
        17: "Science & Nature",
        18: "Science: Computers",
        19: "Science: Mathematics",
        20: "Mythology",
        21: "Sports",
        22: "Geography",
        23: "History",
        24: "Politics",
        25: "Art",
        26: "Celebrities",
        27: "Animals",
        28: "Vehicles",
        29: "Entertainment: Comics",
        30: "Science: Gadgets",
        31: "Entertainment: Japanese Anime & Manga",
        32: "Entertainment: Cartoon & Animations"
    };

    $('.card').hide();
    $('#api').click(function(){
        $('.card').show();
        for(let i = 1; i <= 3; i++){
            var num = Math.floor((Math.random() * 23) + 9);
            $.get(`https://opentdb.com/api.php?amount=1&category=${num}&difficulty=easy&type=multiple`, displayData)
            // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
            function displayData(data) {
                $(`#h${i}`).text(data.results[0].category);
                $(`#q-${i}`).text(data.results[0].question);
                $(`.c-${i}`).text(data.results[0].correct_answer);
                for(let k = 0; k < data.results[0].incorrect_answers.length; k++){
                    $(`.i-${i}-${k}`).text(data.results[0].incorrect_answers[k]);
                }
            }
        }
    });

    //randomly generate three numbers that will be used to select the three categories
    //Have those questions be ordered from low difficulty to high difficulty

    // keep track of score 

    $('.submit1').click(function(){
        answer = document.getElementById("a1").value;
        if(answer == 'correct'){
            $('#response').text("That is correct!");
        }
        else{
            $('#response').text("Sorry, incorrect")
        }
    });

    $('.submit2').click(function(){
        answer = document.getElementById("a1").value;
        if(answer == 'correct'){
            $('#response').text("That is correct!");
        }
        else{
            $('#response').text("Sorry, incorrect")
        }
    });

    $('.submit3').click(function(){
        answer = document.getElementById("a1").value;
        if(answer == 'correct'){
            $('#response').text("That is correct!");
        }
        else{
            $('#response').text("Sorry, incorrect")
        }
    });

    var example = { //Example Api, only using this for referance
        "response_code": 0,
        "results": [
            {
                "category": "Entertainment: Board Games",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Who is the main character in the VHS tape included in the board game Nightmare?",
                "correct_answer": "The Gatekeeper",
                "incorrect_answers": ["The Kryptkeeper", "The Monster", "The Nightmare"]
            }
        ]
    }
})