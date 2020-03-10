# shopping-cart
This is shopping application where we will be getting product for male,female and kids.they can buy the product by adding into the cart and placing the order.
Authentication is implemented by genarating web tokens from npm package 'jwt', and password hashed using 'bcrypt' package.

Dependencies and installation
bcryptjs
express
mongoDB
mongoose
jsonwebtoken
validator

Folder structure

app
-controllers
-middlewares
models
config
-db.js
-routes.js
index.js


Models
categories
create a new category, edit and update the existing one and delete the unwanted category using api calls.
A user can add a new category only if he is authorized.

products
add a new product, add it to the category by adding the id of the category, edit the product details and update and delete the unwanted product.

orders
find all the orders placed by the user, delete it if not necessary.

users
create account, see profile, make changes to the profile, delete account, see orders.
To place orders user must be logged in.
