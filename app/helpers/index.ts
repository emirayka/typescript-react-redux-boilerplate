export type Fail = (message: string) => never
export const fail: Fail = (message) => {
  throw new Error(message)
}
