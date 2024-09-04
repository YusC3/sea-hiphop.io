
const active = 'active';

function toggleMenu(){
    const hamIcon = document.querySelector('.hamburger-icon');
    const offScreenMenu = document.querySelector('.off-screen-mobile-nav');
    if(hamIcon.classList.contains(active)){
        hamIcon.classList.remove(active);
        offScreenMenu.classList.remove(active);
    }
    else {
        hamIcon.classList.add(active);
        offScreenMenu.classList.add(active);
    }
}