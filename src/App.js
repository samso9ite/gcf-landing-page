import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/vendors/bootstrap/css/bootstrap.min.css'
import './assets/vendors/animate/animate.min.css'
import './assets/vendors/fontawesome/css/all.min.css'
import './assets/vendors/finlon-icons/style.css'
import './assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css'
import './assets/vendors/nouislider/nouislider.min.css'
import './assets/vendors/nouislider/nouislider.pips.css'
import './assets/vendors/odometer/odometer.min.css'
import './assets/vendors/swiper/swiper.min.css'
import './assets/css/finlon.css'


export default function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

