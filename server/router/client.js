import express from "express";
import { 
    getAllClient,
    getClientbyid,
    updateClient,
    deleteClient,
    CreteClient
} from "../Controller/controllerclient.js";


const router = express.Router()

router.get('/', getAllClient);
router.get('/:id', getClientbyid);
router.post('/', CreteClient);
router.patch('/:id', updateClient);
router.delete('/:id', deleteClient);

 
export default router;