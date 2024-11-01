import React from 'react';

export default function Loading() {
  const loaderStyle = {
    width: "50px",
    aspectRatio: "1",
    display: "grid",
    border: "4px solid transparent",
    borderRadius: "50%",
    borderRightColor: "#25b09b",
    animation: "l15 1s infinite linear",
    position: "relative"
  };

  const beforeAfterStyle = {
    content: '""',
    gridArea: "1/1",
    margin: "2px",
    border: "4px solid transparent",
    borderRadius: "50%",
    animation: "l15 2s infinite",
    position: "absolute",
  };

  const afterStyle = {
    ...beforeAfterStyle,
    margin: "8px",
    animationDuration: "3s",
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black' }}>
      <div style={loaderStyle}>
        <div style={{ ...beforeAfterStyle }}></div>
        <div style={{ ...afterStyle }}></div>
      </div>
      <style>
        {`
          @keyframes l15 { 
            100% { transform: rotate(1turn); }
          }
        `}
      </style>
    </div>
  );
}
