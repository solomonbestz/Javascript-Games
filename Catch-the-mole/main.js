const squares = document.querySelectorAll('.square')
const mole = document.querySelector(".mole")
const time_left = document.querySelector(".time-left")
const score = document.querySelector(".score")

let result = 0
let timer_id = null
let random_click_position
let current_time = 10
let count_down_timer_id = setInterval(count_down, 1000)

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove("mole")
    })


    let random_square_position = squares[Math.floor(Math.random() * 9)]
    random_square_position.classList.add("mole")

    random_click_position = random_square_position.id
}

squares.forEach( square => {
    square.addEventListener('click', () => {
        if (square.id == random_click_position){
            result++
            score.innerHTML = result
            random_click_position = null
            
        }
    })
})


function move_mole(){
    timer_id = setInterval(randomSquare, 1000)
}

function end_game(){
    if(count_down_timer_id == 1){
        clearInterval(timer_id)
        alert("Game Over")
    }
}

function count_down(){
    current_time--
    time_left.innerHTML = current_time

    if(current_time == 0){
        clearInterval(count_down_timer_id)
        end_game()
    }
}
  
move_mole()


