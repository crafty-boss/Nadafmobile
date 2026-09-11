import axios from 'axios';
import { encode as btoa } from 'base-64';

// Remplacez par votre vraie clé WebService générée dans PrestaShop
const API_KEY = 'VOTRE_CLE_WEBSERVICE';
const BASE_URL = 'https://www.nadaf.ma/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Basic ${btoa(API_KEY + ':')}`,
  },
  params: {
    'output_format': 'JSON', // Force PrestaShop à répondre en JSON
  },
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products', {
      params: { display: 'full' },
    });
    return response.data.products || [];
  } catch (error) {
    console.error('Erreur API PrestaShop:', error);
    throw error;
  }
};
