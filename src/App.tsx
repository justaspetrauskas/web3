import ClickCounter from './ClickCounter'
import Logo from '../src/assets/logo.png'

export const App = () => {
  //  s const num = 'justas'
  return (
    <div>
      <h1>React</h1>
      <img src={Logo} alt="logo" />
      <ClickCounter />
    </div>
  )
}
