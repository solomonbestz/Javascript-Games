
const computer_score = document.getElementById('computer-score')
const player_score = document.getElementById('player-score')
const display_computer_choice = document.getElementById('computer-choice')
const display_user_choice = document.getElementById('user-choice')
const result_display = document.getElementById('result')
const possible_choices = document.querySelectorAll(".button")
const computer_play_choice = ['Rock', 'Paper', 'Scissors']


let player_count = 0
let computer_count = 0
let user_choice
let computer_choice


possible_choices.forEach(possible_choice => possible_choice.addEventListener('click', (e) => {
    user_choice = e.target.id 
    display_user_choice.innerHTML = user_choice
    generate_computer_choice()
    checkwin()
}))


function generate_computer_choice(){
    const random_num = Math.floor(Math.random() * possible_choices.length)
    computer_choice = computer_play_choice[random_num]
    display_computer_choice.innerHTML =  computer_choice
}

function checkwin(){
    if(user_choice === computer_choice){
        result_display.innerHTML = "Tie !!!"
    }
    else if(((user_choice === "Scissors") && (computer_choice === "Paper")) || ((user_choice === "Rock") && (computer_choice === "Scissors")) || ((user_choice === "Paper") && (computer_choice === "Rock"))){
        result_display.innerHTML = "User Win🎉🎉🎉"
        player_count += 1
        player_score.innerHTML = player_count
    }
    else {
        result_display.innerHTML = "Computer Win🎉🎉🎉"
        computer_count += 1
        computer_score.innerHTML = computer_count
    }
}
