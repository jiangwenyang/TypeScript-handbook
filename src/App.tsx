import React from 'react';

import ButtonFC from './ButtonFC';
import ButtonClass from './ButtonClass';

const App: React.FC = () => (
  <div>
    <div>
      <ButtonFC name="ButtonFC">ButtonFC</ButtonFC>
    </div>
    <div>
      <ButtonClass>ButtonClass</ButtonClass>
    </div>
  </div>
);

export default App;
