import express from "express";
import { 
    getAllBlog,
    getBlogsbyid,
    updateBlog,
    deleteBlog,
    CreteBlogs
} from "../Controller/controllerblog.js";


const router = express.Router()

router.get('/',getAllBlog);
router.get('/:id',getBlogsbyid);
router.post('/',CreteBlogs);
router.patch('/:id',updateBlog);
router.delete('/:id',deleteBlog);

 
export default router;