document.body.style.backgroundColor = "#efeee7"

let card = document.createElement('div')
card.id = 'card'
document.body.appendChild(card)
card.style.textAlign = 'center'

let cards = document.createElement('div')
cards.id = 'cards'
cards.style.backgroundColor = '#333333'
cards.style.textAlign = 'center'
cards.style.padding = '3rem'
document.body.appendChild(cards)

let image = document.createElement('img')
image.src = 'https://i.pinimg.com/originals/f8/3e/ed/f83eed09dfb0c8f12d2823192d4be29d.jpg'
image.style.width = '120px'
image.style.borderRadius = '50%'
cards.appendChild(image)

let h1 = document.createElement('h1')
h1.textContent = 'Nuru Huseynov'
h1.style.color = 'white'
cards.appendChild(h1)

let profile = document.createElement('div')
profile.id = 'profile'
profile.style.backgroundColor = 'white'
cards.appendChild(profile)

let p = document.createElement('p')
p.innerHTML = 'Avid adventurer and nature enthusiast with a passion for exploring new places and capturing the beauty of the world through photography.'
document.body.appendChild(p)

let h2 = document.createElement('h2')
h2.innerHTML = 'Skills'
document.body.appendChild(h2)

var ul = document.createElement("ul")
ul.style.listStyle = "none"
let skills = ['Photography', 'Hiking', 'Camping', 'Outdoor Cooking', 'Navigation']

for (var i = 0; i < skills.length; i++) {
    var li = document.createElement("li")
    li.textContent = skills[i]
    ul.appendChild(li)
}
document.body.appendChild(ul)
