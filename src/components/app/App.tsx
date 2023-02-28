import './App.css'
import TestimonialCard from '../testimonial_card/TestimonialCard';

function App() {

  return (
    <div className="App">
      <h1 className='Main-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit:</h1>
      <TestimonialCard name='Angel Herrarte' country='Guatemala' image='https://picsum.photos/200' job='Software Engineer' company='Amazon'>
        <p>Lorem ipsum dolor, <strong>sit</strong> amet <i>consectetur adipisicing</i> elit. Libero culpa <strong>velit natus</strong> libero culpa velit natus <strong>libero</strong> culpa velit natus.</p>
      </TestimonialCard>
    </div>
  )
}

export default App;
