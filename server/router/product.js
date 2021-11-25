import express from "express";
import { 
    getAllProducts,
    CreteProducts,
    getProductsbyid,
    updateProduct,
    deleteProduct
} from "../Controller/controllerproduct.js";


const router = express.Router()

router.get('/', getAllProducts);
router.get('/:id', getProductsbyid);
router.post('/', CreteProducts);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

 
export default router;