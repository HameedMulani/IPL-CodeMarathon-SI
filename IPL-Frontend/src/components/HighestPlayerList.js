import React, { useEffect, useState } from 'react';
import { getMatchesStarts , getHigestPlayer} from '../services/WebApi';
import PlayerCard from './PlayerCard';

import spinner from '../Image/spinning-loading.gif';

const HigestPlayer = () => {
  const [playerList, setplayerList] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getplayerList = async () => {
    try {
      setIsLoading(true);
      const data = await getHigestPlayer();
      setplayerList(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getplayerList();
  }, []);

  const renderProducts = () => {
    if (isLoading) {
      return <img src={spinner} alt="Loading..." />;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (playerList.length === 0) {
      return <div>No products found.</div>;
    }

    return playerList.map((p) => <PlayerCard key={p.productId} Players={p} />);
  };

  return (
    <div>
    <h1 className="bg-info text-center m-2 p-2">Highest Player List </h1>
      <h2 className="text-center m-2 p-2">Players Found: {playerList.length}</h2>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {renderProducts()}
        
      </div>

    </div>
  );
};

export default HigestPlayer;