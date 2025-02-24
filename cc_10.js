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

// Task 2: Creating an Order Class
class Order {
constructor(orderId, product, quantity) {
    this.orderId = orderId;
    this.product = product;
    this.quantity = quantity; 
// creating an order class with details
product.updateStock(quantity); //updates stock as each order is made
}

getOrderDetails() {
    return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
   } // returns order details 
}

// test cases:
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
//update stock and log product
console.log(prod1.getDetails());


//Task 3: Creating an Inventory Class

class Inventory {

    constructor() {
        this.products = []; //adds array of product instances
    }

    addProduct(product) {
        this.products.push(product); //method to add new product to inventory
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    } //method to list all product details
}

// test cases:
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); 
// logs inventory

