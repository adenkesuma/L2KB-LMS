import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { create } from "zustand";

type UserAuthStore = {
  accessToken: string | undefined;

  setAccessToken: (accessToken: string | undefined) => void;
  clearTokens: () => void;
};

export const userAuthStore = create<UserAuthStore>()(
  devtools(
    persist(
      (set, _get) => ({
        accessToken: undefined,
        accessTokenData: undefined,

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
      }),
      {
        name: "auth-store",
        storage: createJSONStorage(() => sessionStorage),
        // skipHydration: true,
        onRehydrateStorage: (state) => {
          // console.log("hydration starts");

          // optional
          return (state, error) => {
            if (error) {
              // console.log("an error happened during hydration", error);
            } else {
              // console.log("hydration finished");
            }
          };
        },
      }
    ),
    {
      name: "auth",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);
