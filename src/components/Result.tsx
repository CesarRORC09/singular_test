import { useFormViewModel } from "../viewModel/useFormViewModel"

const Result = () => {

    const {result, error} = useFormViewModel();
    
  return (
    <div className="result">
        <h2>Result: {result}</h2>
       {error !== '' && <p>{error}</p>}
    </div>
  )
}

export default Result