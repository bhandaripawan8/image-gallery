import React from 'react';

export default function ImageCard({ image }) {
  const tags = image.tags.split(',');
  return (
    <>
    {image && (
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3 h-auto flex flex-col">
  <a href="#" class="flex-grow">
    <img class="rounded-t-lg w-full h-auto" src={image.webformatURL} alt="" />
  </a>
  <div class="p-5 flex-grow">
    <h3 className='font-bold text-gray-900 dark:text-white mb-2'>Photo by: {image.user}</h3>
    <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">Likes: {image.likes}</h5>
    <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">Downloads: {image.downloads}</h5>
    <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">Views: {image.views}</h5>
    <div class="px-6 py-4"></div>
    <div class="flex">
      {tags.map((tags, index) => (
        <span key={index} class="w-20 rounded-lg text-base font-semibold text-white mr-2">
          #{tags}
        </span>
      ))}
    </div>
  </div>
</div>



    )}
    </>
  );
}

