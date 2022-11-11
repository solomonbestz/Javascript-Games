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
        img: 'images/beef-patty',
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
        img: 'images/beef-patty',
    },
    {
        name: 'tamales',
        img: 'images/tamales.jpg',
    },
    
]

card_array.sort(() => 0.5 - Math.random())


const grid_display = document.querySelectorAll('.grid')
console.log(grid_display)
function createboard(){
    for(let i = 0; i < card_array.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/hidden.png')
        card.setAttribute('data-id', i)
        card.addEventListener( )
        grid_display[i].appendChild(card)
    }
}


createboard()

function flipcard(){

}