import { useFormViewModel } from "../viewModel/useFormViewModel"

const Result = () => {

    const {result} = useFormViewModel()
  return (
    <div>
        <h2>{result}</h2>
    </div>
  )
}

export default Result