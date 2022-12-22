const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML = 'Web Developer'
  excerpt.innerHTML =
    'Hi! I can do website for you.'
  profile_img.innerHTML =
    '<img src="https://pps.whatsapp.net/v/t61.24694-24/258628910_827182481925231_8667943435698501921_n.jpg?ccb=11-4&oh=01_AdQOGR4Ws1qq2DrB5hdeaSMZ53-MXMCjdvB2XkGzXBWoKw&oe=63AC06E1" alt="" />'
  name.innerHTML = 'Cevdet Haran'
  date.innerHTML = 'Apr 04, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
