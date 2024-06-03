'use client'

import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';


type Post = {
  id: number;
  title: string;
  content: string;

};

type GlobalContextType = {
  post: Post[];
  setPost: Dispatch<SetStateAction<Post[]>>;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  const [post, setPost] = useState<Post[]>([]);

  return (
    <GlobalContext.Provider value={{ post, setPost }}>
      {children}
    </GlobalContext.Provider>
  );
}
