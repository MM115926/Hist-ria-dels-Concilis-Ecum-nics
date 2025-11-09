import React, { useState } from 'react';
import Header from './components/Header';
import ConceptCard from './components/ConceptCard';
import CouncilTable from './components/CouncilTable';
import { CHURCH_DEFINITION, COUNCIL_DEFINITION } from './constants';
import { Council } from './types';
import { GoogleGenAI } from '@google/genai';

const Spinner: React.FC = () => (
  <svg className="animate-spin h-10 w-10 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  isLoading: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up" style={{ animationDuration: '300ms' }}></div>
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col animate-fade-in-up" 
        style={{ animationDuration: '400ms', animationDelay: '100ms' }}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <header className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
          <h2 id="modal-title" className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
          <button onClick={onClose} aria-label="Tancar" className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>
        <main className="p-6 overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <Spinner />
            </div>
          ) : (
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
              {children}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedCouncil, setSelectedCouncil] = useState<Council | null>(null);
  const [modalContent, setModalContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCouncilClick = async (council: Council) => {
    setSelectedCouncil(council);
    setIsLoading(true);
    setModalContent('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Explica detalladament el ${council.name}, celebrat l'any ${council.year}. Centra't en el context històric, les decisions clau preses i les seves conseqüències a llarg termini per a la doctrina i la història de l'Església Catòlica. Vull una explicació rica i profunda, en català, adequada per a algú amb interès en la història eclesiàstica. Estructura la resposta amb títols clars per a 'Context Històric', 'Decisions Principals', i 'Impacte i Llegat'.`;
      
      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
      });

      setModalContent(response.text);
    } catch (error) {
      console.error("Error fetching council details:", error);
      setModalContent("No s'ha pogut carregar la informació. Si us plau, intenta-ho de nou més tard.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedCouncil(null);
  };

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
          <CouncilTable onCouncilClick={handleCouncilClick} />
        </section>
        <footer className="text-center mt-16 py-4 text-sm text-slate-500 dark:text-slate-400 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <p>Fet per Miquel López i Denis Mendoza</p>
        </footer>
      </div>
      <Modal
        isOpen={!!selectedCouncil}
        onClose={handleCloseModal}
        title={selectedCouncil?.name || ''}
        isLoading={isLoading}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default App;