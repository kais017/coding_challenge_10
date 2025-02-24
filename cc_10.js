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
        this.orders = []; // adds array of orders (Task 4)
    }

    addProduct(product) {
        this.products.push(product); //method to add new product to inventory
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    } //method to list all product details
    
    //Task 4: 
    placeOrder(orderId, product, quantity) { // adding a method to place a new order and adds it to Orders if stock is available
        if (quantity > product.stock) {
            console.log("No Stock Available"); //returns if there is insuffient stock
            return;
        }
        const order = new Order(orderId, product, quantity);
        this.orders.push(order);
   }   
    listOrders() {
    this.orders.forEach(order => console.log(order.getOrderDetails()));
   }  // logs all placed orders
//end task 4:

//Task 5: 
restockProduct(productId, quantity){
    const product = this.products.find(prod => prod.id === productId);
    if (product){
        product.stock += quantity;
        console.log(`${product.name} restocked. Stock Available: ${product.stock}`)
    } else {
        console.log("No Stock Available");
// method to increase stock of product
    }
  }
}

// test cases:
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); 
// logs inventory


// Task 4: Implementing Order Management
// in task 3 under the Inventory class

// test cases:
inventory.placeOrder(601, prod1, 2);
inventory.listOrders(); 
console.log(prod1.getDetails());
// logs the new order placed

// Task 5: Implementing Product Restocking
// in task 3

//test cases:
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// logging the restocked product