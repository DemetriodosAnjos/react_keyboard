// App.tsx (modificação para manter o teste)
import React, { useState, useEffect } from 'react';
import './index.scss';

export const App: React.FC = () => {
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setLastKeyPressed(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Adicione a classe aqui para que o teste encontre o elemento */}
        {lastKeyPressed === null ? (
          <h1 className="App__message">Nothing was pressed yet</h1>
        ) : (
          <h1 className="App__message">
            The last key pressed was: {lastKeyPressed}
          </h1>
        )}
      </header>
    </div>
  );
};
