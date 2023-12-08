/**
 * Fetches places related to a specific park dictated by parkCode
 * 
 * @param {Object} parkCode - The park code object containing the park code
 * @returns {Promise<Object>} A promise that resolves to the places data for the given park.
 * @throws {Error} In case of error in API fetching or in other logic
 */
export const FetchPlaces = async (parkCode) => {
    try {
      const url =  `https://developer.nps.gov/api/v1/places?parkCode=${parkCode.value}&api_key=0ilOFP8jTC2LMrwXFTullFqvHyVhBh9aHVW3OWEb`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

export default FetchPlaces;