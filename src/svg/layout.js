import React from 'react';

export default props => {
  const { children } = props;

  const onMouseMove = e => {
    //const x = e.screenX - 7;
    //const y = e.screenY - 86;

    //const c = { x, y };
    //console.log(c)
  }

  return <div style={{
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    paddingBottom: '100%',
    verticalAlign: 'middle',
    overflow: 'hidden'
  }}>
    <svg
      version="1.1"
      viewBox="0 0 800 800" 
      fdspreserveAspectRatio="xMinYMin meet"
      style={{
        border: '1px solid black',
        display: 'inline-block',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >

      {/*<svg
    style={{border: '1px solid black'}}
    onMouseMove={onMouseMove}
    width="800px"
    height="800px"
    viewBox="0 0 800 800"
  >*/}{children}</svg></div>;
}
