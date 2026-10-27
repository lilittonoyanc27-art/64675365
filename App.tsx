import React, { useState, useEffect } from 'react';
import { UserStats, TopicId, ExamAttempt } from './types.ts';
import {
  loadUserStats,
  saveUserStats,
  recordQuestionResult,
  recordExamAttempt,
  resetAllProgress,
} from './storage.ts';
import { Header } from './Header.tsx';
import { Navbar, NavTab } from './Navbar.tsx';
import { HomeDashboard } from './HomeDashboard.tsx';
import { TheoryView } from './TheoryView.tsx';
import { FlashcardsView } from './FlashcardsView.tsx';
import { PracticeView } from './PracticeView.tsx';
import { SentenceParserView } from './SentenceParserView.tsx';
import { FindErrorView } from './FindErrorView.tsx';
import { TextAnalysisView } from './TextAnalysisView.tsx';
import { MixedChallengeView } from './MixedChallengeView.tsx';
import { ErrorReviewView } from './ErrorReviewView.tsx';
import { ExamSimulacroView } from './ExamSimulacroView.tsx';

export default function App() {
  const [stats, setStats] = useState<UserStats>(() => loadUserStats());
  const [currentTab, setCurrentTab] = useState<NavTab>('inicio');
  const [targetTopicId, setTargetTopicId] = useState<TopicId | undefined>(undefined);
  const [showResetModal, setShowResetModal] = useState(false);

  // Sync stats to localStorage
  useEffect(() => {
    saveUserStats(stats);
  }, [stats]);

  const handleUpdateSpeechRate = (rate: number) => {
    const updated = { ...stats, speechRate: rate };
    setStats(updated);
  };

  const handleRecordQuestion = (questionId: string, topicId: TopicId, isCorrect: boolean) => {
    setStats((prev) => recordQuestionResult(prev, questionId, topicId, isCorrect));
  };

  const handleSaveExamAttempt = (exam: ExamAttempt) => {
    setStats((prev) => recordExamAttempt(prev, exam));
  };

  const handleUpdateFlashcardMastery = (cardId: string, isKnown: boolean) => {
    setStats((prev) => {
      const currentLevel = prev.flashcardLevels[cardId] || 1;
      const nextLevel = isKnown ? Math.min(4, currentLevel + 1) : 1;
      return {
        ...prev,
        points: prev.points + (isKnown ? 5 : 1),
        flashcardLevels: {
          ...prev.flashcardLevels,
          [cardId]: nextLevel,
        },
      };
    });
  };

  const handleClearAllErrors = () => {
    setStats((prev) => ({
      ...prev,
      mistakeIds: [],
    }));
  };

  const handleResetConfirm = () => {
    const freshStats = resetAllProgress();
    setStats(freshStats);
    setShowResetModal(false);
    setCurrentTab('inicio');
  };

  const handleNavigate = (tab: NavTab, topicId?: TopicId) => {
    if (topicId) setTargetTopicId(topicId);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased font-sans">
      {/* Top Header */}
      <Header
        stats={stats}
        onUpdateSpeechRate={handleUpdateSpeechRate}
        onResetProgress={() => setShowResetModal(true)}
        onGoHome={() => handleNavigate('inicio')}
      />

      {/* Main Mode Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setTargetTopicId(undefined);
          setCurrentTab(tab);
        }}
        pendingMistakesCount={stats.mistakeIds.length}
      />

      {/* Main View Router */}
      <main className="flex-1 pb-16">
        {currentTab === 'inicio' && (
          <HomeDashboard stats={stats} onNavigate={handleNavigate} />
        )}

        {currentTab === 'teoria' && (
          <TheoryView
            stats={stats}
            initialTopicId={targetTopicId}
            onRecordQuestion={handleRecordQuestion}
            onNavigateToPractice={(tId) => handleNavigate('practica', tId)}
          />
        )}

        {currentTab === 'memoriza' && (
          <FlashcardsView
            stats={stats}
            onUpdateFlashcardMastery={handleUpdateFlashcardMastery}
          />
        )}

        {currentTab === 'practica' && (
          <PracticeView
            stats={stats}
            initialTopicId={targetTopicId}
            onRecordQuestion={handleRecordQuestion}
          />
        )}

        {currentTab === 'oraciones' && (
          <SentenceParserView stats={stats} />
        )}

        {currentTab === 'errores' && (
          <FindErrorView stats={stats} />
        )}

        {currentTab === 'textos' && (
          <TextAnalysisView stats={stats} />
        )}

        {currentTab === 'desafio' && (
          <MixedChallengeView
            stats={stats}
            onRecordQuestion={handleRecordQuestion}
          />
        )}

        {currentTab === 'repaso' && (
          <ErrorReviewView
            stats={stats}
            onRecordQuestion={handleRecordQuestion}
            onClearAllErrors={handleClearAllErrors}
          />
        )}

        {currentTab === 'simulacro' && (
          <ExamSimulacroView
            stats={stats}
            onSaveExamAttempt={handleSaveExamAttempt}
            onRecordQuestion={handleRecordQuestion}
          />
        )}
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>¡Preparado para el Examen! · Lengua Castellana y Literatura (1.º de ESO)</span>
          <span className="font-armenian text-amber-900/80">
            Յուրաքանչյուր նախադասություն ունի հայերեն թարգմանություն
          </span>
        </div>
      </footer>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              ¿Reiniciar todo el progreso?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Esto borrará tus puntos acumulados, tu racha y tu historial de exámenes guardados en este navegador.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleResetConfirm}
                className="px-4 py-2 rounded-lg bg-rose-600 text-white text-xs font-bold hover:bg-rose-700"
              >
                Sí, reiniciar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
