import React, { useEffect, useState } from 'react';
import { getMatchesStarts } from '../services/WebApi';
import MatchCard from './MatchCard';

import spinner from '../Image/spinning-loading.gif';

const Matches = () => {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductList = async () => {
    try {
      setIsLoading(true);
      const data = await getMatchesStarts();
      setProductList(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  const renderProducts = () => {
    if (isLoading) {
      return <img src={spinner} alt="Loading..." />;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (productList.length === 0) {
      return <div>No products found.</div>;
    }

    return productList.map((p) => <MatchCard key={p.productId} Matches={p} />);
  };

  return (
    <div>
    <h1 className="bg-info text-center m-2 p-2">Matches Statistics </h1>
      <h2 className="text-center m-2 p-2">Matches Found: {productList.length}</h2>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {renderProducts()}
        
      </div>

    </div>
  );
};

export default Matches;