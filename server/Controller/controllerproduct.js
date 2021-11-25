import product from "../model/product.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await product.findAll()
        res.json(products);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getProductsbyid = async (req, res) => {
    try {
        const products = await product.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(products);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateProduct = async (req, res) => {
    try {
        await product.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json("update");
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json("product delete");
    } catch (error) {
        res.json({message: error.message})
    }
}

export const CreteProducts = async (req, res) => {
    try {
        await product.create(req.body)
        res.json("message: product create")
    } catch (error) {
        res.json({message: error.message})
    }
   
}