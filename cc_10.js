// Task 1: Creating a Product Class

class Product { 
    constructor(name, id, price, stock) { // initializing product properties
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`; 
    } //returning the details of the product

    updateStock(quantity) {
        this.stock -= quantity;
    } //returns the updated stock
} 

//test case:
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
// logging the test data
prod1.updateStock(3);
console.log(prod1.getDetails());
// updating the stock, subtracting 3
