
import './App.css'
import { SequencesProvider } from './context/SequencesContext'
import SequencesScreen from './screens/SequencesScreen'

function SequencesApp() {

  return (
    <SequencesProvider>
      <SequencesScreen/>
    </SequencesProvider>
  )
}

export default SequencesApp
