const express = require("express");
const router = express.Router();

const upload = require('./storage.config');

// Controllers
const mixedController = require('../controllers/MixedForm.controller')
const imgInputController = require('../controllers/ImgInputController')

router.get('/', (req, res, next) => {
  console.log('hola desde routes Api');
  res.status(200).json({ ok: true })
})

router.post ('/mixed',      mixedController.create)
router.get  ('/mixed',      mixedController.find)
router.get  ('/mixed/:id',  mixedController.findById)
router.patch('/mixed/:id',  mixedController.findByIdAndUpdate)
router.delete('/mixed/:id', mixedController.findByIdAndDelete)

router.post ('/imginput',      upload.single('image'),imgInputController.create)
router.get  ('/imginput',      imgInputController.find)
router.get  ('/imginput/:id',  imgInputController.findById)
router.patch('/imginput/:id',  upload.single('image'),imgInputController.findByIdAndUpdate)
router.delete('/imginput/:id', imgInputController.findByIdAndDelete)


module.exports = router