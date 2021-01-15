const FixedData = require('./FixedData');

module.exports.getBrands = (req, res) => {
    const Brands = FixedData.getBrands();
    Brands.sort();
    res.status(200).json(Brands)
}

module.exports.getModelsForBrand = (req, res) => {
    if (!req.body.brand) {
        res.status(500).json({message: 'Brand not specified to find models'});
    }
    const ModelsForBrand = FixedData.getModelsForBrand(req.body.brand);
    ModelsForBrand.sort();
    res.status(200).json(ModelsForBrand);
}

module.exports.getSellTypes = (req, res) => {
    const SellTypes = FixedData.getSellTypes();
    res.status(200).json(SellTypes);
}

module.exports.getCategories = (req, res) => {
    const Categories = FixedData.getCategories();
    res.status(200).json(Categories);
}

module.exports.getTransmissions = (req, res) => {
    const Transmissions = FixedData.getTransmissions();
    res.status(200).json(Transmissions);
}

module.exports.getFuelTypes = (req, res) => {
    const FuelTypes = FixedData.getFuelTypes();
    res.status(200).json(FuelTypes);
}

module.exports.getCustomTypes = (req, res) => {
    const CustomTypes = FixedData.getCustomTypes();
    res.status(200).json(CustomTypes);
}

module.exports.getWheels = (req, res) => {
    const Wheels = FixedData.getWheels();
    res.status(200).json(Wheels);
}

module.exports.getPositions = (req, res) => {
    const Positions = FixedData.getPositions();
    Positions.sort();
    res.status(200).json(Positions);
}
