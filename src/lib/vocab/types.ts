export interface Word {
  id: number
  word: string
  translation: string
  pos: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'pronoun' | 'other'
  category: string
  example: string
  example_pt: string
  frequency_rank: number
  pronunciation?: string
}

export interface WordProgress {
  status: 'new' | 'learning' | 'known'
  next_review: string | null
  reviews: number
  correct: number
}

export interface VocabUserData {
  words: Record<number, WordProgress>
  streak: number
  last_studied: string | null
  quiz_history: { date: string; score: number; total: number }[]
}
