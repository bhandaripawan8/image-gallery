import React, { useState } from 'react'

export default function ImageSearch({searchText}) {
    const [text, settext] = useState('');

    const textSearch = (e) => {
        e.preventDefault();
        searchText(text);
    }
  return (
    <form onSubmit = {textSearch} className='flex justify-center'> 
    <input 
      type="search" 
      id="default-search" 
      onChange={e => settext(e.target.value)}
      className="flex-row w-96 h-10 p-2 mt-5 mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Try searching images here..." 
      required
    />
    <button 
      className="w-20 h-10 mt-5 ml-0.5 bg-sky-500/50 hover:bg-cyan-600 rounded-xl"
    >
      Search
    </button>
</form>
  )
}
