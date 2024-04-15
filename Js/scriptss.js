const toggleBtn = document.querySelector('.icons')
const toggleBtnIcon = document.querySelector('.icons ion-icon')
const dropDownMenu = document.querySelector('.medias')
const togglesBtn = document.querySelector('.x-icons')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
}
togglesBtn.onclick = function() {
    dropDownMenu.classList.toggle('exit')
}

function yoqil() {
    let deletes = document.getElementById('media')
    dropDownMenu.classList.toggle('exit')
}