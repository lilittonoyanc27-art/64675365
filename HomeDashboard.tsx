import React from 'react';
import {
  BookOpen,
  Brain,
  Target,
  Award,
  Layers,
  Search,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { UserStats, TopicId } from './types.ts';
import { TOPICS_DATA } from './dataTopics.ts';
import { NavTab } from './Navbar.tsx';

interface HomeDashboardProps {
  stats: UserStats;
  onNavigate: (tab: NavTab, targetTopicId?: TopicId) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  stats,
  onNavigate,
}) => {
  // Compute global stats
  const totalTopics = TOPICS_DATA.length;
  let masteredTopicsCount = 0;
  let totalPracticeQuestions = 0;
  let totalPracticeCorrect = 0;

  TOPICS_DATA.forEach((topic) => {
    const topicStat = stats.topicMastery[topic.id];
    if (topicStat) {
      totalPracticeQuestions += topicStat.practiceTotal;
      totalPracticeCorrect += topicStat.practiceCorrect;
      if (
        topicStat.practiceTotal >= 8 &&
        topicStat.practiceCorrect / topicStat.practiceTotal >= 0.8
      ) {
        masteredTopicsCount++;
      }
    }
  });

  const accuracyPercent =
    totalPracticeQuestions > 0
      ? Math.round((totalPracticeCorrect / totalPracticeQuestions) * 100)
      : 0;

  // Readiness evaluation for 1.º de ESO
  let readinessLevel = 'Iniciando preparación';
  let readinessColor = 'text-slate-600';
  if (masteredTopicsCount >= 8 || stats.savedExams.some((e) => e.percentage >= 85)) {
    readinessLevel = '¡Excelente! Listo para Sobresaliente';
    readinessColor = 'text-emerald-700';
  } else if (masteredTopicsCount >= 5 || stats.savedExams.some((e) => e.percentage >= 70)) {
    readinessLevel = 'Buen nivel: Camino al Notable';
    readinessColor = 'text-teal-700';
  } else if (masteredTopicsCount >= 2) {
    readinessLevel = 'En progreso: Necesita más práctica';
    readinessColor = 'text-amber-700';
  }

  const latestExam = stats.savedExams.length > 0 ? stats.savedExams[0] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 text-white p-6 sm:p-10 shadow-lg border border-teal-700/40">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-teal-200 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Entrenador Personal · 1.º de ESO</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            ¡Hola! ¿Listo para aprender y aprobar tu examen?
          </h1>

          <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed">
            Domina las 10 funciones, categorías gramaticales, modalidades oracionales y figuras literarias
            con explicaciones claras, traducciones al armenio en cada frase y simulacros oficiales.
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('teoria')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors shadow-md hover:shadow-lg"
            >
              <BookOpen className="w-4 h-4" />
              <span>Continuar estudiando</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('simulacro')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20 backdrop-blur-xs"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Simulacro de examen</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI & Status Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
          <span className="text-xs font-medium text-slate-500 block mb-1">Nivel de preparación</span>
          <div className={`text-base sm:text-lg font-bold ${readinessColor} leading-tight`}>
            {readinessLevel}
          </div>
          <span className="text-[11px] text-slate-400 block mt-1">1.º de ESO · Lengua</span>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
          <span className="text-xs font-medium text-slate-500 block mb-1">Temas dominados</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
            {masteredTopicsCount} <span className="text-sm text-slate-400 font-normal">/ {totalTopics}</span>
          </div>
          <span className="text-[11px] text-slate-500 block mt-1">Con $\ge 80\%$ de acierto</span>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
          <span className="text-xs font-medium text-slate-500 block mb-1">Preguntas respondidas</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
            {totalPracticeQuestions}
          </div>
          <span className="text-[11px] text-teal-700 font-semibold block mt-1">
            {accuracyPercent}% de acierto global
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
          <span className="text-xs font-medium text-slate-500 block mb-1">Fallos pendientes</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 tabular-nums">
            {stats.mistakeIds.length}
          </div>
          <button
            type="button"
            onClick={() => onNavigate('repaso')}
            className="text-[11px] font-semibold text-rose-600 hover:text-rose-800 underline block mt-1"
          >
            Repasar en la clínica de errores →
          </button>
        </div>
      </div>

      {/* Latest Exam Result Callout if available */}
      {latestExam && (
        <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                Último Simulacro Realizado
              </span>
              <p className="text-sm text-slate-800 font-medium">
                Nota: <span className="font-bold text-amber-900">{latestExam.scoreOutOf10.toFixed(1)} / 10</span> ({latestExam.percentage}%) · Nivel: {latestExam.levelName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('simulacro')}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 transition-colors shrink-0"
          >
            Nuevo simulacro con otras preguntas
          </button>
        </div>
      )}

      {/* Learning Modules Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">Modos de Aprendizaje y Práctica</h2>
          <span className="text-xs text-slate-500">Selecciona una actividad para entrenar</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => onNavigate('teoria')}
            className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-teal-400 hover:shadow-md transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">
              Aprende la teoría
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Explicaciones paso a paso de los 10 temas de la libreta, con ejemplos y traducción al armenio en cada frase.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('memoriza')}
            className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-md transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-700 transition-colors">
              Memoriza con tarjetas
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Tarjetas de memoria (flashcards) para definiciones y conceptos. Modo normal e inverso para fijar el conocimiento.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('practica')}
            className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-teal-400 hover:shadow-md transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">
              Practica por temas
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Preguntas de test, verdadero/falso y análisis con respuestas aleatorias (Fisher-Yates) para no memorizar la letra.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('oraciones')}
            className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-md transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
              Analizador de oraciones
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Toca cada palabra para identificar sustantivos, verbos, adjetivos, determinantes y adverbios en frases reales.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('errores')}
            className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-md transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-700 transition-colors">
              Encuentra el error
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Detecta confusiones típicas de examen (metáfora vs comparación, romance vs soneto) y aprende a corregirlas.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('simulacro')}
            className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-rose-400 hover:shadow-md transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-rose-700 transition-colors">
              Simulacro oficial de examen
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Nivel Fácil (20), Intermedio (30), Difícil (40) y Examen Final. Nota sobre 10 e informe individual de repaso.
            </p>
          </button>
        </div>
      </div>

      {/* 10 Syllabus Topics List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">Los 10 Temas del Curso Oficial</h2>
          <span className="text-xs text-slate-500">1.º de ESO · Cuaderno escolar</span>
        </div>

        <div className="space-y-2.5">
          {TOPICS_DATA.map((topic) => {
            const topicStat = stats.topicMastery[topic.id] || {
              practiceCorrect: 0,
              practiceTotal: 0,
            };
            const topicAccuracy =
              topicStat.practiceTotal > 0
                ? Math.round((topicStat.practiceCorrect / topicStat.practiceTotal) * 100)
                : 0;

            return (
              <div
                key={topic.id}
                className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-teal-300 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {topic.number}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{topic.title.es}</h4>
                    <p className="text-xs font-armenian text-slate-500">{topic.title.hy}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-right text-xs">
                    <span className="font-semibold text-slate-700 tabular-nums">
                      {topicStat.practiceCorrect}/{topicStat.practiceTotal} correctas
                    </span>
                    <span className="text-slate-400 block text-[11px]">
                      {topicStat.practiceTotal > 0 ? `${topicAccuracy}% acierto` : 'Sin practicar'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate('teoria', topic.id)}
                    className="px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold transition-colors shrink-0"
                  >
                    Estudiar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
