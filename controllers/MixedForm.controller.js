const createError = require('http-errors')
const MixedForm = require('../models/MixedForm.model')

module.exports.create = (req, res, next) => {
    console.log("dentro controller create ", req.body);
    MixedForm.create(req.body)
        .then( response => res.status(201).json(response) )
        .catch(next)
}


module.exports.find = (req, res, next) => {
    console.log("dentro controller find() ");
    MixedForm.find()
        .then(response => res.status(201).json(response))
        .catch(next)
}


module.exports.findById = (req, res, next) => {
    console.log("dentro controller findById() ", req.params.id);
    MixedForm.findById(req.params.id)
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
    MixedForm.findByIdAndUpdate(req.params.id, req.body, { new: true ,runValidators: true})
        .then((response) => res.status(200).json(response) )
        .catch(next)
}


module.exports.findByIdAndDelete = (req, res, next) => {
    console.log("dentro controller findByIdAndDelete() ", req.params.id, );
    MixedForm.findByIdAndDelete(req.params.id)
        .then((response) => res.status(202).json(response) )
        .catch(next)
}