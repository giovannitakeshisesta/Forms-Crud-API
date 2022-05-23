const createError = require('http-errors')
const Radio = require('../models/Radio.model')

module.exports.createRadio = (req, res, next) => {
    console.log("dentro controller create ", req.body);
    radio.create(req.body)
        .then( response => res.status(201).json(response) )
        .catch(next)
}


// module.exports.find = (req, res, next) => {
//     console.log("dentro controller find() ");
//     Form1.find()
//         .then(response => res.status(201).json(response))
//         .catch(next)
// }


module.exports.findByIdRadio = (req, res, next) => {
    console.log("dentro controller findById() radio", req.params.id);
    Radio.findById(req.params.id)
        .then(response => {
            if (!response) {
                next(createError(404, 'Id not found'))
              } else {
                res.status(200).json(response)
              }
        })
        .catch(next)
}

module.exports.findByIdAndUpdateRadio = (req, res, next) => {
    console.log("dentro controller findByIdAndUpdate()radio ", req.params.id, req.body);
    // Radio.findByIdAndUpdate(req.params.id, req.body, { new: true ,runValidators: true})
    //     .then((response) => res.status(200).json(response) )
    //     .catch(next)
}