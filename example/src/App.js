import React from 'react'

import {ComponentA, ComponentB} from '@wztechs/react-components-test'


require('react-dom');
window.React2 = require('react');
export default () => {
  console.log(window.React1, window.React2)
console.log(window.React1 === window.React2);

    return (
      <div>
        <ComponentA />
      </div>
    )
}
