import './App.module.scss';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import OurAdvantages from './components/OurAdvantages/OurAdvantages';
import OurOffer from './components/OurOffer/OurOffer';
import OurStatistics from './components/OurStatistics/OurStatistics';
import PopularTours from './components/PopularTours/PopularTours';
import SchemeOfWork from './components/SchemeOfWork/SchemeOfWork';
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
			<PopularTours />
			<SchemeOfWork />
			<Gallery />
			<Feedbacks />
			<Contacts />
		</>
	);
}

export default App;
