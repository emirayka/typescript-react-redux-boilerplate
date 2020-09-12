import { all, put, takeEvery } from 'redux-saga/effects'
import {INCREMENT_ASYNC} from '@/store/features/counters/constants'
import {rootActions} from '@/store'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
  yield delay(1000)
  yield put(rootActions.counters.increment())
}

function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

export function* watchCounter() {
  yield all([
    watchIncrementAsync()
  ])
}
