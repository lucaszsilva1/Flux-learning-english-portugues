import type { UserData } from './types'

export const TOTAL_LESSONS = 84

export function getAvailableDays(_startDate: string): number {
  return TOTAL_LESSONS
}

export function isUnlocked(id: number, startDate: string): boolean {
  return id <= getAvailableDays(startDate)
}

export function calculateStreak(userData: UserData): number {
  let streak = 0
  const today = new Date()
  for (let i = 1; ; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() - (i - 1))
    const dateStr = date.toISOString().split('T')[0]
    const practiced = Object.keys(userData)
      .filter(k => k.endsWith('_practiced_at'))
      .some(k => userData[k]?.toString().startsWith(dateStr))
    if (!practiced) break
    streak++
  }
  return streak
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export function scrollToLesson(id: number): void {
  const el = document.getElementById(`dia-${id}`)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
