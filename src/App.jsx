import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Homepage from "./pages/Homepage"
import SingleManga from "./pages/SingleManga"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/mangas/:id" element={<SingleManga />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
