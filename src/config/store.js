import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// provider gerekiyor çünkü bütün componentlerin çevresinde tek bir component oluşturmamız gerekli. Bunu yapmamızdaki amaç ise ;
// provider içindeki diger componetler bu store u kullanacağını bilsin.
