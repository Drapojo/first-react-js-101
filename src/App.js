import './App.css';
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer';
function App() {
  return (
  <div className="App">
    {/* [location]-[position]-[objective]-[type] container */}
    <div className="Main-box">
      <Header />
      <Body/>
    </div>
    <Footer/>  
  </div>
  );
}
export default App;
