
import { useEffect, useRef, useState } from 'react';

function useVisitorCounter() {
  const [visits, setVisits] = useState(0);
  const hasCounted = useRef(false);

  useEffect(() => {
    if (hasCounted.current) return;

    const previousVisits = Number(
      localStorage.getItem('alpineVisits') || 0
    );

    const newVisits = previousVisits + 1;

    localStorage.setItem('alpineVisits', newVisits);
    setVisits(newVisits);

    hasCounted.current = true;
  }, []);

  return visits;
}

export default useVisitorCounter;
