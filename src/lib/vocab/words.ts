import type { Word } from './types'
import { words as batch1 } from './words/batch_1_100'

export const words: Word[] = [...batch1]

export const TOTAL_WORDS = words.length
