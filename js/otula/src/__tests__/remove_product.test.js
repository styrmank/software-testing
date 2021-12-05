/**
 *  Remove product from storage.
 *  If products added to shopping cart are paid for and 
 *  order is completed, the bought amounts are 
 *  subtracted from the amount in stock.
 * 
 */



import {Store} from "../testing_utils/products.js"


describe("Test #2: Remove product from storage", () => {

    var store = new Store()

    beforeEach(() => {
        store.generateStorage()
    })

    test("Normal removal", () => {
        let p = "apples"
        expect(store.removeFromStock(p)).toEqual("Still left in stock: 9")
    })


    test("Stock runs out", () => {
        let p = "apples"
        expect(store.removeFromStock(p,10)).toEqual("Product ran out!")
    })
})