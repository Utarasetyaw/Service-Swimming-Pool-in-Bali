import blog from "../model/blog.js";

export const getAllBlog = async (req, res) => {
    try {
        const blogs = await blog.findAll()
        res.json(blogs);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getBlogsbyid = async (req, res) => {
    try {
        const blogs = await blog.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(blogs);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateBlog = async (req, res) => {
    try {
        console.log(req.body)
        await blog.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json("update");
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteBlog = async (req, res) => {
    try {
        await blog.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json("blog delete");
    } catch (error) {
        res.json({message: error.message})
    }
}

export const CreteBlogs = async (req, res) => {
    try {
        console.log(req.body)
        await blog.create(req.body)
        res.json("message: product create")
    } catch (error) {
        res.json({message: error.message})
    }
   
}