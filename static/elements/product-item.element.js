// @ts-check
export class ProductItemElement extends HTMLElement {
    constructor(){
        super();

        /**
         * @type {HTMLTemplateElement | null}
         */
        const tmpl = document.querySelector('#product-item');
        
        if(tmpl){
            this.attachShadow({mode: 'open'}).appendChild(tmpl.content.cloneNode(true));
        } else {
            throw new Error('template is undefined');
        }
    }
}