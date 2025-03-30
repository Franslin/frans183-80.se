
//Defines menu web component

class MenuComponent extends HTMLElement{
    constructor(){
        super();

    }

    connectedCallback(){
        const template = document.querySelector('template');
        const clone = document.importNode(template.content, true);
        this.appendChild(clone);
    }
}

customElements.define('menu-component', MenuComponent);
