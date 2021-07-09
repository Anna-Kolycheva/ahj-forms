import Widget from './Widget';

const widget = new Widget();

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('widget__btn')) {
    widget.toggle(event.target);
  }
});
