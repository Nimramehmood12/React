import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/star-rating';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-button';
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
function App() {
  return (
    <div className="App">
   {/* Accordian compoenent */}
     {/* <Accordian/> 

   {/* Random color component */}
   {/* <RandomColor/>  */}

    {/* Star rating component */}
   {/* <StarRating noOfStars={10}/> */} 

  {/* Image slider component */}
  {/* <ImageSlider
  url={"https://picsum.photos/v2/list"}
  page={"1"}
  limit={"10"}
  /> */}

  {/* Load more products component */}
{/* <LoadMoreData/> */}
<TreeView menus={menus}/>
    </div>
  );
}

export default App;
