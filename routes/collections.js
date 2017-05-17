const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/collections')


router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)
router.post('/', ctrl.create)





module.exports = router
