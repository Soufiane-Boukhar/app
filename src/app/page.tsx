import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [nasaData, setNasaData] = useState<any[]>([]);

  useEffect(() => {
    // Define the NASA API endpoint and your API key
    const nasaEndpoint = 'https://images-api.nasa.gov';
    const apiKey = '6Rgf9gyzbgGHMF7w9kAZde8oC4VcAiv5OOPkV2Qw';

    // Fetch data from NASA's API
    fetch(`${nasaEndpoint}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setNasaData(data.collection.items))
      .catch((error) => console.error(error));
  }, []);

  // Function to render a card for each NASA item
  c
}
