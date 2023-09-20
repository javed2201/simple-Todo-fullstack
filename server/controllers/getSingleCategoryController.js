const CategoryModelMOdel = require('../models/CategoryModel.js')

const getSingleCategoryController = async (req, res)=>{
    const categoryid = req.params.id
    let findSingleCategory = await CategoryModelMOdel.findById({_id:categoryid})
    res.send(findSingleCategory)
    console.log(findSingleCategory)
}

module.exports = getSingleCategoryController