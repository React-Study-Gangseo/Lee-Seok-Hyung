import { useState, useEffect } from 'react';
import { getAllProductsAPI } from '../api/product/getAllProductsAPI';
import { ProductDetail } from 'model/market';

// 상품 데이터 및 페이지 데이터 가져오는 커스텀 훅 (Home.tsx)
export const useGetProducts = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      let currentPage = 1;
      let fetchedProducts: any = [];
      let shouldContinue = true;
      while (shouldContinue) {
        const data = await getAllProductsAPI(currentPage);
        fetchedProducts = fetchedProducts.concat(data.results);
        if (data.results.length < 15) {
          shouldContinue = false;
        } else currentPage++;
      }
      setProducts(fetchedProducts);
    };

    fetchAllProducts().catch((error) => {
      console.log('상품 데이터를 불러오는데 에러가 발생했습니다', error);
    });
  }, []);

  return { products };
};
