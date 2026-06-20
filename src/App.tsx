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
          <Banner
              title="CBIS Magodo"
              subtitle="...Faith in God"
          />
        <Routes>
          <Route
            path="/about"
            element = {
              <>
                  <About />
              </>
            }
          />
            <Route path="/" element={
                <>
                    <About />
                    <div>
                        <p>A School in Magodo</p>
                    </div>
                </>
            }
            />
        </Routes>
    </>
  )
}

export default App
