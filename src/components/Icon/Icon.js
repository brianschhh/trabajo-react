import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


 class Icon extends Component {
  render() {
    return (
      <div style={{fontSize:"2em",position:'absolute',top:5,right:"25%"}}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    )
  }
}

export default Icon;
