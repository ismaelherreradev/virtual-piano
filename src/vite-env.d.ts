/// <reference types="vite/client" />

type SoundfontType = typeof Soundfont
type AudioContextType = typeof AudioContext

interface Window extends Window {
  webkitAudioContext: AudioContextType
}
