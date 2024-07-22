export class item { 
    constructor(id, name, price, quantity) { 
        this.id = id
        this.Name = name
        this.Price = price
        this.Quantity = quantity
        
        
        this.TotalItemPrice = () => {
            return this.Quantity * this.Price
        } 
    }
}