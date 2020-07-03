import { RootState } from "../types"

type SelectCounter = (state: RootState) => number
export const selectCounter: SelectCounter = (state) => state.counters.counter