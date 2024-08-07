import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type State = {
  welcome: boolean;
};

type Action = {
  showWelcome: () => void;
  hideWelcome: () => void;
};

const useWelcomeStore = create<State & Action>()(
  persist(
    (set) => ({
      welcome: true,
      showWelcome: () => set(() => ({ welcome: true })),
      hideWelcome: () => set(() => ({ welcome: false })),
    }),
    {
      name: "@Tasks:welcome-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useWelcomeStore;
