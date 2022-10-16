import { NoAudioMessage } from '../NoAudioMessage'
import { useAudioContext } from '../AudioContextProvider'
import { Playground } from '../Playground'

export const Main = () => {
  const AudioContext = useAudioContext()
  return !!AudioContext ? <Playground /> : <NoAudioMessage />
}
