
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Feed, Navbar, VideoDetail, SearchFeed, ChannelDetail } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/watch/:id' element={<VideoDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
