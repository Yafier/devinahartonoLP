'use client';

import { createContext } from 'react';

export const MyContext = createContext({});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MyContext.Provider value={{}}>
      {children}
    </MyContext.Provider>
  );
} 