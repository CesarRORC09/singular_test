import { useFormViewModel } from "../viewModel/useFormViewModel"

const From = () => {

   const {
    setinput, 
    value, 
    submit
    } = useFormViewModel();
   
  return (
    <div className="form">
        <h2>Enter a value for "n"</h2>
       <div className="form-container">
          <div className="input">
            <input 
              placeholder="n"
              className="text-field"  
              type="text" 
              name="n" 
              inputMode="numeric" 
              value={value} 
              pattern="(?:0|[1-9]\d*)" 
              onChange={setinput}/>
          </div>
          <button className="button" onClick={submit}>
              <label>Calculate</label>
          </button>
       </div>
    </div>
  )
}

export default From