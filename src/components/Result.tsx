import { useFormViewModel } from "../viewModel/useFormViewModel"

const Result = () => {

    const {result, error} = useFormViewModel();
    
  return (
    <div>
        <h2>{result}</h2>
       {error !== '' && <p>{error}</p>}
    </div>
  )
}

export default Result