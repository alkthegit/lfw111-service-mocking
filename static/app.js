// @ts-check

import {ProductItemElement} from './elements/product-item.element.js';
import productsData from './data/products.mock.json' with {type: 'json'};

document.addEventListener('DOMContentLoaded', ()=>{
    initApp();

    document.querySelector('#fetch')?.addEventListener('click', async ()=>{
        await populateProducts();
    })
});

function initApp(){
    customElements.define('product-item', ProductItemElement);
}

async function populateProducts(){
    const productsEl = document.querySelector('#products');
    if(!productsEl){
        return;
    }

    productsEl.innerHTML = '';  
    
    for(const item of productsData){
        const itemEl = document.createElement('product-item');
        for(const prop of Object.keys(item)){
            const span = document.createElement('span');
            span.slot = prop;
            span.textContent = item[prop];
            
            itemEl.appendChild(span);
        }
        
        productsEl.appendChild(itemEl);
    }

}