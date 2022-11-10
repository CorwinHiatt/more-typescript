import Aboutme , {Person } from './components/Aboutme';
import Greeter from './components/Greeter';
import PhotoCard, {  PhotoCardType } from './components/PhotoCard';
import Counter from './components/Counter';
import './App.css';

const me: Person = {
name: "Corwin",
age: 25,
awesome: true,

}



const card: PhotoCardType = {
  photo:'https://lh3.googleusercontent.com/ogw/AOh-ky34t5fd0w9ldRPKMVEIsV_xbcSYNHplZ9kVirThwQ=s32-c-mo',
  user:'todd albert',
  mainPhoto: '',
  description: '',
  likeCount: 99,

}


function App() {
  return (

    <div className="App">
      <div className='main-box'>
      <header className="App-header">
      <h1>Hello typeScript</h1>
      <Aboutme person ={me}/>
      <Counter/>
      <Greeter firstName='Corwin' lastName='Hiatt'/>
      <PhotoCard card={card}/>
     
      </header>
      </div>
    </div>
  );
}

export default App;
