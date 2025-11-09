import React from 'react';

interface ConceptCardProps {
  title: string;
  children: React.ReactNode;
  animationDelay?: string;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ title, children, animationDelay = '0ms' }) => {
  return (
    <div 
      className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay }}
    >
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-sky-500/50 pb-3">
          {title}
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
            {children}
        </div>
      </div>
    </div>
  );
};

export default ConceptCard;