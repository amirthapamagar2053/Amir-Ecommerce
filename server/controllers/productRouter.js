const { Product, Category, Brand } = require("../models");

const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'dilyevrzy', 
  api_key: '311774849752374', 
  api_secret: '2atP418TqwMBD5PC9GcP8NHV0BI' 
});

const productRouter = require("express").Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.findAll({
    include: [{ model: Category }, { model: Brand }],

    limit: req.query.limit,
  });

  res.json(products);
});
productRouter.get("/:id", async (req, res) => {
  const product = await Product.findOne({
    where: { id: req.params.id },
    include: [{ model: Category }, { model: Brand }],
  });

  res.json(product);
});

productRouter.post("/", async (req, res) => {
  const file = req.files.photo;

  const category = await Category.findByPk(req.body.categoryId);
  const brand = await Brand.findByPk(req.body.brandId);

  cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    const product = {
      productName: req.body.productName,
      price: req.body.price,
      imagePath: result.url,
      specification: req.body.specification,
      quantity: req.body.quantity,
      categoryId: category.id,
      brandId: brand.id,
    };
    const newProduct = await Product.create(product);
    res.json(newProduct);
  });
});

module.exports = productRouter;
