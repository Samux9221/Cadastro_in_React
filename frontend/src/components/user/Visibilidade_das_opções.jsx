import React, { useState } from 'react';

const Menu = () => {
  const [showUserOptions, setShowUserOptions] = useState(false);

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  return (
    <div>
      <button onClick={toggleUserOptions}>
        Usuário
      </button>
      
      {showUserOptions && (
        <div>
          <button>Opção 1</button>
          <button>Opção 2</button>
          <button>Opção 3</button>
          <button>Opção 4</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
