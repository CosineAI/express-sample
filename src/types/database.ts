import { Prompt } from "./prompt"

/**
 * Database interface
 * @interface Database
 * @property {Prompt} data - Database data
 * @property {Function} create - Create a prompt
 * @property {Function} query - Query a prompt
 */
export interface Database {
  data: Prompt[]
  create: (prompt: string, vector: number[]) => void
  query: (vector: number[]) => Promise<Prompt | undefined>
}
