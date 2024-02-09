
import React from 'react'; 


function Map() {
  const data = [
    {id: 1, name: 'Pawan', age: 27, height: 5.4 },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold grid justify-items-center mt-10">Welcome to Images Gallery</h2>
      {data.map((e, id) => (
        <div key={id} className="my-4">
          <p>Name: {e.name}</p>
          <p>Age: {e.age}</p>
          <p>Height: {e.height}</p>
        </div>
      ))}
    </>
  );
}
export default Map;
