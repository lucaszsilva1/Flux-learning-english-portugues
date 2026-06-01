import { writable } from 'svelte/store'
import type { VocabUserData } from './types'

const STORAGE_KEY = 'vocab_userdata'

function defaultData(): VocabUserData {
  return { words: {}, streak: 0, last_studied: null, quiz_history: [] }
}

function load(): VocabUserData {
  if (typeof localStorage === 'undefined') return defaultData()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : defaultData()
  } catch { return defaultData() }
}

function save(data: VocabUserData) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }
}

function todayISO() {
  return new Date().toISOString().split('T')[0]
}

function addDays(n: number) {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}

function calcStreak(data: VocabUserData): number {
  if (!data.last_studied) return 1
  const diff = Math.floor(
    (Date.now() - new Date(data.last_studied).getTime()) / 86400000
  )
  if (diff > 1) return 1
  if (diff === 0) return data.streak || 1
  return (data.streak || 0) + 1
}

function createVocabStore() {
  const { subscribe, update } = writable<VocabUserData>(load())

  return {
    subscribe,
    markKnown(wordId: number) {
      update(data => {
        const prev = data.words[wordId]
        const next = {
          ...data,
          words: {
            ...data.words,
            [wordId]: {
              status: 'known' as const,
              next_review: addDays(7),
              reviews: (prev?.reviews ?? 0) + 1,
              correct: (prev?.correct ?? 0) + 1
            }
          }
        }
        save(next)
        return next
      })
    },
    markLearning(wordId: number) {
      update(data => {
        const prev = data.words[wordId]
        const next = {
          ...data,
          words: {
            ...data.words,
            [wordId]: {
              status: 'learning' as const,
              next_review: addDays(1),
              reviews: (prev?.reviews ?? 0) + 1,
              correct: prev?.correct ?? 0
            }
          }
        }
        save(next)
        return next
      })
    },
    recordQuiz(score: number, total: number) {
      update(data => {
        const next = {
          ...data,
          quiz_history: [...data.quiz_history, { date: todayISO(), score, total }],
          last_studied: todayISO(),
          streak: calcStreak(data)
        }
        save(next)
        return next
      })
    },
    updateStreak() {
      update(data => {
        const next = { ...data, last_studied: todayISO(), streak: calcStreak(data) }
        save(next)
        return next
      })
    }
  }
}

export const vocabStore = createVocabStore()
