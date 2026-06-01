import type { Word, VocabUserData } from './types'

const SESSION_SIZE = 20

export function getSessionCards(words: Word[], userData: VocabUserData): Word[] {
  const today = new Date().toISOString().split('T')[0]

  const due = words.filter(w => {
    const prog = userData.words[w.id]
    if (!prog || prog.status === 'new') return true
    if (!prog.next_review) return true
    return prog.next_review <= today
  })

  const learning = due.filter(w => userData.words[w.id]?.status === 'learning')
  const fresh    = due.filter(w => !userData.words[w.id] || userData.words[w.id].status === 'new')
  const known    = due.filter(w => userData.words[w.id]?.status === 'known')

  return shuffle([...learning, ...fresh, ...known]).slice(0, SESSION_SIZE)
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}
