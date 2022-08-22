import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () {
        return (
            <Router>
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
