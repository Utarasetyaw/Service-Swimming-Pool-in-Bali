import client from "../model/client.js";

export const getAllClient = async (req, res) => {
    try {
        const clients = await client.findAll()
        res.json(clients);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getClientbyid = async (req, res) => {
    try {
        const clients = await client.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(clients);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateClient = async (req, res) => {
    try {
        await client.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json("update");
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteClient = async (req, res) => {
    try {
        await client.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json("client delete");
    } catch (error) {
        res.json({message: error.message})
    }
}

export const CreteClient = async (req, res) => {
    try {
        await client.create(req.body)
        res.json("message: client create")
    } catch (error) {
        res.json({message: error.message})
    }
   
}