import { all, call } from "redux-saga/effects";
import userSagas from "./user/user.sagas";
import browserSagas from "./browser/browser.sagas";
import directorySagas from "./directory/directory.sagas";
import shopSagas from "./shop/shop.sagas";
import cartSagas from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(browserSagas),
    call(directorySagas),
    call(shopSagas),
    call(cartSagas),
  ]);
}
