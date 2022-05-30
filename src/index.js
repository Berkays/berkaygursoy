import * as bootstrap from 'bootstrap';

window.addEventListener('load', function () {
    let path = window.location.pathname.slice(1);
    if (path == '')
        path = 'home';
    const element = this.document.body.querySelector(`a[data-href=${path}`);
    if (element) {
        element.classList.add('active');
        element.setAttribute('href', '#');
    }
});

window.addEventListener('load', function () {
    let textWrapper = document.querySelector('.ml10 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            duration: 1000,
            delay: (el, i) => 350 + (40 * i)
        });
});