import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import './css/logo.css';

export const App = () => {
  const initialColors = ["#FF008C", "#D309E1", "#D309E2"];
  const [colors, setColors] = useState(initialColors);
  const spring = {
    type: "spring",
    damping: 100,
    stiffness: 300
  };

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 1600);
  }, [colors]);

  return (
    <div className="logo"><p style={{fontSize: 60, color: colors[0]}}>JADE</p>
      {colors.map(background => (
        <motion.div
          key={background}
          layoutTransition={spring}
          style={{ background }}
          className="logo-block"
        />
      ))} 
      <p style={{fontSize: 60, color: colors[2]}}>ROSE</p>
    </div>
  );
};




export default App;
