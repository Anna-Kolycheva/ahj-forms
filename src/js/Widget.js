export default class Widget {
  constructor() {
    this.target = null;
  }

  toggle(target) {
    this.target = target;
    const tooltip = document.querySelector('.tooltip');
    if (!tooltip) {
      this.createTooltip();
      return;
    }
    this.removeTooltip(tooltip);
  }

  createTooltip() {
    const element = document.createElement('div');
    element.classList.add('tooltip');
    element.innerHTML = `
   <div class="tooltip__arrow"></div>
   <h3 class="tooltip__header">${this.target.title}</h3>
   <div class="tooltip__body">${this.target.dataset.content}</div>
 `;

    document.body.appendChild(element);

    const coordTarget = this.target.getBoundingClientRect();
    const coordElement = element.getBoundingClientRect();

    const top = coordTarget.top - coordElement.height - 15 + window.scrollY;
    const left = coordTarget.left + coordTarget.width / 2 - coordElement.width / 2 + window.scrollX;

    element.style.top = `${top}px`;
    element.style.left = `${left}px`;
  }

  removeTooltip(tooltip) {
    this.target = null;
    if (!tooltip) {
      return;
    }
    tooltip.remove();
  }
}
