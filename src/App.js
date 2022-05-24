import Ax from "./component/TemeplateList/TemplateItem/AbsoluteIcons";
import Footer from "./component/Footer";
import MainContent from "./component/MainContent";
import Navbar from "./component/Navbar";
import RelatedTags from "./component/RelatedTags";
import SearchBar from "./component/searchBar";
import TemplateList from "./component/TemeplateList";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <MainContent/>
      <TemplateList/>
      <RelatedTags/>
      <Footer/>
    </div>
  );
}

export default App;
