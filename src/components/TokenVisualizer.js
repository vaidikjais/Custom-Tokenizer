import React from 'react';
import { getColorForToken } from '../lib/colorUtils';

export function TokenVisualizer({ tokens }) {
  if (!tokens || tokens.length === 0) {
    return <div className="text-sm text-slate-500">No tokens detected.</div>;
  }
  
  const uniqueTokens = [...new Set(tokens.filter(t => t.trim() !== ''))];

  return (
    <div>
      <div className="flex flex-wrap gap-x-1 gap-y-2">
        {tokens.map((token, index) => {
          if (token.trim() === '') {
            return <div key={index} className="w-2" />; 
          }
          const color = getColorForToken(token);
          return (
            <div key={index} style={{ backgroundColor: `${color}20`, color: color, borderColor: `${color}80` }}
              className="px-2.5 py-1 rounded-md font-mono text-sm border"
            >
              {token}
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 border-t border-slate-700 pt-4">
        <h3 className="text-sm font-semibold text-slate-400 mb-3">Color Legend (Unique Tokens)</h3>
        <div className="flex flex-wrap gap-2">
          {uniqueTokens.map((token, index) => {
             const color = getColorForToken(token);
             return (
              <div key={index} style={{ backgroundColor: `${color}20`, color: color, borderColor: `${color}80` }}
                className="px-2 py-1 rounded-md font-mono text-xs border"
              >
                {token}
              </div>
             )
          })}
        </div>
      </div>
    </div>
  );
}