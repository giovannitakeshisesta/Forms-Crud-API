const createError = require('http-errors')
const Form4 = require('../models/Form4.model')

module.exports.create = (req, res, next) => {
    console.log("dentro controller create ", req.body);
    Form4.create(req.body)
        .then( response => res.status(201).json(response) )
        .catch(next)
}


// module.exports.find = (req, res, next) => {
//     console.log("dentro controller find() ");
//     Form1.find()
//         .then(response => res.status(201).json(response))
//         .catch(next)
// }


// module.exports.findById = (req, res, next) => {
//     console.log("dentro controller findById() ", req.params.id);
//     Form1.findById(req.params.id)
//         .then(response => {
//             if (!response) {
//                 next(createError(404, 'Id not found'))
//               } else {
//                 res.status(200).json(response)
//               }
//         })
//         .catch(next)
// }

// module.exports.findByIdAndUpdate = (req, res, next) => {
//     console.log("dentro controller findByIdAndUpdate() ", req.params.id, req.body);
//     Form1.findByIdAndUpdate(req.params.id, req.body, { new: true ,runValidators: true})
//         .then((response) => res.status(200).json(response) )
//         .catch(next)
// }