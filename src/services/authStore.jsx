import { create } from 'zustand';

const authStore = create(set => ({
  authToken: localStorage.getItem('authToken') || null,
  user: null,
  setToken: token => {
    localStorage.setItem('authToken', token);
    set({ authToken: token });
  },
  updateUser: newUser => set({ user: newUser }),
}));

export default authStore;
