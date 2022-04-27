import React , {useState,useEffect} from 'react'
import axios from 'axios';
import {CryptoState} from '../CryptoContext';
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
const Carousel = () => {

    const [trending, setTrending] = useState([]);
    const { currency, symbol } = CryptoState();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  
    const fetchTrendingCoins = async () => {
  
  
  
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);

  
      console.log(data);
      setTrending(data);
    };
  
    useEffect(() => {
      fetchTrendingCoins();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);
  
   
  
  
    const items = trending.map((coin) => {
      let profit = coin?.price_change_percentage_24h >= 0;
  
      return (
        <div className="carouselItem" >
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />
          <span>
            {coin?.symbol}
            &nbsp;
            <span
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>
        </div>
      );
    });
  
    const responsive = {
      0: {
        items: 2,
      },
      512: {
        items: 4,
      },
    };
  
    return (
      <div className="carousel">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      </div>
    );
  };
  

export default Carousel;