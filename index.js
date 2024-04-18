const userField = document.querySelector('.user-field')
const actInput = document.getElementById('act-input')
const activities = document.querySelector('.activities')

userField.addEventListener('click', e => {
  if (e.target.id == 'add') {
    if (actInput.value.trim().length === 0) {
      alert('Please type an activity to record.')
      return
    }
    if (activities.children.length === 8) {
      alert('This app cannot hold the number of activities greater than 8.')
      return
    }

    const created = document.createElement('div')
    created.classList.add('act-div')
    created.innerHTML = `
      <i class="fa-solid fa-check"></i>
      <p id="act-text">${actInput.value}</p>
      <div class="options">
        <i class="fa-solid fa-pencil" id="edit"></i>
        <i class="fa-solid fa-trash" id="delete"></i>
      </div>
    `
    activities.append(created)

    actInput.value = ''
    actInput.focus()
  }
  if (e.target.id === 'clear') {
    function clear(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
      }
    }
    clear(activities)
  }
})

activities.addEventListener('click', e => {
  if (e.target.classList.contains('fa-check')) {
    e.target.parentElement.classList.toggle('done')
    e.target.classList.toggle('done')
    e.target.parentElement.lastElementChild.children[0].classList.toggle('done')
    e.target.parentElement.lastElementChild.children[1].classList.toggle('done')
  }
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.parentElement.remove()
  }
  if (e.target.classList.contains('fa-pencil')) {
    e.target.parentElement.parentElement.children[1].focus()
    e.target.parentElement.parentElement.children[1].contentEditable = 'true'
    e.target.parentElement.parentElement.children[1].addEventListener('blur', () => {
      e.target.parentElement.parentElement.children[1].contentEditable = 'false'
    })
  }
})