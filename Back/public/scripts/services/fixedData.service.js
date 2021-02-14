class FixedDataService {
    constructor() {

    }

    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    
    async getBrands() {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getBrands');
    }

    async getModelsForBrand(brand) {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getModelsForBrand/' + brand);
    }

    async getBrandsWithModels() {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getBrandsWithModels');
    }

    async getSellTypes() {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getSellTypes');
    }

    async getCategories() {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getCategories');
    }

    async getTransmissions() {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getTransmissions');
    }

    async getFuelTypes() {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getFuelTypes');
    }

    async getCustomTypes() {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getCustomTypes');
    }

    async getWheels() {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getWheels');
    }

    async getPositions() {
        return AjaxRequest.get(FIXED_DATA_SERVICE_URL + '/getPositions');
    }
}