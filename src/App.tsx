import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Detail from './pages/Detail'
import Edit from './pages/Edit'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import { ErrorBoundary } from 'react-error-boundary'
import Error from './pages/Error' // 런타임시에 에러가 발생했을 때, 이동될 페이지이다. 


function App() {
  return (
  <ErrorBoundary FallbackComponent={Error}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/book/:id" element={<Detail/>}/>
        <Route path="*" element={<NotFound/>}/>
        {/* path="*" 경로가 일지하지 않으면 해당 라우터를 보여준다. */}
      </Routes>
    </BrowserRouter>
  </ErrorBoundary> 
  )
}

export default App