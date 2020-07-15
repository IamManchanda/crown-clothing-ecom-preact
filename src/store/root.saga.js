import { all, call } from "redux-saga/effects";
import shopSagas from "./shop/shop.sagas";
import userSagas from "./user/user.sagas";
import cartSagas from "./cart/cart.sagas";
import browserSagas from "./browser/browser.sagas";

export default function* rootSaga() {
  yield all([
    call(browserSagas),
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
  ]);
}
