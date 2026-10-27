/**
 * Speech synthesis utility for European Spanish (es-ES)
 */

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

let cachedVoice: SpeechSynthesisVoice | null = null;

function getSpanishVoice(): SpeechSynthesisVoice | null {
  if (!isSpeechSupported()) return null;
  if (cachedVoice) return cachedVoice;

  const voices = window.speechSynthesis.getVoices();
  // Look for es-ES first, then any Spanish voice
  const esEsVoice = voices.find((v) => v.lang === 'es-ES' || v.lang === 'es_ES');
  if (esEsVoice) {
    cachedVoice = esEsVoice;
    return esEsVoice;
  }

  const anyEsVoice = voices.find((v) => v.lang.startsWith('es'));
  if (anyEsVoice) {
    cachedVoice = anyEsVoice;
    return anyEsVoice;
  }

  return null;
}

if (isSpeechSupported()) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = null;
    getSpanishVoice();
  };
}

export function speakSpanish(text: string, rate: number = 1.0, onEnd?: () => void): void {
  if (!isSpeechSupported()) return;

  try {
    window.speechSynthesis.cancel(); // Stop any currently playing audio

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = Math.max(0.6, Math.min(1.5, rate));

    const voice = getSpanishVoice();
    if (voice) {
      utterance.voice = voice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = () => onEnd();
    }

    window.speechSynthesis.speak(utterance);
  } catch {
    // Graceful fallback if speech synthesis is blocked by browser policy
  }
}

export function stopSpeaking(): void {
  if (!isSpeechSupported()) return;
  try {
    window.speechSynthesis.cancel();
  } catch {
    // Ignore
  }
}
