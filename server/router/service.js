import express from "express";
import { 
    getAllService,
    getServicebyid,
    updateService,
    deleteService,
    CreteServices
} from "../Controller/controllerservice.js";


const router = express.Router()

router.get('/', getAllService);
router.get('/:id', getServicebyid);
router.post('/', CreteServices);
router.patch('/:id', updateService);
router.delete('/:id', deleteService);

 
export default router;