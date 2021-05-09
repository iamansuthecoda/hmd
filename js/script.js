enup = document.querySelector('#enup');
endn = document.querySelector('#endn');
heart = document.querySelector('#heart');
innerHeight > innerWidth ? heart.children[0].style.width = innerWidth.toString() + 'px' : heart.children[0].style.width = innerHeight.toString() + 'px';

enup.addEventListener('click', () => {
    enup.style.top = "90%";
    endn.style.top = "90%";
    setTimeout(() => {
        enup.style.top = "-50%";
    }, 500);
    setTimeout(() => {
        heart.style.opacity = '1';
        enup.style.opacity = '0';
        endn.style.opacity = '0';
        enup.style.display = 'none';
        endn.style.display = 'none';
    }, 750);
    document.title = "Happy Mothers Day";
});