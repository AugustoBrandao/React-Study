import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />
  }
}

//Controlando as props
Image.propTypes = {
  source: PropTypes.string.isRequired,
  alternativeText: PropTypes.string
}

//Definindo valores padrão para as props
Image.defaultProps = {
  source: 'https://cdn2.thecatapi.com/images/6mf.jpg',
  alternativeText: 'Default Text'
}

export default Image;