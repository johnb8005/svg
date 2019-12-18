import React from 'react';

export default props => {
  const { children } = props;

  const onMouseMove = e => {
    //const x = e.screenX - 7;
    //const y = e.screenY - 86;

    //const c = { x, y };
    //console.log(c)
  }

  return <svg style={{border: '1px solid black'}} onMouseMove={onMouseMove} width="100%" height="800px">{children}</svg>;
}
