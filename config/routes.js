const express = require("express");
const router = express.Router();
const radioController = require('../controllers/Radio.controller')
const mixedController = require('../controllers/MixedForm.controller')

router.get('/', (req, res, next) => {
  console.log('hola desde routes Api');
  res.status(200).json({ ok: true })
})

router.post ('/radio',      radioController.createRadio)
router.get  ('/radio/:id',  radioController.findByIdRadio)
router.patch('/radio/:id',  radioController.findByIdAndUpdateRadio)


router.post ('/mixed',      mixedController.create)
router.get  ('/mixed',      mixedController.find)
router.get  ('/mixed/:id',  mixedController.findById)
router.patch('/mixed/:id',  mixedController.findByIdAndUpdate)
router.delete('/mixed/:id',  mixedController.findByIdAndDelete)

module.exports = router