import './App.module.scss';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import OurAdvantages from './components/OurAdvantages/OurAdvantages';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';

function App() {
	return (
		<>
			<Header />
			<SpecialOffers />
			<AboutUs />
			<OurAdvantages />
		</>
	);
}

export default App;
