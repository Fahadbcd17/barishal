import fetchData from "./api";
import { API_URL } from "../config";

class GetService {
    async getCity(id, authRequired = false) { 
        return await fetchData(`${API_URL}/api/city/${id}/`, 'GET', authRequired);
    }
    
    async getAllCities(authRequired = false) {
        return await fetchData(`${API_URL}/api/city/`, 'GET', authRequired);
    }
}

export default new GetService();