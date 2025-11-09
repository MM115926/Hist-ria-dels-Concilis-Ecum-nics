import React from 'react';

const Header: React.FC = () => {
  return (
    <header 
      className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg animate-fade-in-up"
      style={{ animationDelay: '100ms' }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">
        Història dels Concilis de l'Església
      </h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        Una exploració visual i conceptual de les assemblees que han modelat la doctrina cristiana al llarg dels segles.
      </p>
    </header>
  );
};

export default Header;