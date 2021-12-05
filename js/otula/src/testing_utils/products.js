/* Module for creating product database */

import eq from "../eq.js"
//import every from "../every.js"
//import get from "../get.js"
import isEmpty from "../isEmpty.js"
import capitalize from "../capitalize.js"



class Store {
    constructor(){
        this.storage = []
        // items start with 10 in stock
        this.stock = {}
        this.prices = {}
    }

    // if addition successful return true, else false
    addProduct(product, price = 5.00){
       
        var flag = true

        this.storage.forEach(item => {
            
            if(eq(String(item), String(product)))
            {
                
                flag = false
            }
        })

        // check that text fields aren't empty
        if(isEmpty(product))  {
            
            flag = false
        }

        this.storage.push(product)
        this.stock[product] = 10
        this.prices[product] = price
        return flag
    }

    generateStorage(){
        this.storage = []
        this.stock = {}
        this.prices = {}
        this.addProduct('apples', 2.00)
        this.addProduct('pears', 7.00)
        this.addProduct('bananas')
    }

    removeFromStock(product, n = 1){
        this.stock[product] -= n
        // return new amount in stock
        return `Still left in stock: ${this.stock[product]}`
    }


    printOutStorage(){
        var output = ""
        this.storage.forEach(product => {
            let name = capitalize(product)
            let price = Number(this.prices[product]).toFixed(2)
            
            output += `${name} : ${price} e\n`
        });
        
        return output
    }



}


module.exports = {Store}


