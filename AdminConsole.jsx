import React, { useState } from 'react';
import { Send, Shield, Users, Lock } from 'lucide-react';

export default function App() {
  const [msg, setMsg] = useState("");
  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 font-sans">
      <div className="max-w-md mx-auto bg-slate-900 border border-purple-500/20 rounded-[2.5rem] p-8 shadow-2xl">
        <header className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full border-2 border-purple-500 bg-slate-800 flex items-center justify-center">
            <Lock className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-xl font-black italic tracking-tighter uppercase">Coach Buchi</h1>
            <p className="text-[9px] text-purple-500 font-bold tracking-widest uppercase italic">Supreme Commander</p>
          </div>
        </header>
        <div className="space-y-6">
          <textarea 
            className="w-full bg-slate-950 border border-slate-800 rounded-3xl p-4 text-sm focus:border-purple-500 outline-none transition-all h-32"
            placeholder="Issue Imperial Decree..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="w-full py-4 bg-purple-600 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg active:scale-95 transition-all">
            Issue Decree
          </button>
        </div>
        <footer className="mt-8 pt-6 border-t border-slate-800 flex justify-between text-[8px] font-bold text-slate-500 tracking-widest uppercase">
          <span>api.resofit.fit</span>
          <span>THE RESULT GO CLEAR</span>
        </footer>
      </div>
    </div>
  );
}

