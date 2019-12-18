import React from 'react';

export default props => {
  const { name } = props;
  return <a aria-label={name} href="https://github.com/johnb8005/svg">
    <i className={`fa fa-${name}`} aria-hidden="true"/>
  </a>;
};
