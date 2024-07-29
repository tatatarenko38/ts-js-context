import React, { useContext, useRef } from 'react';

import './App.css';
import { ProductContext } from '.';

const App: React.FC<{}> = () => {

  const context = useContext(ProductContext);

  const ref = useRef<HTMLElement | null>(null);

  return (
    <div className="App">
      <header ref={ref} className="App-header">
        <p>Selected product id: {context?.selectedProductId}</p>
      </header>
    </div>
  );
}

export default App;
