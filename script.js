document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('add-more-services')
  const hiddenItems = document.querySelectorAll('#services .card-item-more')

  toggleBtn.addEventListener('click', function () {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true'

    hiddenItems.forEach((item) => {
      item.classList.toggle('is-hidden', expanded)
    })

    toggleBtn.setAttribute('aria-expanded', String(!expanded))
    toggleBtn.textContent = expanded ? 'And more' : 'Show less'
  })
})

function toggleList(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    el.classList.toggle('is-hidden')
  })
}

const cf = document.getElementById('contact-form')
if (cf) {
  cf.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = cf.querySelector('#cf-name').value.trim()
    const email = cf.querySelector('#cf-email').value.trim()
    const msg = cf.querySelector('#cf-msg').value.trim()
    const alertBox = document.getElementById('form-alert')

    if (!name || !email || !msg) {
      alertBox.textContent = '⚠️ Please fill out all fields.'
      alertBox.classList.remove('is-hidden')
      alertBox.style.color = '#b45309'
      return
    }
    alertBox.textContent = '✅ Thanks! Your message has been noted.'
    alertBox.classList.remove('is-hidden')
    alertBox.style.color = '#16a34a'
    cf.reset()
  })
}
