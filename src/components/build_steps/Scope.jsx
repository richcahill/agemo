import React, { useRef, useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function Scope() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className='flex h-full flex-col gap-4 py-4'>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 items-center'>
          <div className='text-2xl font-medium'>What shall we build today?</div>
          <div className='border border-white rounded-full flex items-center px-4 py-1 opacity-70 hover:opacity-100 cursor-pointer transition-opacity'>
            inspire me
          </div>
        </div>
        <TextareaAutosize
          className='text-5xl bg-transparent font-medium resize-none placeholder-white/10 outline-none'
          placeholder="An app that replaces an image's background with a sunset"
          value={prompt}
          resize={false}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
    </div>
  );
}
