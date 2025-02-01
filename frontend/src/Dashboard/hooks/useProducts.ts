import { AuthContext } from '@/Auth/context/AuthContext';
import type { Product } from '@/Dashboard/interfaces/product';
import {
  addProductsService,
  deleteProductService,
  getProductsService,
  updateProductsService,
} from '@/Dashboard/services/products.service';
import { useContext, useEffect, useState } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useContext(AuthContext)

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { ok, products } = await getProductsService();
    if (!ok) return;
    setProducts(products || []);
  };

  const addProduct = async (product: Product) => {
    const { ok, product: newProduct } = await addProductsService(product);
    if (!ok) return;
    setProducts([...(products ?? []), {...newProduct}]);
  };

  const deleteProduct = async (id: string) => {
    const { ok } = await deleteProductService(id);
    if (!ok) return;
    const index = products.findIndex((p) => p._id === id);
    const updatedProductList = [
      ...products.slice(0, index),
      ...products.slice(index + 1),
    ];
    setProducts(updatedProductList);
  };

  const updateProduct = async (product: Product, id: string) => {
    const { ok, product: updatedProduct } = await updateProductsService(
      product,
      id
    );
    if (!ok) return;
    const index = products.findIndex((p) => p._id === id);
    console.log(updatedProduct);
    const updatedProductList = [
      ...products.slice(0, index),
      { ...updatedProduct },
      ...products.slice(index + 1),
    ];
    setProducts(updatedProductList);
  };

  return {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
    getProducts,
  };
};
