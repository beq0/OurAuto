const FixedData = require('./FixedData');

const ALL_KEYWORD = "ყველა";

module.exports.getBrands = (req, res) => {
    const Brands = FixedData.getBrands();
    Brands.sort();
    Brands.unshift(ALL_KEYWORD);
    res.status(200).json(Brands);
}

module.exports.getModelsForBrand = (req, res) => {
    if (!req.params.brand) {
        res.status(500).json({message: 'Brand not specified to find models'});
    } else if (req.params.brand === ALL_KEYWORD) {
        res.status(200).json([]);
    }
    const ModelsForBrand = FixedData.getModelsForBrand(req.params.brand);
    res.status(200).json(ModelsForBrand);
}

module.exports.getBrandsWithModels = (req, res) => {
    const BrandsWithModels = FixedData.getBrandsWithModels();
    res.status(200).json(BrandsWithModels);
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
    Positions.unshift(ALL_KEYWORD);
    res.status(200).json(Positions);
}
