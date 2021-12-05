/* Module for creating product database */

import eq from "../eq.js"
import every from "../every.js"
import get from "../get.js"
import isEmpty from "../isEmpty.js"



class Store {
    constructor(){
        this.storage = []
    }

    // if addition successful return true, else false
    addProduct(product){
       
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
        return flag
    }

    generateStorage(){
        this.storage = ["apples", "bananas", "pears"]
    }



}


module.exports = {Store}


