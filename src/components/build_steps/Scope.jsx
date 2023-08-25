import React, { useRef, useState, useEffect } from 'react';
import DotBackground from '../DotBackground';
import LoadingSpinner from '../LoadingSpinner';
import ReactFlow from 'reactflow';

export default function Scope(props) {
  const [buildState, setBuildState] = useState('loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      setBuildState('complete');
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div className='flex h-full flex-col gap-4 py-4 justify-between '>
      <DotBackground />
      {buildState === 'loading' ? (
        <div className='flex flex-col p-4 gap-4 h-full items-center justify-center'>
          <LoadingSpinner />
          <div className='flex flex-col items-center'>
            <div>building your app structure</div>
            <div className='opacity-30'>this can take ~10 minutes</div>
          </div>
        </div>
      ) : (
        <div className='flex gap-4 h-full w-full justify-between flex-col'>
          <div className='text-2xl font-medium'>
            These are the steps for your application
          </div>

          <div className='flex gap-4 flex-1 w-full items-start'>
            <div className='bg-white/90 dark:bg-white/10 text-xl py-2 px-4 rounded-full backdrop-blur-lg'>
              Start
            </div>
            <div className='bg-white/90 dark:bg-white/10 pt-2 p-4 rounded-md flex flex-col w-60 gap-2 items-start backdrop-blur-lg'>
              <div className='text-xl'>Scrape Bloomberg</div>
              <div className='opacity-50 leading-tight text-sm'>
                Use the Web Scraping API to extract data from the specified
                Bloomberg page.
              </div>
              <div className='text-sm px-2 py-1 bg-black/5 dark:bg-white/5 mt-4 border-b-[#4080ee] border-b-4 rounded-sm backdrop-blur-lg'>
                Scrape Bloomberg
              </div>
            </div>
            <div className='bg-white/90 dark:bg-white/10  pt-2 p-4 rounded-md flex flex-col w-60 gap-2 items-start backdrop-blur-lg'>
              <div className='text-xl'>Process Data</div>
              <div className='opacity-50 leading-tight text-sm'>
                Process the data using the GPT AI
              </div>
              <div className='text-sm px-2 py-1 bg-black/5 dark:bg-white/5 mt-4 border-b-[#4c9e9e] border-b-4 rounded-sm'>
                GPT AI
              </div>
            </div>
            <div className='bg-white/90 dark:bg-white/10 text-xl py-2 px-4 rounded-full backdrop-blur-lg'>
              End
            </div>
          </div>
          <div className='bg-white/80 dark:bg-white/5 relative -ml-4 -mr-4 -mb-4 p-8 backdrop-blur-2xl flex gap-2 items-baseline '>
            <div
              className='bg-black dark:bg-white text-white dark:text-black text-2xl py-2 px-6 rounded-full transition-opacity opacity-80 hover:opacity-100 cursor-pointer border-2 border-black dark:border-white'
              onClick={() => props.switchStep(2)}
            >
              build it
            </div>
            <div
              className=' dark:text-white text-2xl py-2 px-6 rounded-full transition-opacity opacity-80 hover:opacity-100 cursor-pointer border-2 border-black dark:border-white'
              onClick={() => props.switchStep(0)}
            >
              regenerate
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
