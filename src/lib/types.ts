export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export interface Lesson {
  id: number
  level: CefrLevel
  module: number
  moduleTitle: string
  structure: string
  translation: string
  explanation: string
  why_it_matters: string
  pronunciation: string
  stress_tip: string
  pattern: string
  breakdown: { piece: string; role: string }[]
  core_vocabulary: { word: string; translation: string; example: string }[]
  examples: {
    work:   { en: string; pt: string }
    travel: { en: string; pt: string }
    study:  { en: string; pt: string }
  }
  variations:      { form: string; note: string }[]
  combinations:    { phrase: string; meaning: string }[]
  collocations:    string[]
  common_mistakes: { wrong: string; right: string; tip: string }[]
  retrieval_context:   string
  retrieval_prompt:    string
  retrieval_reference: string
  drills: { instruction: string; input: string; answer: string }[]
  connects_to: number[]
  review_of:   string
  daily_resources: DailyResources
}

export interface DailyResources {
  ted:     { title: string; url: string; tip: string }
  podcast: { title: string; url: string; tip: string }
  onelook_word:    string
  anki_card:       { front: string; back: string }
  speaking_prompt: string
  game?: { label: string; url: string }
}

export interface UserData {
  start_date: string
  [key: string]: string | boolean | Record<number, string> | Record<number, boolean>
}
