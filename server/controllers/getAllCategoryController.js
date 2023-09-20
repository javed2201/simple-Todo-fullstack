const CategoryModel = require('../models/CategoryModel.js')

const getAllCatrgoryController = async (req, res)=>{
    let findAllCategory = await CategoryModel.find()
    res.send(findAllCategory)
}

module.exports = getAllCatrgoryController