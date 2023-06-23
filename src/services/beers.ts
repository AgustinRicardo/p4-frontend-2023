const API_URL = "https://api.punkapi.com/v2/beers";

export const getBeers = async () => {
  try {
    const response = await fetch(API_URL);
    const beers = await response.json();

    return beers;
  } catch (error) {
    throw new Error("Error fetching beers: " + error);
  }
};

export const getBeerById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const beer = await response.json();

    if (beer.error) {
      throw Error;
    }
    return beer[0];
  } catch (error) {
    throw new Error();
  }
};
