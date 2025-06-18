import fetchData from "./api";
import { API_URL } from "../config";

class GetService {
    async getCity(id, authRequired = false) { 
        return await fetchData(`${API_URL}/api/city/${id}/`, 'GET', authRequired);
    }
    
    async getAllCities(authRequired = false) {
        return await fetchData(`${API_URL}/api/city/`, 'GET', authRequired);
    }

    async getAttractions(authRequired = true) {
        return await fetchData(`${API_URL}/api/attraction/`, 'GET', authRequired);
    }
    
    async getAttraction(id, authRequired = true) {
        return await fetchData(`${API_URL}/api/attraction/${id}/`, 'GET', authRequired);
    }
    
    async createAttraction(attractionData, authRequired = true) {
        return await fetchData(`${API_URL}/api/attraction/`, 'POST', authRequired, attractionData);
    }
    
    async updateAttraction(id, attractionData, authRequired = true) {
        return await fetchData(`${API_URL}/api/attraction/${id}/`, 'PUT', authRequired, attractionData);
    }
    
    async deleteAttraction(id, authRequired = true) {
        return await fetchData(`${API_URL}/api/attraction/${id}/`, 'DELETE', authRequired);
    }
}

export default new GetService();