/**
 * Add product to cart.
 * The selected product is added to the shopping cart and the total 
 * sum of the products in the cart will be updated accordingly.
 */


import {Store,Cart} from '../testing_utils/products.js'


describe("Test #5: Add product to cart", () => {
    
    var cart = new Cart()

    beforeEach(() => {
        
        cart.clearCart()
    })


    test("Normal addition to cart", () => {
        const item1 = ['apple', 2]
        const item2 = ['pear', 20]
        cart.addProductToCart(item1)
        cart.addProductToCart(item2)

        expect(cart.getProducts()).toEqual("apple,pear,")
        expect(cart.getCartTotal()).toEqual(22)
    })
})