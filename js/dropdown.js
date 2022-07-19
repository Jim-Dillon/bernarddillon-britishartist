const addDropdown = () => {
    const list = document.getElementsByClassName('dropdown-header').classList;
    list.add('dropdown-header');
}

const removeDropdown = () => {
    document.getElementsByClassName('dropdown-header').classList.remove('dropdown-header');
}
