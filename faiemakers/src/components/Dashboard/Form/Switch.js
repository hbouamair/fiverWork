import React, { useState } from 'react';

function Switch ({setblur}) {
  
  return (
    <button onClick = {setblur}>switch</button>
  );
}

function Card() {
  const [blur, setBlur] = useState(true);
  const cssClass = blur ? "blurClass" : "notBlurclass"
  return (
<div>
    <div className = {cssClass }>
    
    </div>
    <Switch setblur = {setBlur(prevBlur => !prevBlur )}/>
</div>
  );
}
export default Switch;