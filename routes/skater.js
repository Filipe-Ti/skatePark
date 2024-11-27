const { Router } = require("express");

const { findAllSkatersController, createSkaterController, updateSkaterController, deleteSkaterController } = require("../controller/skater");

const router = Router();

router.get('/skaters', findAllSkatersController);

router.post('/skaters', createSkaterController);

router.put('/skaters', updateSkaterController);

router.delete('/skaters', deleteSkaterController);

module.exports = router;
