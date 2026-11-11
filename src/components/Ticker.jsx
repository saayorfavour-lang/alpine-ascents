import { useEffect, useState } from 'react';
import './Ticker.css';

function Ticker() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('Lagos, Nigeria');


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 
  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );

          if (!response.ok) {
            throw new Error('Location lookup failed');
          }

          const data = await response.json();
          const address = data.address || {};

          const place =
            address.city ||
            address.town ||
            address.village ||
            address.county;

          const country = address.country;

          if (place && country) {
            setLocation(`${place}, ${country}`);
          } else if (country) {
            setLocation(country);
          }
        } catch (error) {
          console.error('Location lookup failed:', error);
          setLocation('Lagos, Nigeria');
        }
      },
      (error) => {
        console.warn('Location permission unavailable:', error.message);
        setLocation('Lagos, Nigeria');
      },
      {
        timeout: 10000,
        maximumAge: 300000
      }
    );
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Africa/Lagos'
  });

  // Format the current date
  const formattedDate = currentTime.toLocaleDateString('en-NG', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Lagos'
  });

  return (
    <section className="ticker" aria-label="Current date, time and location">
      <div className="ticker-track">

        <div className="ticker-content">
          <span>
            LOCAL TIME: <strong>{formattedTime}</strong>
          </span>

          <span className="ticker-star">✦</span>

          <span>
            DATE: <strong>{formattedDate}</strong>
          </span>

          <span className="ticker-star">✦</span>

          <span>
            LOCATION: <strong>{location}</strong>
          </span>

          <span className="ticker-star">✦</span>
        </div>

 
        <div className="ticker-content" aria-hidden="true">
          <span>
            LOCAL TIME: <strong>{formattedTime}</strong>
          </span>

          <span className="ticker-star">✦</span>

          <span>
            DATE: <strong>{formattedDate}</strong>
          </span>

          <span className="ticker-star">✦</span>

          <span>
            LOCATION: <strong>{location}</strong>
          </span>

          <span className="ticker-star">✦</span>
        </div>

      </div>
    </section>
  );
}

export default Ticker;