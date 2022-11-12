const card_array = [
    {
        name: 'jollof',
        img: 'images/jollof.jpg',
    },
    {
        name: 'jambalaya',
        img: 'images/jambalaya.jpg',
    },
    {
        name: 'menudo',
        img: 'images/menudo.jpg',
    },
    {
        name: 'plantain',
        img: 'images/plantain.jpg',
    },
    {
        name: 'beef-patty',
        img: 'images/beef-patty.jpg',
    },
    {
        name: 'tamales',
        img: 'images/tamales.jpg',
    },
    {
        name: 'jollof',
        img: 'images/jollof.jpg',
    },
    {
        name: 'jambalaya',
        img: 'images/jambalaya.jpg',
    },
    {
        name: 'menudo',
        img: 'images/menudo.jpg',
    },
    {
        name: 'plantain',
        img: 'images/plantain.jpg',
    },
    {
        name: 'beef-patty',
        img: 'images/beef-patty.jpg',
    },
    {
        name: 'tamales',
        img: 'images/tamales.jpg',
    },
    
]

card_array.sort(() => 0.5 - Math.random())


const grid_display = document.querySelectorAll('.grid')
const result = document.querySelector('#result')
let cards_chosen = []
let cards_chosen_id = []
let card_won = []


function createboard(){
    for(let i = 0; i < card_array.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/hidden.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid_display[i].appendChild(card)
    }
}


createboard()

function check_match(){
    const card = document.querySelectorAll('.grid img')
    const first_option = cards_chosen_id[0]
    const second_option = cards_chosen_id[1]


    console.log(card)
    console.log('Check for match')

    if (first_option === second_option){
        alert('You clicked the same image')
    }
    if(cards_chosen[0] == cards_chosen[1]){
        alert('You found a match')
        card[first_option].setAttribute('src', 'images/check.png')
        card[second_option].setAttribute('src', 'images/check.png')
        card[first_option].removeEventListener('click', flipcard)
        card[second_option ].removeEventListener('click', flipcard)
        card_won.push(cards_chosen)
    } else{
         img_card[first_option].setAttribute('src', 'images/hidden.png')
         img_card[second_option].setAttribute('src', 'images/hidden.png')
         alert("try again")
    }

    cards_chosen = []
    cards_chosen_id = []

    if(card_won.length == (card_array.length / 2)){
        result.innerHTML = "1"
    }
}

function flipcard(){
    console.log(card_array)
    const card_id = this.getAttribute('data-id')
    cards_chosen.push(card_array[card_id].name)
    console.log(cards_chosen)
    cards_chosen_id.push(card_id)
    this.setAttribute('src', card_array[card_id].img)

    if(cards_chosen.length === 2){
        setTimeout(check_match, 500)
    }
}