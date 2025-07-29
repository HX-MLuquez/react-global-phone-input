import { create } from 'zustand';

export const useCountryStore = create((set) => ({
  selectedCountry: { code: 'AR', name: 'Argentina', dialCode: '+54' },
  setCountry: (country) => set({ selectedCountry: country }),
}));
