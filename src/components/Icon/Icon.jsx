import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

export const Icon = ({ name, ...others }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    {...others}
  >
    <title>{name}</title>
    <use
      xlinkHref={`#${name}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
