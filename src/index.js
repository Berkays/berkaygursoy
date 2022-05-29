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
