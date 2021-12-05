/* The seller will input the product information.
 * The program will check if the product already exists 
 * in the system and if any of the fields are missing information. */

import {Store} from "../testing_utils/products.js"



describe("Test #1: Adding product to storage", () => {
    
    var store = new Store()
    
    beforeEach( () => {
        store.generateStorage()
    })

    
    test("Normal product", () => {
        let p = "chocolate"
        expect(store.addProduct(p)).toEqual(true)
    })

    test("Product has empty field", () => {
        let p = ""
        expect(store.addProduct(p)).toEqual(false)
    })

    test("Duplicate product", () => {
        let p = "chocolate"
        store.addProduct(p)
        expect(store.addProduct(p)).toEqual(false)
    })
})
