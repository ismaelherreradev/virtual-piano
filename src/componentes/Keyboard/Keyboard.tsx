import { selectKey } from '../../domain/keyboard'
import { MidiValue, notes } from '../../domain/note'
import { Key } from '../Key'
import s from './Keyboard.module.css'

export type KeyboardProps = {
  loading: boolean
  play: (note: MidiValue) => Promise<void>
  stop: (note: MidiValue) => Promise<void>
}

export const Keyboard = ({ loading, play, stop }: KeyboardProps) => {
  return (
    <div className={s.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index)
        return (
          <Key
            key={midi}
            type={type}
            label={label}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => play(midi)}
          />
        )
      })}
    </div>
  )
}
