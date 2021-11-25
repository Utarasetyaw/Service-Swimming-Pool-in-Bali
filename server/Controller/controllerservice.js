import service from "../model/service.js";

export const getAllService = async (req, res) => {
    try {
        const services = await service.findAll()
        res.json(services);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getServicebyid = async (req, res) => {
    try {
        const services = await service.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(services);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateService = async (req, res) => {
    try {
        await service.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json("update");
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteService = async (req, res) => {
    try {
        await service.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json("service delete");
    } catch (error) {
        res.json({message: error.message})
    }
}

export const CreteServices = async (req, res) => {
    try {
        await service.create(req.body)
        res.json("message: service create")
    } catch (error) {
        res.json({message: error.message})
    }
   
}