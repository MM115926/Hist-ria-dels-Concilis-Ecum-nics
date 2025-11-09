import React from 'react';
import { COUNCILS_DATA } from '../constants';
import { Council } from '../types';

const CouncilTable: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300">
          <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-700 dark:text-slate-300 sticky top-0">
            <tr>
              <th scope="col" className="px-4 py-4 text-center font-semibold tracking-wider">Nº</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Concili</th>
              <th scope="col" className="px-6 py-4 text-center font-semibold tracking-wider">Any</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Ciutat</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Esdeveniments i Conseqüències Clau</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {COUNCILS_DATA.map((council: Council, index: number) => (
              <tr 
                key={council.id} 
                className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <td className="px-4 py-4 text-center font-mono font-medium text-slate-700 dark:text-slate-300">
                  {council.id === 0 ? '—' : council.id}
                </td>
                <th scope="row" className="px-6 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                  {council.name}
                </th>
                <td className="px-6 py-4 text-center font-mono">{council.year}</td>
                <td className="px-6 py-4">{council.city}</td>
                <td className="px-6 py-4">
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-500 dark:text-slate-400">
                    {council.events.map((event, eventIndex) => (
                      <li key={eventIndex}>{event}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouncilTable;
