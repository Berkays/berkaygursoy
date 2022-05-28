
window.addEventListener('load', function () {
    const path = window.location.pathname.slice(1);
    const element = this.document.body.querySelector(`a[data-href=${path}`);
    if (element) {
        element.classList.add('active');
        element.setAttribute('href', '#');
    }
});
