import { create } from "zustand";

interface ITriggerStore {
    isSidebarOpen: boolean;
    setIsSidebarOpen: () => void;
};

const useTrigger = create<ITriggerStore>((set) => ({
    isSidebarOpen: false,
    setIsSidebarOpen: () => {
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
    },
}));


export default useTrigger;