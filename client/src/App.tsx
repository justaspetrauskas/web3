import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import Services from './components/Services/Services'
import Transactions from './components/Transactions/Transactions'
import Footer from './components/Footer/Footer'

import './style.css'

export const App = () => {
  //  s const num = 'justas'
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}
