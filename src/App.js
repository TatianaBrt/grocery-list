import image from './man.jpg';
import image2 from './shop.jpg';
import './App.css';
import { GroceryList } from './GroceryList';



function App() {
  return (
    <div className="App">
<div className='container'>
<img src={image2} alt="shop" width="200px"/> 
</div>
<h1>GROCERY LIST</h1>

<GroceryList/>

<div className='container'>
<img src={image} alt="man" width="200px"/> 
</div>      
    </div>
  );
}

export default App;
