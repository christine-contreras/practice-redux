import React from 'react'
import PropTypes from 'prop-types'
const MoreButtons = ({ handleMoreSushiBtnClick }) => {
  return <button onClick={handleMoreSushiBtnClick}>More sushi!</button>
}

export default MoreButtons

MoreButtons.propTypes = {
  handleMoreSushiBtnClick: PropTypes.func,
}
