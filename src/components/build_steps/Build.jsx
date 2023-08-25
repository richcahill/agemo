import React, { useRef, useState, useEffect } from 'react';
import DotBackground from '../DotBackground';
import LoadingSpinner from '../LoadingSpinner';
import ReactFlow from 'reactflow';

let Node = ({ data }) => {
  return (
    <div className='bg-white/90 dark:bg-white/10 pt-2 p-4 rounded-md flex flex-col gap-4 items-start backdrop-blur-lg min-w-[400px]'>
      <div className='flex justify-between gap-8 items-baseline w-full'>
        {data.inputs?.length > 0 && (
          <div className='uppercase text-sm opacity-50'>in</div>
        )}
        <div className='text-xl col'>{data.title}</div>
        {data.outputs?.length > 0 && (
          <div className='uppercase text-sm opacity-50'>out</div>
        )}
      </div>
      <div className='flex self-stretch justify-between'>
        <div className='flex flex-col gap-2'>
          {data.inputs.map((input) => (
            <div className='flex gap-2 items-center'>
              <div
                className={`w-2 aspect-square rounded-full `}
                style={{ backgroundColor: input.color }}
              />
              <div
                className={`text-sm px-2 py-1 bg-black/5 dark:bg-white/5  border-b-4 rounded-sm backdrop-blur-lg`}
                style={{ borderBottomColor: input.color }}
              >
                {input.name}
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-2 items-end'>
          {data.outputs.map((input) => (
            <div className='flex gap-2 items-center'>
              <div
                className={`text-sm px-2 py-1 bg-black/5 dark:bg-white/5  border-b-4 rounded-sm backdrop-blur-lg`}
                style={{ borderBottomColor: input.color }}
              >
                {input.name}
              </div>
              <div
                className={`w-2 aspect-square rounded-full `}
                style={{ backgroundColor: input.color }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-end w-full mt-8'>
        <div className='bg-black dark:bg-white/90 cursor-pointer px-3 py-1 rounded-full text-white dark:text-black'>
          inspect
        </div>
      </div>
    </div>
  );
};

export default function Scope(props) {
  const [buildState, setBuildState] = useState('complete');

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
            These are your microservices
          </div>

          <div className='flex gap-4 flex-1 w-full items-start overflow-x-scroll'>
            <Node
              data={{
                title: 'map_inputs_to_API',
                inputs: [
                  { name: 'URL', color: '#51498c' },
                  { name: 'instruction', color: '#4b9e9e' },
                ],
                outputs: [
                  { name: 'URL', color: '#51498c' },
                  { name: 'instruction', color: '#4b9e9e' },
                ],
                state: 'complete',
              }}
            />
            <Node
              data={{
                title: 'scrape_bloomberg',
                inputs: [
                  { name: 'URL', color: '#51498c' },
                  { name: 'instruction', color: '#4b9e9e' },
                ],
                outputs: [{ name: 'scraped_data', color: '#3c7ae2' }],
                state: 'complete',
              }}
            />
            <Node
              data={{
                title: 'parse_data',
                inputs: [{ name: 'scraped_data', color: '#3c7ae2' }],
                outputs: [{ name: 'parsed_data', color: '#51498c' }],
                state: 'complete',
              }}
            />
            <Node
              data={{
                title: 'parse_data',
                inputs: [{ name: 'scraped_data', color: '#3c7ae2' }],
                outputs: [{ name: 'parsed_data', color: '#51498c' }],
                state: 'complete',
              }}
            />
          </div>

          <div className='bg-white/80 dark:bg-white/5 relative -ml-4 -mr-4 -mb-4 p-8 backdrop-blur-2xl flex gap-2 items-baseline '>
            <div
              className='bg-black dark:bg-white text-white dark:text-black text-2xl py-2 px-6 rounded-full transition-opacity opacity-80 hover:opacity-100 cursor-pointer border-2 border-black dark:border-white'
              onClick={() => props.switchStep(2)}
            >
              run it
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
