// import React from 'react';
// import Home from './screens/Home';

// export default () => <Home />;



// import React from 'react';
// import Navigation from './config/Navigation';

// export default () => <Navigation />;


import React from 'react';
import Navigation from './config/Navigation';
import { ConversionContextProvider } from './util/ConversionContext';

export default () => (
  <ConversionContextProvider>
    <Navigation />
  </ConversionContextProvider>
);