function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').classList.add('fa-x');
        document.querySelector('.icon').classList.remove('fa-bars');

    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').classList.add('fa-bars');
        document.querySelector('.icon').classList.remove('fa-x');

    }
}