import Product from '../db/models/Product.js'

export const getProducts = ()=> {
    return Product.findAll();
}


export  const addProduct = payload => {
return Product.create(payload)
}