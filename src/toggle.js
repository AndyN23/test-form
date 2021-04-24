
function toggle() {
    document.querySelector('.special__temperature').style.display = this.checked ? 'flex' : 'none'
}

document.querySelector('.checkbox').onchange = toggle;
