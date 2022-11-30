const popUp = document.querySelector('.pop-up-block')
const text = document.querySelector('.text');
const socials = document.querySelector('.socials');
const content = document.querySelector('.pop-up-content')
const plusBtn = document.querySelector('.plus-btn');
let clickCount = false;

const popUpOpen = () => {
  if (clickCount == false) {
    text.classList.add('fade-out')
    popUp.classList.remove("not-active")
    popUp.classList.add('scale-in')
    plusBtn.classList.add('btn-open')
    content.classList.add('fade-in-left')
    clickCount = true
  }
  else {
    plusBtn.classList.replace('btn-close', 'btn-open')
    text.classList.replace('fade-in', 'fade-out')
    content.classList.replace('fade-out-left', 'fade-in-left')
    popUp.classList.replace('scale-out', 'scale-in')
  }
}

const popUpClose = () => {
  plusBtn.classList.replace('btn-open', 'btn-close')
  text.classList.replace('fade-out', 'fade-in')
  content.classList.replace('fade-in-left', 'fade-out-left')
  popUp.classList.replace('scale-in', 'scale-out')
}

window.addEventListener('resize', function () {
  if (!popUp.classList.contains('scale-in')) {
    text.classList.remove('fade-out')
    popUp.classList.add("not-active")
    popUp.classList.remove('scale-in')
    plusBtn.classList.remove('btn-open')
    content.classList.remove('fade-out-left')
    clickCount = false
  }
})

