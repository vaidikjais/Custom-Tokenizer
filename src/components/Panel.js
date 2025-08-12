import React from 'react';

export function Panel({ icon, title, children, className }) {
  const Icon = icon;
  return (
    <div className={`bg-slate-900 border border-slate-700 rounded-lg shadow-lg ${className}`}>
      <div className="flex items-center gap-3 p-4 border-b border-slate-700">
        {Icon && <Icon className="w-5 h-5 text-slate-400" />}
        <h2 className="text-md font-semibold text-slate-200">{title}</h2>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}