import { useFormViewModel } from "../viewModel/useFormViewModel"

const From = () => {
   const {setinput, value, submit} = useFormViewModel();
  return (
    <div>
        <h2>Ingresa el valor de n</h2>
        <label>n:</label>
        <input type="text" name="n" inputMode="numeric" value={value} pattern="(?:0|[1-9]\d*)" onChange={setinput}/>

        <button onClick={submit}>
            <label>Calcular</label>
        </button>
    </div>
  )
}

export default From