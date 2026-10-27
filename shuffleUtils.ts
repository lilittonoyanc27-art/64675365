/**
 * Utility functions for randomizing tests and questions
 * Uses the Fisher-Yates (Knuth) shuffle algorithm to guarantee uniform distribution.
 */

export function shuffleArray<T>(array: readonly T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Shuffles the options of questions so that the correct answer is not on a fixed position,
 * while retaining the reference to which option ID is correct.
 */
export function randomizeQuestions<T extends { options?: Array<{ id: string; text: any }>; [key: string]: any }>(
  questions: readonly T[],
  limit?: number
): T[] {
  const shuffledQuestions = shuffleArray(questions);
  const selected = limit ? shuffledQuestions.slice(0, limit) : shuffledQuestions;

  return selected.map((q) => {
    if (!q.options || q.options.length === 0) {
      return { ...q };
    }
    return {
      ...q,
      options: shuffleArray(q.options),
    };
  });
}
