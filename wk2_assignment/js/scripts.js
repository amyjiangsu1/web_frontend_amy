var nav_links = document.querySelectorAll('nav a')

document.addEventListener('click', setActive)

function setActive(event) {
  if (event.target.matches('nav a')) {
    event.preventDefault()

    for (let nav_link of nav_links) {
      nav_link.classList.remove('active')
    }

    event.target.classList.add('active')
  }
}
