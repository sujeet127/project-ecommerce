const {createProduct,getProducts,getProductById,getProductByName,updateProduct,deleteProduct}=require("./products.controller");
const router=require("express").Router();

router.post("/",createProduct);
router.get("/",getProducts);
router.get("/:id",getProductById);
router.get("/product",getProductByName);
router.put("/",updateProduct);
router.delete("/:id",deleteProduct);
module.exports=router;