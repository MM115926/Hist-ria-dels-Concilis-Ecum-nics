import React from 'react';
import Header from './components/Header';
import ConceptCard from './components/ConceptCard';
import CouncilTable from './components/CouncilTable';
import { CHURCH_DEFINITION, COUNCIL_DEFINITION } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ConceptCard title={CHURCH_DEFINITION.title} animationDelay="300ms">
            <div className="space-y-6">
              {CHURCH_DEFINITION.marks.map((mark) => (
                <div key={mark.name}>
                  <h3 className="text-xl font-bold text-sky-800 dark:text-sky-300 flex items-center gap-3">
                    <span dangerouslySetInnerHTML={{ __html: mark.icon }} />
                    {mark.name}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {mark.description}
                  </p>
                </div>
              ))}
            </div>
          </ConceptCard>
          <ConceptCard title={COUNCIL_DEFINITION.title} animationDelay="500ms">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              {COUNCIL_DEFINITION.description}
            </p>
          </ConceptCard>
        </main>
        <section 
          className="mt-16 animate-fade-in-up"
          style={{ animationDelay: '700ms' }}
        >
           <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-8">
            Taula dels 21 Concilis Ecumènics
          </h2>
          <CouncilTable />
        </section>
        <footer className="text-center mt-16 py-4 text-sm text-slate-500 dark:text-slate-400 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <p>Fet per Miquel López i Denis Mendoza</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
