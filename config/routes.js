const express = require("express");
const router = express.Router();
const form1Controller = require('../controllers/Form1.controller')
const form4Controller = require('../controllers/Form4.controller')

router.get('/', (req, res, next) => {
  console.log('hola desde routes Api');
  res.status(200).json({ ok: true })
})


router.post ('/form1',      form1Controller.create)
router.get  ('/form1',      form1Controller.find)
router.get  ('/form1/:id',  form1Controller.findById)
router.patch('/form1/:id',  form1Controller.findByIdAndUpdate)

router.post ('/form4',      form4Controller.create)


module.exports = router