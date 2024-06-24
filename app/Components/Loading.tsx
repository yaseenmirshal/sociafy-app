import React from 'react';

const Loading = () => {
  return (
    <div style={{backgroundColor:'#1A0033'}} className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50  bg-opacity-70 backdrop-blur-sm">
      <div className="animate-spin rounded-full border-b-2 border-white w-10 h-10" />
    </div>
  );
};

export default Loading;
