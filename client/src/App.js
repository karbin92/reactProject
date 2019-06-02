import React from 'react';
import View from './components/view'
import Header from './components/header'
/* I "app-vyn" sker inte så mycket, vi anropar bara de komponenter som skall ropas på, komponenterna i sig innehåller all nödvändig information. */
function App() {
  return (
    <div>
    
      
        <View />
        <Header />
    

      
   
    </div>
  );
}

export default App;
