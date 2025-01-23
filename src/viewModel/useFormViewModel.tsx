import { SequencesCalculator } from "../model/SequencesCalculator";
import { useSequenceContext } from "../context/SequencesContext";

const sequencesCalculator = new SequencesCalculator();

export const useFormViewModel = () => {

    const {result,setResult,setValue,value} = useSequenceContext();

   const setinput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        if(/(?:0|[1-9]\d*)/.test(target.value) || target.value === '') return setValue(target.value)
    }


   const submit = () => {
    setResult(sequencesCalculator.calculate(Number(value)));
   }

  return {
      value,
      result,
      submit,
      setinput,
    
  }
}
