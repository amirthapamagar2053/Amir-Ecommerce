# Fullstack JS boilerplate

Simple boilerplate

## design framework

The sass files from [CUBE CSS workshop](https://github.com/TEJ-Fellowship/cube-css-workshop) are now configured into `client/assets/styles`

The `main.scss` is referenced from `client/index.html` as a regular stylesheet link. Parcel knows to automatically parse the scss to css.

## starting frontend and backend concurrently during dev

Running `npm run dev` will run frontend and backend at the same time so that you have develop all code together


# N-MARS-ecom
## User stories link
https://docs.google.com/document/d/1M4_FOX6KYEtDL6RO-80DsOg_RZGmLfQUFK6THB1kKRI/edit?usp=sharing


## DATABASE MODELS
Customer
=========================== 
id
firstname
lastname
pasword
email
shipping add //foreign key to shipping address id

Product
================
id
price
name
specification
quantity
category_id //foreign key to category id
Brand_id //foreign key to category id

Order History
=========================
id
customer_id //foreign key to customer id
order-status
order-date


Shopping Cart
============================
product_id //foreign key to prodcutid
customer_id //foreign key to customer id
quantity

Shipping address
=============================
id
destination address

Category
======================
id
name
description

Brand
=========================
id 
name


Order Item Details
===============
id
order_history_id  //foreign key from order history id
product_id
quantity
price

# Figma design link
https://www.figma.com/file/k6IUGxTBs9ERitGORJlkWq/SIgnUp-page?node-id=0%3A1

# CUBE-CSS boilerplate code by Barsha Maharjan
https://github.com/TEJ-Fellowship/cube-css-workshop

