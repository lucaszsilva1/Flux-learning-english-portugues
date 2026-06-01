import type { Word, VocabUserData } from './types'

export function filterWords(words: Word[], query: string, category: string): Word[] {
  let result = words
  if (category) result = result.filter(w => w.category === category)
  if (query) {
    const q = query.toLowerCase()
    result = result.filter(w =>
      w.word.toLowerCase().includes(q) || w.translation.toLowerCase().includes(q)
    )
  }
  return result
}

export function getCategories(words: Word[]): string[] {
  return [...new Set(words.map(w => w.category))].sort()
}

export function getQuizOptions(correct: Word, allWords: Word[]): string[] {
  let pool = allWords.filter(w => w.id !== correct.id && w.pos === correct.pos)
  if (pool.length < 3) pool = allWords.filter(w => w.id !== correct.id)
  const distractors = shuffle(pool).slice(0, 3).map(w => w.translation)
  return shuffle([correct.translation, ...distractors])
}

export function countByStatus(userData: VocabUserData, total: number) {
  let known = 0, learning = 0
  for (const prog of Object.values(userData.words)) {
    if (prog.status === 'known') known++
    else if (prog.status === 'learning') learning++
  }
  return { known, learning, fresh: total - known - learning }
}

export function countDueToday(words: Word[], userData: VocabUserData): number {
  const today = new Date().toISOString().split('T')[0]
  return words.filter(w => {
    const prog = userData.words[w.id]
    if (!prog || prog.status === 'new') return true
    if (!prog.next_review) return true
    return prog.next_review <= today
  }).length
}

export function getLastQuizScore(userData: VocabUserData) {
  const history = userData.quiz_history
  return history.length > 0 ? history[history.length - 1] : null
}

export function pickQuizWords(words: Word[], userData: VocabUserData, count = 10): Word[] {
  const pool = words.filter(w => {
    const prog = userData.words[w.id]
    return !prog || prog.status !== 'known'
  })
  const source = pool.length >= count ? pool : words
  return shuffle(source).slice(0, count)
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}
