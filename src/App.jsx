import './App.module.scss';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import OurAdvantages from './components/OurAdvantages/OurAdvantages';
import OurOffer from './components/OurOffer/OurOffer';
import OurStatistics from './components/OurStatistics/OurStatistics';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';

function App() {
	return (
		<>
			<Header />
			<SpecialOffers />
			<AboutUs />
			<OurAdvantages />
			<OurOffer />
			<OurStatistics />
		</>
	);
}

export default App;
