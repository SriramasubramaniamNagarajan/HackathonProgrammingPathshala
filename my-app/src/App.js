import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FindTheService from './components/FindTheService'
import DisabilityInfo from './components/DisabilityInfo'
import EssentialDocs from './components/EssentialDocs'
import Resources from './components/Resources'
import NeedAssistance from './components/NeedAssistance'
import RightAndEntitlement from './components/RightAndEntitlement'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/find-the-service" element={<FindTheService/>} />
        <Route path="/disability-info" element={<DisabilityInfo/>} />
        <Route path="/essential-docs" element={<EssentialDocs/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/right-and-entitlement" element={<RightAndEntitlement/>} />
      </Routes>
      <NeedAssistance/>
    </div>
  );
}

export default App;