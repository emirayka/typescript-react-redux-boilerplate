import {all} from "redux-saga/effects";
import {watchCounter} from '@/store/features/counters/sagas'

export default function* () {
  yield all([
    watchCounter(),
  ])
}
