const router = require('express').Router();
const FixedData = require('../controllers/fixeddata/fixedData.controller');

router.get('/getBrands', FixedData.getBrands);

router.get('/getModelsForBrand', FixedData.getModelsForBrand);

router.get('/getSellTypes', FixedData.getSellTypes);

router.get('/getCategories', FixedData.getCategories);

router.get('/getTransmissions', FixedData.getTransmissions);

router.get('/getFuelTypes', FixedData.getFuelTypes);

router.get('/getCustomTypes', FixedData.getCustomTypes);

router.get('/getWheels', FixedData.getWheels);

router.get('/getPositions', FixedData.getPositions);

module.exports = router;