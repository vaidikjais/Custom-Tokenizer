'use client';

import { useState, useMemo } from 'react';
import CustomTokenizer from '../lib/tokenizer';
import { Header } from '../components/Header';
import { TokenVisualizer } from '../components/TokenVisualizer';
import { Panel } from '../components/Panel';
import { Copy, Type, Brackets, KeyRound, Eye, RefreshCw } from 'lucide-react';

const tokenizer = new CustomTokenizer();

export default function HomePage() {
  const [inputText, setInputText] = useState('Hello world! This is a custom tokenizer.');
  const [decodeInput, setDecodeInput] = useState('');
  const [decodedOutput, setDecodedOutput] = useState('');

  const { tokens, encodedIds } = useMemo(() => {
    if (!inputText) return { tokens: [], encodedIds: [] };
    const tokens = tokenizer.getTokens(inputText);
    const encodedIds = tokenizer.encode(inputText);
    return { tokens, encodedIds };
  }, [inputText]);

  const handleDecode = () => {
    if (!decodeInput.trim()) {
      setDecodedOutput('Input is empty.');
      return;
    }
    const ids = decodeInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    if (ids.length > 0) {
      setDecodedOutput(tokenizer.decode(ids));
    } else {
      setDecodedOutput('No valid IDs found in input.');
    }
  };

  const handleCopyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${type} copied to clipboard!`);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* All content now goes inside the main tag */}
      <main className="max-w-7xl mx-auto p-4 sm:p-8 flex flex-col gap-6">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Text Input Panel */}
          <Panel icon={Type} title="Text Input" className="md:col-span-2">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-24 p-3 bg-slate-800 rounded-md border border-slate-700 resize-none font-mono focus:ring-2 focus:ring-purple-500 outline-none transition-all text-slate-200"
              placeholder="Type here..."
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-slate-500">{inputText.length} characters</p>
              <button onClick={() => setInputText('')} className="text-xs flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
                <RefreshCw size={12}/> Clear
              </button>
            </div>
          </Panel>

          {/* Token Encoding Panel */}
          <Panel icon={Brackets} title="Token Encoding">
             <p className="text-sm text-slate-400 mb-2">Encoded Token IDs:</p>
             <div className="w-full p-3 min-h-[4rem] rounded-md bg-slate-800 font-mono text-purple-300">
                {encodedIds.join(', ')}
             </div>
             <div className="flex gap-2 mt-4">
                <button onClick={() => handleCopyToClipboard(encodedIds.join(', '), 'IDs')} className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-green-600/20 text-green-300 hover:bg-green-600/30 transition-all text-sm font-semibold">
                    <Copy size={14} /> Copy IDs
                </button>
                <button onClick={() => handleCopyToClipboard(inputText, 'Text')} className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-600/20 text-slate-300 hover:bg-slate-600/30 transition-all text-sm font-semibold">
                    <Copy size={14} /> Copy Text
                </button>
             </div>
          </Panel>
          
          {/* Token Decoding Panel */}
          <Panel icon={KeyRound} title="Token Decoding">
            <p className="text-sm text-slate-400 mb-2">Enter comma-separated IDs:</p>
            <input
                type="text"
                value={decodeInput}
                onChange={(e) => setDecodeInput(e.target.value)}
                className="w-full p-2 bg-slate-800 rounded-md border border-slate-700 font-mono focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="Paste IDs here..."
              />
              <button onClick={handleDecode} className="w-full mt-4 p-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/50">
                Decode
              </button>
              <p className="text-sm text-slate-400 mt-4 mb-2">Decoded Text:</p>
              <div className="w-full p-3 min-h-[2rem] rounded-md bg-slate-800 font-mono text-slate-200">
                {decodedOutput || '...'}
              </div>
          </Panel>

          {/* Token Visualization Panel */}
          <Panel icon={Eye} title="Token Visualization" className="md:col-span-2">
            <TokenVisualizer tokens={tokens} />
          </Panel>
          
        </div>
      </main>
    </div>
  );
}