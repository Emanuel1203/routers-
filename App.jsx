import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import {HomeView} from "./views/HomeView";
import {FilmsView} from "./views/FilmsView";
import {LocationsView} from "./views/LocationsView";
import {PeopleView} from "./views/PeopleView";
import {SpeciesView} from "./views/SpeciesView";
import {VehiclesView} from "./views/VehiclesView";

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Navlink to="/">Home</Navlink>
                    </li>
                    <li>
                        <Navlink to="films">films</Navlink>
                    </li>
                    <li>
                        <Navlink to="people">people</Navlink>
                    </li>
                    <li>
                        <Navlink to="locations">locations</Navlink>
                    </li>
                    <li>
                         <Navlink to="species">species</Navlink>
                    </li>
                    <li>
                        <Navlink to="vehicles">vehicles</Navlink>
                    </li>
                </ul>
            </nav>
            <Routes>
                    <Route path="/" element={<HomeView/>} />
                    <Route path="films" element={<FilmsView />} />
                    <Route path="people" element={<CodewarsView />} />
                    <Route path="locations" element={<LocationsView />} />
                    <Route path="vehicles" element={<VehiclesView />} />
                    <Route path="species" element={<SpeciesView/>} />
             </Routes>
            </Router>
        );
    };
  

export default App;
