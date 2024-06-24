import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Dashboard from "./Pages/Dashboard/Dashboard";
import Dashboard from "./Pages/Dashboard/Dashboard"
import Layout from "./Components/Layout/Layout";
// import Calendar from "./Pages/Calendar/Calendar";
import { Calendar } from "./Pages/Calendar/Calendar";
import Board from "./Pages/Board/BoardPage";
import BoardPage from "./Pages/Board/BoardPage";
import DataGrid from "./Pages/DataGrid/DataGrid";


const App = () => {
  return <div id="dashboard">
    <BrowserRouter>

      {/* <Layout /> */}

      <Routes>
        
        <Route 
        path="/" element={<Layout />}
        >

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="users" element={<DataGrid />} />

         
        </Route>

      </Routes>

    </BrowserRouter>
  </div>
};

export default App;
