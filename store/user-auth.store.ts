"use client";

import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { useStore, create } from "zustand";

type AuthStore = {
  accessToken: string | undefined;

  actions: {
    setAccessToken: (accessToken: string | undefined) => void;
    init: () => void;
    clearTokens: () => void;
  };
};

const isServer = typeof window === "undefined";

const authStore = create<AuthStore>()(
  devtools(
    persist(
      (set, _get) => ({
        accessToken: undefined,
        accessTokenData: undefined,

        actions: {
          init: () => {
            const accessToken = isServer
              ? undefined
              : sessionStorage.getItem("accessToken");
            set({
              accessToken,
            });
          },
          setAccessToken: (accessToken: string | undefined) => {
            set({
              accessToken,
            });
          },
          clearTokens: () => {
            set({
              accessToken: undefined,
            });
          },
        },
      }),
      {
        name: "auth-store",
        storage: createJSONStorage(() => sessionStorage),
        skipHydration: true,
      }
    ),
    {
      name: "auth",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);

authStore.getState().actions.init();

/**
 * Required for zustand stores, as the lib doesn't expose this type
 */
export type ExtractState<S> = S extends {
  getState: () => infer T;
}
  ? T
  : never;

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>;

// Selectors
const accessTokenSelector = (state: ExtractState<typeof authStore>) =>
  state.accessToken;
const actionsSelector = (state: ExtractState<typeof authStore>) =>
  state.actions;

console.log(authStore.getState());
// getters
export const getAccessToken = () => accessTokenSelector(authStore.getState());
export const getActions = () => actionsSelector(authStore.getState());

function useAuthStore<U>(selector: (state: AuthStore) => U) {
  return authStore(selector);
}

// Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector);
export const useActions = () => useAuthStore(actionsSelector);
