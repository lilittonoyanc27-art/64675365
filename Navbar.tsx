import React from 'react';
import {
  BookOpen,
  Brain,
  Target,
  Search,
  FileText,
  Swords,
  RefreshCw,
  Award,
  Layers,
  Home,
} from 'lucide-react';

export type NavTab =
  | 'inicio'
  | 'teoria'
  | 'memoriza'
  | 'practica'
  | 'oraciones'
  | 'errores'
  | 'textos'
  | 'desafio'
  | 'repaso'
  | 'simulacro';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  pendingMistakesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  pendingMistakesCount,
}) => {
  const tabs: Array<{ id: NavTab; label: string; icon: React.ReactNode; badge?: number }> = [
    { id: 'inicio', label: 'Inicio', icon: <Home className="w-4 h-4" /> },
    { id: 'teoria', label: 'Teoría', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'memoriza', label: 'Memoriza', icon: <Brain className="w-4 h-4" /> },
    { id: 'practica', label: 'Practica', icon: <Target className="w-4 h-4" /> },
    { id: 'oraciones', label: 'Oraciones', icon: <Layers className="w-4 h-4" /> },
    { id: 'errores', label: 'Encuentra el error', icon: <Search className="w-4 h-4" /> },
    { id: 'textos', label: 'Analiza el texto', icon: <FileText className="w-4 h-4" /> },
    { id: 'desafio', label: 'Desafío mixto', icon: <Swords className="w-4 h-4" /> },
    {
      id: 'repaso',
      label: 'Repasa errores',
      icon: <RefreshCw className="w-4 h-4" />,
      badge: pendingMistakesCount > 0 ? pendingMistakesCount : undefined,
    },
    { id: 'simulacro', label: 'Simulacro de examen', icon: <Award className="w-4 h-4" /> },
  ];

  return (
    <nav className="border-b border-slate-200 bg-white/95 backdrop-blur-xs sticky top-[57px] z-30 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1 py-1.5 min-w-max">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 relative ${
                isActive
                  ? 'bg-teal-50 text-teal-900 font-semibold border border-teal-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span className={isActive ? 'text-teal-700' : 'text-slate-400'}>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-rose-500 text-white">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
