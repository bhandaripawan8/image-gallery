import React from 'react'; 
import './App.css'
import {useState, useEffect} from 'react';
import ImageCard from './Components/ImageCard';
import ImageSearch from './Components/ImageSearch';


function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [term, setterm] = useState('');

  useEffect( () => { 
    setIsLoading(true);
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then(data => {
        console.log(data)
        setImages(data.hits);
        console.log(data.hits);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setIsLoading(false);
      });
  }, [term]);


  return (
    <>
   
      <div className='grid justify-items-center'>
        <h2 className=' mt-5 text-2xl font-bold'>Welcome to your Images Gallery</h2>
        </div>
        <ImageSearch searchText = {(text) => setterm(text)}/>
<div className="container mx-auto">
  {!isloading && images.length === 0 && <h1>No images found...</h1>}
  {isloading ? <h1>Loading...</h1> :   <div className="grid grid-cols-3 gap-4">
    {images.map((image) => (
      <ImageCard key={image.id} image={image}/>
    ))}
  </div>}
</div>
    </>
  );
}
export default App;
