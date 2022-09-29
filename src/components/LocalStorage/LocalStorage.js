// use local storage to manage cart data
const addLocalStorage = id =>{
    const getShoppingCartFromLocalStorage = () => {
        let savedCart = localStorage.getItem('cart');
        let cart = {};
        if(savedCart){
            cart = JSON.parse(savedCart);
        } 
        return cart;
    }
    
    const saveItemToLocalStorage = (product, quantity) =>{
        const cart = getShoppingCartFromLocalStorage();
        // add product to the object as property
        cart[product] = quantity;
        const cartStringified = JSON.stringify(cart);
    
        // save to local storage
        localStorage.setItem('cart', cartStringified);
    }
    
    const addProductToDisplay = (product, quantity) => {
        const productContainer = document.getElementById('product-container');
        const li = document.createElement('li');
        li.innerText = `${product} : ${quantity}`;
        productContainer.appendChild(li);
    }
}

export {
    addLocalStorage
}