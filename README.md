# **E-Commerce Back End (“ecommerce-backend”)**

## Table of Contents

* [Description](#description)
* [Requirements](#requirements)
* [Installation](#installation)
* [Contributing](#contributing)
* [Credits](#credits)

## Description
---
You can run your schema using the MYSQL extension in Visual Studio Code. You will see a message in your terminal indicating this is complete, with your database showing in your console as depicted below.

![E-Commerce Back End](/assets/schemaRun.gif)

In order to test your data, you can seed your database with pre-constructed data. To do this, utilize the 'npm run seed" command in the terminal as shown below.

![E-Commerce Back End](/assets/seedRun.gif)

Once you have your test data in place, you want to start your server so your API can access it. To do this, utilize the 'npm start" command in the terminal as shown below.

![E-Commerce Back End](/assets/npmSTART.gif)

The following animation shows the application's GET routes to return all categories, all products, and all tags.

![E-Commerce Back End](/assets/postman-all.gif)

The following animation shows the application's GET routes to return a category by ID, a product by ID, and a tag by ID.

![E-Commerce Back End](/assets/postman-byID.gif)

The following animation shows the applications POST routes to create new category, a new product, and a new tag.

![E-Commerce Back End](/assets/postman-create.gif)

The following animation shows the applications PUT routes to update a category, a product, and a tag.

![E-Commerce Back End](/assets/postman-update.gif)

The following animation shows the applications DESTROY routes to delete a category, a product, and a tag.

![E-Commerce Back End](/assets/postman-delete.gif)

## Requirements 
---
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation
---

See deployed site here: 

See repository here: https://github.com/haleighspurlock/ecommerce-backend
## Contributing
---

Any and all improvement suggestions are welcome! 

Email: haleighspurlock@gmail.com

## Credits
---
Haleigh Spurlock 2021