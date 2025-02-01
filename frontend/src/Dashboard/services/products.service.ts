const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/products/`;
import { Product } from '@/Dashboard/interfaces/product';
// import products from '@/mock-data.json';

const getToken = () => window.localStorage.getItem('token');

export async function getProductsService() {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        authorization: `Bearer ${getToken()}`,
        'Access-Control-Allow-Origin': '*',
      },
    });
    const products = await res.json();
    return { ok: true, products };
  } catch (error) {
    return { ok: false, error };
  }
}

export async function addProductsService(product: Product) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${getToken()}`,
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(product),
    });
    return await res.json();
  } catch (error) {
    return { ok: false, error };
  }
}

export async function updateProductsService(product: Product, id: string) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${getToken()}`,
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(product),
    });
    return await res.json();
  } catch (error) {
    return { ok: false, error };
  }
}

export async function deleteProductService(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'delete',
      headers: {
        authorization: `Bearer ${getToken()}`,
        'Access-Control-Allow-Origin': '*',
      },
    });
    return await res.json();
  } catch (error) {
    return { ok: false, error };
  }
}
