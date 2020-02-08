import React from 'react';
import './Logo.scss';

export const Logo = () => (
  <div className="logo">
    <div className="logo__circle" />
    <div className="logo__rect" />
    <div className="logo__circle" />
    <div className="logo__rect logo__rect-skew" />
  </div>
);
