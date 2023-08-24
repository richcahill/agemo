import React, { useRef, useState, useEffect } from 'react';
import DotBackground from '../DotBackground';
import LoadingSpinner from '../LoadingSpinner';

export default function Scope(props) {
  const [prompt, setPrompt] = useState('');

  return (
    <div className='flex h-full flex-col gap-4 py-4 justify-between '>
      <div className='flex flex-col p-4 gap-4 items-center justify-center h-full'>
        <DotBackground />

        <LoadingSpinner />
        <div className='flex flex-col items-center'>
          <div>building your app structure</div>
          <div className='opacity-30'>this can take ~10 minutes</div>
        </div>
      </div>
    </div>
  );
}
