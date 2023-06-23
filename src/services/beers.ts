export const getBeers = async () => {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const beers = await response.json();
  
      return beers;
    } catch (error) {
      throw new Error("Error fetching beers: " + error);
    }
  };  