import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav';
import { Box } from '@mui/material';
import { links } from './Paths';
function App() {

  return (
    <div className="App" style={{ "margin": "0px" }}>
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <Nav />
          <Routes>
            {links.map((element)=>{
              return <Route path={element.path} element={element.element} />
            })}
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
