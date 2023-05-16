// import PropTypes from 'prop-types'
import { Component } from 'react'
import './Carousel.css'
import { fetchImages } from './services/api'

class Carousel extends Component {
  state = {
    images: [],
    isLoading: true,
    currentImageIndex: 0,
  }

   //Toda função assíncrona retorna uma Promisse
   //Por isso usamos o async/await 
  async componentDidMount() {
    await this.getImages();
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  getImages = async () => {
    const { category } = this.props;
    try {
      const images = await fetchImages(category);
      this.setState({
        isLoading: false,
        images,
      });

      this.timeID = setInterval(() => {
        console.count('Imagem mudou: ');
        this.nextImage();
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  }

  nextImage = () => {
    const { images, currentImageIndex } = this.state;
    const newIndex = (currentImageIndex + 1) % images.length;
    this.setState({ currentImageIndex: newIndex })
  }

  render() {
    const { isLoading, images, currentImageIndex } = this.state;
    if (isLoading) <p>Carregando...</p>

    return (
      <div className='carousel'>

        <button
          className="carousel-button carousel-button-left"
          onClick={ () => {
            console.log('mover imagem manualmente');
          } }
        >
          &#8249;
        </button>

        <img 
          className='carousel-image'
          src={ images[currentImageIndex] } 
          alt=""
        />

        <button
          className="carousel-button carousel-button-right"
          onClick={ () => {
            this.nextImage();
            console.log('mover imagem manualmente');
          } }
        >
          &#8250;
        </button>
      </div>
    )
  }
}

// Carousel.propTypes = {
// }

export default Carousel;
