import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Galeria.css';
import gory from './images/gory.jpeg';
import jesien from './images/jesien.jpg';
import jezioro from './images/jezioro.jpg';
import plaza from './images/plaza.jpg';
import ulica from './images/ulica.jpeg';
import zatoka from './images/zatoka.jpeg';

class Galeria extends Component {
  render() {
    return (
      <div>
        <table className="galery-table">
          <tr>
            <td><img className="galery-img" src={gory} alt="1"/></td>
            <td><img className="galery-img" src={jesien} alt="2"/></td>
            <td><img className="galery-img" src={jezioro} alt="3"/></td>
          </tr>
          <tr>
            <td><img className="galery-img" src={plaza} alt="4"/></td>          
            <td><img className="galery-img" src={ulica} alt="5"/></td>
            <td><img className="galery-img" src={zatoka} alt="6"/></td>
          </tr>
        </table>
      </div>
    );
  }
}

Galeria.propTypes = {

};

export default Galeria;