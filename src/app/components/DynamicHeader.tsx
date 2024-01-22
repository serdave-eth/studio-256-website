"use client"
import React, { useState, useEffect } from 'react';

interface DynamicHeaderProps {
  finalText: string;
  intervalMs: number;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ finalText, intervalMs }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const variance = Math.random() * 100 - 50; // This will give a number between -50 and +50
    const randomInterval = intervalMs + variance; 
    if (currentText.length < finalText.length) {
      const timer = setTimeout(() => {
        setCurrentText(finalText.substring(0, currentText.length + 1));
      }, randomInterval);

      return () => clearTimeout(timer);
    }
  }, [currentText, finalText, intervalMs]);

  return <h1 className="text-2xl font-bold">{currentText}</h1>;
};

export default DynamicHeader;
