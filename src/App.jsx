import './App.css'
import {Card} from "./components/Card.jsx";
import {useState} from "react";
import {Counter} from "./components/Counter.jsx";

function App() {
  const list = [
    {
      'id': 1,
      'url': 'https://source.unsplash.com/random/200x200?sig=1',
      'title': 'Imagen 1',
      'email': 'image1@example.com'
    },
    {
      'id': 2,
      'url': 'https://source.unsplash.com/random/200x200?sig=2',
      'title': 'Imagen 2',
      'email': 'image2@example.com'
    },
    {
      'id': 3,
      'url': 'https://source.unsplash.com/random/200x200?sig=3',
      'title': 'Imagen 3',
      'email': 'image3@example.com'
    },
    {
      'id': 4,
      'url': 'https://source.unsplash.com/random/200x200?sig=4',
      'title': 'Imagen 4',
      'email': 'image4@example.com'
    },
    {
      'id': 5,
      'url': 'https://source.unsplash.com/random/200x200?sig=5',
      'title': 'Imagen 5',
      'email': 'image5@example.com'
    },
    {
      'id': 6,
      'url': 'https://source.unsplash.com/random/200x200?sig=6',
      'title': 'Imagen 6',
      'email': 'image6@example.com'
    }
  ];

  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const reduce = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
     <div className={'container'}>
       {
         list.map(element => (
             <Card key={element.id} imgUrl={element.url} email={element.email} title={element.title} counter={count}/>
         ))
       }
       <Counter value={count} add={add} reduce={reduce} restar={reset}/>
     </div>
    </>
  )
}

export default App
