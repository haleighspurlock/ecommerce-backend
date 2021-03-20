// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: '',
});

// Categories have many Products
// define category as having many products, thus creating foreign key in the product table.
Category.hasMany(Product, {
  foreignKey: '',
  onDelete:'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: '',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: '',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
