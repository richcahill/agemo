import React, { useRef, useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Chevron from '@/components/icons/Chevron';

let ExampleCard = ({ title }) => {
  return (
    <div className='flex flex-col justify-between items-start aspect-square h-32 bg-white dark:bg-white/5 rounded-md p-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer'>
      <div className='aspect-square h-6 rounded-full bg-black/5 dark:bg-white/5'></div>
      <div className='text-sm leading-tight opacity-80'>{title}</div>
    </div>
  );
};

let examples = [
  { title: 'A lead generation tool for LinkedIn', icon: 'test' },
  { title: 'Veniam nisi mollit officia ipsum', icon: 'test' },
  { title: 'In nulla excepteur sint', icon: 'test' },
  { title: 'Laborum do voluptate', icon: 'test' },
  { title: 'Laborum do voluptate', icon: 'test' },
];

export default function Scope(props) {
  const [prompt, setPrompt] = useState('');

  return (
    <div className='flex h-full flex-col gap-4 py-4 justify-between'>
      <div className='flex flex-col gap-8 items-start'>
        <div className='flex gap-4 items-center'>
          <div className='text-2xl font-medium'>What shall we build today?</div>
          <div className='border border-black dark:border-white rounded-full flex items-center px-4 py-1 opacity-70 hover:opacity-100 cursor-pointer transition-opacity'>
            inspire me
          </div>
        </div>
        <TextareaAutosize
          className='text-5xl bg-transparent font-medium resize-none placeholder-black/10 dark:placeholder-white/10 outline-none w-full'
          placeholder="An app that replaces an image's background with a sunset"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        {prompt && (
          <div
            className='bg-black text-white dark:bg-white dark:text-black text-2xl py-2 px-6 rounded-full transition-opacity opacity-80 hover:opacity-100 cursor-pointer'
            onClick={() => props.switchStep(1)}
          >
            build it
          </div>
        )}
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex'>
          <div className='bg-white dark:bg-white/5 px-4 py-2 rounded-md flex gap-8 items-center opacity-80 cursor-pointer hover:opacity-100 transition-opacity'>
            <div className='flex gap-2'>
              <div>Available APIs</div>
              <div className='opacity-50'>16</div>
            </div>
            <Chevron className='h-4 w-4 fill-black dark:fill-white' />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='opacity-40'>Examples</div>
          <div className='flex w-full overflow-x-scroll gap-2'>
            {examples.map((example, index) => (
              <ExampleCard key={index} title={example.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
