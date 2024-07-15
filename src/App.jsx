import './App.module.scss';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';

function App() {
	return (
		<>
			<Header />
			<SpecialOffers />
			<AboutUs />
		</>
	);
}

export default App;
