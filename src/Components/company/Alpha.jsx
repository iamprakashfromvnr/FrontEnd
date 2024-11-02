import React, { useState } from 'react';
import Demo from './Demo';

function Alpha() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button 
        onClick={toggleModal} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Open Modal
      </button>
      
      <Demo isOpen={isOpen} onClose={toggleModal} title="My Modal">
        <p>This is the content of the modal!</p>
      </Demo>
    </div>
  );
}

export default Alpha;