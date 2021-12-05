/**
 * Product display formatting.
 * Checks that the formatting of product names and prices follows
 * the desired format. The desired format has the first letter of the 
 * product name capitalized and the price presented with two decimals.
 */


import {Store} from "../testing_utils/products.js"



describe("Test #3: Product display formatting", () => {
    var store = new Store()

    beforeEach(() => {
        store.generateStorage()
    })


    test("Normal formatting", () => {
        const output = "Apples : 2.00 e\n" 
                      +"Pears : 7.00 e\n"
                      +"Bananas : 5.00 e\n"

        expect(store.printOutStorage()).toEqual(output)
    })
})