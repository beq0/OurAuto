const IS_LOCAL = true; 
const SERVICE_URL = IS_LOCAL ? 'http://localhost:4201/api' : 'http://165.22.30.90:4201/api';
const USER_SERVICE_URL = IS_LOCAL ? 'http://localhost:4201/api/user' : 'http://165.22.30.90:4201/api/user';
const CAR_SERVICE_URL = IS_LOCAL ? 'http://localhost:4201/api/car' : 'http://165.22.30.90:4201/api/car';
const FIXED_DATA_SERVICE_URL = IS_LOCAL ? 'http://localhost:4201/api/fixedData' : 'http://165.22.30.90:4201/api/fixedData';