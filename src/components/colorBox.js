import React from 'react';
import styles from './colorBox.module.css'
import PropTypes from 'prop-types';
import myImage from '../assets/image/beautiful-shiny-pattern-on-dark-background-vector-8722445.jpg'
const ColorBox = ({color, rounded}) => {
    const round = 'rounded-circle'
    return (
        <img src={myImage} alt="myImage" className={`${styles.colorBox} ${rounded ? round : ''} `}>
            
        </img>
    );
}

ColorBox.propTypes = {
    color: PropTypes.string,
    rounded: PropTypes.bool
}
ColorBox.defaultProps = {
    rounded: true
}

export default ColorBox;
