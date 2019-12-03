import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <div className='container content-center mx-auto'>
    <ReactLoading type={type} color={color} height={150} width={150} />
  </div>
);

export default Loading;

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};

Loading.defaultProps = {
  type: 'balls',
  color: 'palevioletred',
};
