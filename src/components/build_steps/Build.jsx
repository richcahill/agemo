import React, { useRef, useState, useEffect } from 'react';
import DotBackground from '../DotBackground';
import LoadingSpinner from '../LoadingSpinner';
import ReactFlow from 'reactflow';

let Node = ({ data, setInspectNode }) => {
  return (
    <div
      className='bg-white/90 dark:bg-white/10 pt-2 p-4 rounded-md flex flex-col gap-4 items-start backdrop-blur-lg min-w-[400px]'
      style={{
        borderRight: !data.outputs
          ? `8px solid ${data.inputs[0].color}`
          : 'none',
        borderLeft: !data.inputs
          ? `8px solid ${data.outputs[0].color}`
          : 'none',
      }}
    >
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
          {data.inputs?.map((input, i) => (
            <div className='flex gap-2 items-center' key={i}>
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
          {data.outputs?.map((input, i) => (
            <div className='flex gap-2 items-center' key={i}>
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
        <div
          className='bg-black dark:bg-white/90 cursor-pointer px-3 py-1 rounded-full text-white dark:text-black'
          onClick={() => setInspectNode(data)}
        >
          inspect
        </div>
      </div>
    </div>
  );
};

export default function Scope(props) {
  const [buildState, setBuildState] = useState('complete');

  const [inspectNode, setInspectNode] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBuildState('complete');
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div className='flex h-full flex-col gap-4 py-4 justify-between  '>
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
                title: 'User Interface',
                description: 'The input entry user interface',
                outputs: [
                  { name: 'URL', color: '#51498c' },
                  { name: 'instruction', color: '#4b9e9e' },
                ],
                state: 'complete',
              }}
              setInspectNode={setInspectNode}
            />
            <Node
              data={{
                title: 'map_inputs_to_API',
                description: 'Mapping the user inputs to the API stream',

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
              setInspectNode={setInspectNode}
            />
            <Node
              data={{
                title: 'scrape_bloomberg',
                description: 'Scraping the provided url',

                inputs: [
                  { name: 'URL', color: '#51498c' },
                  { name: 'instruction', color: '#4b9e9e' },
                ],
                outputs: [{ name: 'scraped_data', color: '#3c7ae2' }],
                state: 'complete',
              }}
              setInspectNode={setInspectNode}
            />
            <Node
              data={{
                title: 'parse_data',
                description: 'Parsing the data from the scraped page',

                inputs: [{ name: 'scraped_data', color: '#3c7ae2' }],
                outputs: [{ name: 'parsed_data', color: '#51498c' }],
                state: 'complete',
              }}
              setInspectNode={setInspectNode}
            />
            <Node
              data={{
                title: 'generate_interpretations',
                description: 'Interpreting the parsed data from the page',

                inputs: [{ name: 'parsed_data', color: '#51498c' }],
                outputs: [{ name: 'interpretations', color: '#3bbbbb' }],
                state: 'complete',
              }}
              setInspectNode={setInspectNode}
            />
            <Node
              data={{
                title: 'generate_market_data',
                description: 'Generating insights out of the parsed data',

                inputs: [{ name: 'interpretations', color: '#3bbbbb' }],
                outputs: [{ name: 'housing_market_data', color: '#3f80ee' }],
                state: 'complete',
              }}
              setInspectNode={setInspectNode}
            />
            <Node
              data={{
                title: 'User Interface',
                description: 'Presenting the response to the user',

                inputs: [{ name: 'housing_market_data', color: '#3f80ee' }],
                state: 'complete',
              }}
              setInspectNode={setInspectNode}
            />
          </div>

          {!inspectNode && (
            <div className='bg-white/80 dark:bg-white/5 relative -ml-4 -mr-4 -mb-4 p-8 backdrop-blur-2xl flex gap-2 items-baseline '>
              <div
                className='bg-black dark:bg-white text-white dark:text-black text-2xl py-2 px-6 rounded-full transition-opacity opacity-80 hover:opacity-100 cursor-pointer border-2 border-black dark:border-white'
                onClick={() => props.switchStep(3)}
              >
                run it
              </div>
              <div
                className=' dark:text-white text-2xl py-2 px-6 rounded-full transition-opacity opacity-80 hover:opacity-100 cursor-pointer border-2 border-black dark:border-white'
                onClick={() => props.switchStep(1)}
              >
                regenerate
              </div>
            </div>
          )}

          {inspectNode && (
            <div className='h-full absolute right-0 bg-white w-1/3 top-0 rounded-r-3xl rounded-l-xl flex flex-col'>
              <div className='flex flex-col gap-4 p-8'>
                <div className='flex w-full justify-between'>
                  <div className='text-2xl font-medium'>
                    {inspectNode.title}
                  </div>
                  <div
                    className='bg-black dark:bg-white/90 cursor-pointer px-3 py-1 rounded-full text-white dark:text-black'
                    onClick={() => setInspectNode(null)}
                  >
                    save
                  </div>
                </div>
                <div> {inspectNode.description}</div>
              </div>
              <div className='bg-black text-white text-sm flex-1 w-full p-8 font-mono'>
                insert code here
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
