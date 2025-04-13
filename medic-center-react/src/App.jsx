import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    {/*<Route path='/services' element={<Services/>}/>*/}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;