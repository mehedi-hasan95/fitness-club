// use local storage to manage cart data
const addToDb = id =>{
    const shoppingCart = getStoredProduct();
    localStorage.setItem('shopping-cart', JSON.stringify(id));
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const getStoredProduct = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


export {
    addToDb, 
    removeFromDb,
    getStoredProduct,
}