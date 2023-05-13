window.changeClass = (className) => {
    let btn = document.querySelector('.' + className);
    btn.classList.add('btn-dark');
    setTimeout(() => {
        btn.classList.remove('btn-dark');
        btn.classList.add('btn-outline-dark');
    }, 250);
};