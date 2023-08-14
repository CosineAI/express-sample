import { Configuration, OpenAIApi } from "openai"
import "dotenv/config"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

/**
 * OpenAI API Client
 */
export const openai = new OpenAIApi(configuration)

/**
 * OpenAI API Embeddings models
 */
export enum EmbeddingsModel {
  ADA = "text-embedding-ada-002",
}

/** 
 * Calculate the cosine similarity between two vectors
 * @param {number[]} a - Vector A
 * @param {number[]} b - Vector B
 * @returns {number} Cosine similarity
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) throw new Error("Vectors must be of the same dimension")
  let dotProd = 0
  let magA = 0
  let magB = 0
  for (let i = 0; i < a.length; i++) {
      dotProd += a[i] * b[i]
      magA += a[i] * a[i]
      magB += b[i] * b[i]
  }
  magA = Math.sqrt(magA)
  magB = Math.sqrt(magB)
  if (magA === 0 || magB === 0) throw new Error("Magnitude of one or both vectors is zero")
  return dotProd / (magA * magB)
}
