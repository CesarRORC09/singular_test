import { SequencesCalculator } from "../model/SequencesCalculator";
import { useSequenceContext } from "../context/SequencesContext";

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

   const setinput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        if(/(?:0|[1-9]\d*)/.test(target.value) || target.value === '') return setValue(target.value)
    }


   const submit = () => {
    const parsedValue = Number(value);
    if(isNaN(parsedValue)) return setError('Solo se aceptan valores numericos');
    if(parsedValue < 0) return setError('Solo se aceptan valores positivos');
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
