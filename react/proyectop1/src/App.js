import React from 'react';
import InfoPersonal from './InfoPersonal';
import Estudios from './Components/Estudios';
import Herramientas from './Components/Herramientas';
import Vida from './Components/Vida';
import Musica from './Components/Musica';
import Hobbies from './Components/Hobbies';

const App = () => {
  return (
      <div style={{ 
          background: 'linear-gradient(135deg, #ff9966, #ff5e62)',
          padding: '20px', 
          minHeight: '100vh' 
      }}>
          <InfoPersonal />
          <Estudios />
          <Herramientas />
          <Vida />
          <Musica />
          <Hobbies />
      </div>
  );
};

export default App;
