var nav_links = document.querySelectorAll('a')
var paraContent = document.querySelector('.content')

function setContentAccordingToHash() {
  var type = window.location.hash.substring(1)
  console.log(type)

  // if anyone clicks on logo, nothing happens
  if (type == '') {
    return
  }

  // set all tab inactive
  mkAllTabInactive()

  // activate tab based on hash value
  var tabToActivate = document.querySelector(`a[href="#${type}"]`)
  tabToActivate.classList.add('active')

  // populate data based on has value
  for (var item in data) {
    var compare_string = data[item].section.toLowerCase()

    if (compare_string === type) {
      paraContent.innerHTML = `<H1>${data[item].section}</h1><div>${data[item].story}</div>`
    }
  }

  // sign-out link shows a different message in content
  if (type == 'sign-out') {
    paraContent.innerHTML = `<H1>You have signed out!</h1>
    <div>Just kidding... you are good, keep browsing. : )</div>`
  }
}

function initialize() {
  if (!window.location.hash) {
    window.location.hash = 'recipes'
  }
  setContentAccordingToHash()
}

function mkAllTabInactive() {
  for (let nav_link of nav_links) {
    nav_link.classList.remove('active')
  }
}

window.addEventListener('hashchange', setContentAccordingToHash)
initialize()
