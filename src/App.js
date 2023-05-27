import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login"
import Layout from './pages/Layout'
import NoPage from "./pages/NoPage";
import Topbar from "./components/TopBar";
import Footer from "./components/Footer";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import Rank from "./pages/Rank";

import BoardEdit from "./pages/BoardEdit";


import { useState, useEffect } from "react";


import SearchEdu from "./pages/SearchEdu"
import SearchFarm from "./pages/SearchFarm"
import SearchToy from "./pages/SearchToy"
import SearchTransport from "./pages/SearchTransport"

//12351456

function App() {


  return (
    
    <>
    
    <div style={{height: '80px', backgroundColor: '#f1f1f1'}}>
      <Topbar />
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="products" element={<Products />} />
          <Route path="board" element={<Board />} />

          <Route path="boardlist" element={<BoardList />}/>
          <Route exact path="/board/detail/:id" element={<BoardDetail />} />
          <Route exact path="/board/edit/:id" element={<BoardEdit />} />

          <Route path="login" element={<Login />} />
          <Route path="rank" element={<Rank />}/>
          

          <Route path="searchedu" element={<SearchEdu/>}/>

          <Route path="searchfarm" element={<SearchFarm/>}/>
          <Route path="searchtransport" element={<SearchTransport/>}/>

          <Route path="searchtoy" element={<SearchToy/>}/>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    
    </>
  );
}

export default App;