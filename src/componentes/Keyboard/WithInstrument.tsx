import { SoundfontProvider } from '../../adapters/Soundfont'
import { useInstrument } from '../../state/Instrument'
import { useAudioContext } from '../AudioContextProvider'
import { Keyboard } from './Keyboard'

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!
  const { instrument } = useInstrument()

  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  )
}
