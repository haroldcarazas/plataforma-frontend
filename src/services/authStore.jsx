import { create } from 'zustand';

const authStore = create(set => ({
  user: null,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateUser: newUser => set({ user: newUser }),
}));

export default authStore;
