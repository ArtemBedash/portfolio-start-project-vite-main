import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Technologies} from "./layout/sections/technologies/Technologies.tsx";
import {Expirience} from "./layout/sections/expirience/Expirience.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Technologies/>
            <Expirience/>
            <Footer/>
        </div>
    )
}

export default App

