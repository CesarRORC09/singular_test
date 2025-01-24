import From from "../components/From"
import Result from "../components/Result"

const SequencesScreen = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Sequences calculator</h1>
        <h4>This app will calculate the following operation:</h4>
        <img src="series_calc.png" className="image-sequence"/>
      </div>
      <From/>
      <Result/>
    </div>
  )
}

export default SequencesScreen