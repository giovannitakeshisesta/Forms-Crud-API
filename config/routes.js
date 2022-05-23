const express = require("express");
const router = express.Router();
const form1Controller = require('../controllers/Form1.controller')
const form4Controller = require('../controllers/Form4.controller')
const radioController = require('../controllers/Radio.controller')
const mixedController = require('../controllers/MixedForm.controller')

router.get('/', (req, res, next) => {
  console.log('hola desde routes Api');
  res.status(200).json({ ok: true })
})


router.post ('/form1',      form1Controller.create)
router.get  ('/form1',      form1Controller.find)
router.get  ('/form1/:id',  form1Controller.findById)
router.patch('/form1/:id',  form1Controller.findByIdAndUpdate)

router.post ('/form4',      form4Controller.create)
router.get  ('/form4',      form4Controller.find)
router.get  ('/form4/:id',  form4Controller.findById)
router.patch('/form4/:id',  form4Controller.findByIdAndUpdate)

router.post ('/radio',      radioController.createRadio)
router.get  ('/radio/:id',  radioController.findByIdRadio)
router.patch('/radio/:id',  radioController.findByIdAndUpdateRadio)


router.post ('/mixed',      mixedController.create)
router.get  ('/mixed',      mixedController.find)
router.get  ('/mixed/:id',  mixedController.findById)
router.patch('/mixed/:id',  mixedController.findByIdAndUpdate)

module.exports = router