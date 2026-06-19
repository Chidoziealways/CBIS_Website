import './App.css'
import About from "./About.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import {Route, Routes} from "react-router-dom";
import Banner from "./components/Banner.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
        <NavigationBar />
        <Routes>
          <Route
            path="/about"
            element = {
              <>
                  <Banner
                      title="CBIS Magodo"
                      subtitle="A School... in SHawarma"
                  />
                  <About />
              </>
            }
          />
        </Routes>
        <div>
          <p>A School in Magodo</p>
        </div>
    </>
  )
}

export default App
