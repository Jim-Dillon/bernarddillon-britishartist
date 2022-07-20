const addDropdown = (e) => {
    e.preventDefault();
    const header = document.getElementsByClassName('dropdown-header');
    if (header) {
        header.classList.add('open');
    }
}


const removeDropdown = (e) => {
    e.preventDefault();
    const header = document.getElementsByClassName('dropdown-header');
    if (header) {
        header.classList.remove('open');
    }
}