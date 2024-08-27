import { create } from 'zustand';

const authStore = create(set => ({
  authToken: localStorage.getItem('authToken') || null,
  user: null,
  videoURL: null,
  setToken: token => {
    localStorage.setItem('authToken', token);
    set({ authToken: token });
  },
  setUser: newUser => set({ user: newUser }),
  setVideoURL: newURL => set({ videoURL: newURL }),
}));

export default authStore;
