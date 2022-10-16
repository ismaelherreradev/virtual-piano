import { Main } from './componentes/Main'

import s from './App.module.css'

export function App() {
  return (
    <div className={s.app}>
      <main className={s.content}>
        <Main />
      </main>
    </div>
  )
}
