import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { useStore, create } from "zustand";

type AuthStore = {
  accessToken: string | undefined;

  actions: {
    setAccessToken: (accessToken: string | undefined) => void;
    // init: () => void;
    clearTokens: () => void;
  };
};

const IS_SERVER = typeof window === "undefined";

export const authStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        accessToken: undefined,
        accessTokenData: undefined,

        actions: {
          setAccessToken: (accessToken: string | undefined) => {
            set({
              accessToken,
            });
          },
          clearTokens: () =>
            set({
              accessToken: undefined,
            }),
        },
      }),
      {
        name: "auth-store",
        // cannot use session storage? why?
        storage: IS_SERVER ? createJSONStorage(() => localStorage) : undefined,
        skipHydration: IS_SERVER,
      }
    ),
    {
      name: "auth",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);

/**
 * Required for zustand stores, as the lib doesn't expose this type
 */
export type ExtractState<S> = S extends {
  getState: () => infer T;
}
  ? T
  : never;

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>;

// // Selectors
const accessTokenSelector = (state: any) => state.accessToken;
// const accessTokenDataSelector = (state: ExtractState<typeof authStore>) =>
//   state.accessTokenData;
const actionsSelector = (state: any) => state.actions;

// // getters
export const getAccessToken = () => accessTokenSelector(authStore.getState());
// export const getAccessTokenData = () =>
//   accessTokenDataSelector(authStore.getState());
// export const getRefreshToken = () => refreshTokenSelector(authStore.getState());
export const getActions = () => actionsSelector(authStore.getState());

function useAuthStore<U>(selector: (state: AuthStore) => U) {
  return useStore(authStore, selector);
}

// // Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector);
// export const useAccessTokenData = () => useAuthStore(accessTokenDataSelector);
// export const useActions = () => useAuthStore(actionsSelector);
