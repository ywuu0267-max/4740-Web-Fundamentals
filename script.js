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

  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const name = contactForm.querySelector('#name').value.trim()
      const email = contactForm.querySelector('#email').value.trim()
      const message = contactForm.querySelector('#message').value.trim()
      const alertBox = document.getElementById('form-alert')

      if (!name || !email || !message) {
        alertBox.textContent = 'Please fill out all fields.'
        alertBox.classList.remove('is-hidden')
        alertBox.classList.add('error')
        return
      }
      alertBox.textContent = 'Thanks! Your message has been sent.'
      alertBox.classList.remove('is-hidden')
      alertBox.classList.remove('error')
      alertBox.classList.add('success')
      contactForm.reset()
    })
  }
})
