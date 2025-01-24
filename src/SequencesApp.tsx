
import './App.css'
import { SequencesProvider } from './context/SequencesContext'
import SequencesScreen from './screens/SequencesScreen'

function SequencesApp() {

  return (
      <div className='main'>
        <SequencesProvider>
            <SequencesScreen/>
        </SequencesProvider>
      </div>
  )
}

export default SequencesApp
