const {createCart,getCart,getCartById,deleteCart}=require("./cart.controller");
const router=require("express").Router();
const {checktoken}=require ("../../auth/token_validation");



router.post("/",createCart);
router.get("/:id",checktoken,getCart);
router.get("/s/:id",checktoken,getCartById);
router.delete("/:id",checktoken,deleteCart);
module.exports=router;