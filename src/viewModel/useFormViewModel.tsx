import { SequencesCalculator } from "../model/SequencesCalculator";
import { useSequenceContext } from "../context/SequencesContext";
import { useEffect } from "react";

const sequencesCalculator = new SequencesCalculator();

export const useFormViewModel = () => {

    const {
        result,
        value,
        error,
        setResult,
        setValue,
        setError,
    } = useSequenceContext();

    useEffect(() => {
        const timer = setTimeout(() => {
          if (error !== '') setError('');
        }, 2000);
    
        return () => {
          clearTimeout(timer);
        };
      }, [error]);

   const setinput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        if(/(?:0|[1-9]\d*)/.test(target.value) || target.value === '') return setValue(target.value)
    }


   const submit = () => {
    if(value==='') return  setError('Enter a value please');
    const parsedValue = Number(value);
    if(isNaN(parsedValue)) return setError('Only numbers are allowed');
    if(parsedValue < 0) return setError('Only positive numbers are allowed');
    setResult(sequencesCalculator.calculate(Number(value)));
   }

  return {
      value,
      result,
      error,
      submit,
      setinput,
  }
}
