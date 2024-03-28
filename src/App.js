import './App.css';
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';
import Companies from './companies/Companies';
import Search from './search/Search';
import Service from './service/Service';
import Community from './community/Community';
import Testimonials from './testimonials/Testimonials';
import Subscribe from './subscribe/Subscribe';
import Footer from './footer/Footer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Companies></Companies>
    <Search></Search>
    <Service></Service>
    <Community></Community>
    <Testimonials></Testimonials>
    <Subscribe></Subscribe>
    <Footer></Footer>
    </>
  );
}

export default App;
