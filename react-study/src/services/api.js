export const fetchImages = async (category) => {
    const photosQuantity = 5;
    const apiUrl = `https://api.pexels.com/v1/search?query=${category}&per_page=${photosQuantity}&orientation=landscape&size=large`;
    const apiKey = 'N6V5hqNIsCHU0zlCwxH6XrIzsrwbnqGeCXPSkpWCJPpnW2jV6sCZCBQY';
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error('Erro ao buscar as imagens');
      }
  
      const data = await response.json();
      const images = data.photos.map((photo) => photo.src.large);
      return images;
    } catch (error) {
      console.error('Erro ao buscar as imagens:', error);
      throw error;
    }
  };