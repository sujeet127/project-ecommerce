const {createAddress,getAddress,getAddressById,deleteAddress,updateAddress}=require("./address.controller");
const router=require("express").Router();
const {checktoken}=require ("../../auth/token_validation");



router.post("/",checktoken,createAddress);
router.put("/",checktoken,updateAddress);
router.get("/:id",checktoken,getAddress);
router.get("/s/:id",checktoken,getAddressById);
router.delete("/:id",checktoken,deleteAddress);
module.exports=router;