import { eq } from "drizzle-orm"
import { db } from "../../db"
import { notes } from "../../db/schema"



let nextId = 4

export const getNotes = () => {
  return notes
}

export const getNoteById = (id: number) => {
  return notes.find((note) => note.id === id)
}

export const addNote = (content: string, important: boolean) => {
  notes.push({ id: nextId++, content, important })
}

export const toggleImportance = (id: number) => {
  const note = notes.find((note) => note.id === id)
  if (note) {
    note.important = !note.important
  }
}