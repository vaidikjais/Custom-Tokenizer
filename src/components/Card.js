import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`bg-black/20 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/10 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className }) => (
  <h2 className={`text-lg font-semibold text-slate-100 mb-4 ${className}`}>{children}</h2>
);