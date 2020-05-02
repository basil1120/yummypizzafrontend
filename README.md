# Basic e-commerce cart application built with React & Redux

This simple application prototype shows how we can use React and Redux to build a friendly user experience with instant visual updates.

## Demo
[Here](https://yummypizzafrontend.herokuapp.com/)

## Features
* Add and remove items 
* Remove items
* Edit the quantity of the items in real time
* Calculate automatically the total including the shipping (if chosen)

# Getting started
### Requirements

* Node.js preferably 12.x 
* NPM
* Git

> Clone the repo by running the following command on your terminal:
```git clone https://github.com/basil1120/yummypizzafrontend.git```

> Navigate into the project directory by running the following on your terminal:
```cd yummypizzafrontend```

### Package installation
```bash
npm install
```
 ### Start the React App
 Excute the following command: 
```bash
npm start
```
The application will start automatically in your browser on http://localhost:3000

### Deploying the app on Heroku

> Create account [Here](https://signup.heroku.com/login) if you don't have one.

> Install heroku cli on your machine by ```sudo apt install heroku``` if on ubuntu.

> Login into your account through the cli by running ```heroku login``` and input your login credentials

> Create your heroku app by running ```heroku create name-of-the-app```

> Deploy the app by running ```git push heroku master```

> Visit your heroku web account and get the link to your deployed app under apps.


Test Instructions:
    1. Open the front-end demo url
    2. Click the +(plus) button to add pizza of choice to your shopping cart.
    3. Click My Cart Link to view items on cart OR add quantity.
    4. Fill in customer details ie. Name, Phone , Location  and Additional details
    5. Check the shipping cost check-box
    6. Click Checkout Button and wait for success notification.
    7. On the above button-click order details are posted to the database table for orders.
    8. The order history can be fetched by the laravel backend api GET METHOD : https://yummypizza.herokuapp.com/api/pizzaorders
