const createError = require('http-errors')
const FinalForm = require('../models/FinalForm.model')

module.exports.create = (req, res, next) => {
    console.log("dentro controller create final", req.body, req.file);
    const newItem = req.body
    if (req.file) {
        newItem.image = req.file.path
    }
    FinalForm.create(newItem)
        .then( response => res.status(201).json(response) )
        .catch(next)
}


module.exports.find = (req, res, next) => {
    console.log("dentro controller find() final ");
    FinalForm.find()
        .then(response => res.status(201).json(response))
        .catch(next)
}


module.exports.findById = (req, res, next) => {
    console.log("dentro controller findById() ", req.params.id);
    FinalForm.findById(req.params.id)
        .then(response => {
            if (!response) {
                next(createError(404, 'Id not found'))
              } else {
                res.status(200).json(response)
              }
        })
        .catch(next)
}

module.exports.findByIdAndUpdate = (req, res, next) => {
    console.log("dentro controller findByIdAndUpdate() ", req.params.id, req.body);
    const newItem = req.body
    if (req.file) {
        newItem.image = req.file.path
    }
    FinalForm.findByIdAndUpdate(req.params.id, newItem, { new: true ,runValidators: true})
        .then((response) => res.status(200).json(response) )
        .catch(next)
}


module.exports.findByIdAndDelete = (req, res, next) => {
    console.log("dentro controller findByIdAndDelete() final", req.params.id, );
    FinalForm.findByIdAndDelete(req.params.id)
        .then((response) => res.status(202).json(response) )
        .catch(next)
}