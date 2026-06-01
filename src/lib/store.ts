import { writable, derived } from 'svelte/store'
import type { UserData } from './types'
import { calculateStreak, getAvailableDays, TOTAL_LESSONS } from './utils'

const STORAGE_KEY = 'flux_userdata'

function loadUserData(): UserData {
  if (typeof localStorage === 'undefined') return { start_date: new Date().toISOString() }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  const fresh: UserData = { start_date: new Date().toISOString() }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh))
  return fresh
}

function createUserDataStore() {
  const { subscribe, set, update } = writable<UserData>(loadUserData())

  return {
    subscribe,
    set(data: UserData) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      }
      set(data)
    },
    update(fn: (data: UserData) => UserData) {
      update(data => {
        const next = fn(data)
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        }
        return next
      })
    },
    setField(key: string, value: UserData[string]) {
      update(data => {
        const next = { ...data, [key]: value }
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        }
        return next
      })
    }
  }
}

export const userdata = createUserDataStore()

export const streak = derived(userdata, $ud => calculateStreak($ud))

export const currentDay = derived(userdata, $ud => getAvailableDays($ud.start_date))

export const sidebarCollapsed = writable(false)
export const mobileMenuOpen = writable(false)
