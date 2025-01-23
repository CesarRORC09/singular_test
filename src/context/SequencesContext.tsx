import React, { createContext, ReactNode, useContext, useState } from 'react'

interface SequenceContextType {
    value: string; 
    result: number; 
    setValue: (value: string) => void; 
    setResult: (result: number) => void; 
  }

 const SequenceContext = createContext<SequenceContextType | null>(null);

const SequencesProvider:  React.FC<{ children: ReactNode }> = ({children}) => {
    const [value, setValue] = useState<string>(''); 
    const [result, setResult] = useState<number>(0); 

  return (
    <SequenceContext.Provider value={{ value, result, setValue, setResult }}>
      {children}
    </SequenceContext.Provider>
  );
}

const useSequenceContext = () => {
    const context = useContext(SequenceContext);

    if (!context) {
      throw new Error("useFormContext debe ser usado dentro de un FormProvider");
    }
  
    return context;
}

export { SequencesProvider, useSequenceContext}
