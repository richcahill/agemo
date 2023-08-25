import React, { useRef, useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Head from 'next/head';

import Scope from '@/components/build_steps/Scope';
import Start from '@/components/build_steps/Start';
import Build from '@/components/build_steps/Build';

export default function Home() {
  const containerRef = useRef(null);
  const divRefs = useRef([]);
  const [containerHeight, setContainerHeight] = useState(0);
  const [transforms, setTransforms] = useState([]);
  const [activeStep, setActiveStep] = useState(2);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (divRefs.current[activeStep]) {
      divRefs.current[activeStep].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [activeStep]);

  useEffect(() => {
    setTransforms(
      new Array(divRefs.current.length).fill({ scale: 1, translateY: 0 })
    );

    const handleScroll = () => {
      const newTransforms = divRefs.current.map((ref, index) => {
        let scale = 1;
        let translateY = 0;

        if (index === divRefs.current.length - 1) return { scale, translateY };

        const nextElement = divRefs.current[index + 1];
        if (!nextElement) return { scale, translateY }; // Guard clause

        const nextRect = nextElement.getBoundingClientRect();

        if (nextRect.top <= 100 && nextRect.top >= 0) {
          scale = 1 - (divRefs.current.length - index) * 0.03;
          translateY = -4 * (divRefs.current.length - index);
        }

        return { scale, translateY };
      });

      setTransforms(newTransforms);
    };

    containerRef.current.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [divRefs]);

  // const divContents = ['scope', 'build', 'design', 'test'];

  let switchStep = (step) => {
    setActiveStep(step);
  };

  const steps = [
    { title: 'Start', component: <Start switchStep={switchStep} /> },
    { title: 'Scope', component: <Scope switchStep={switchStep} /> },
    { title: 'Build', component: <Build switchStep={switchStep} /> },
    { title: 'Run', component: <div>Scope</div> },
  ];

  return (
    <main className='flex h-screen flex-col items-center gap-4'>
      <Head>
        <title>Agemo</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Nav />
      <div
        className='flex-1 p-4 pb-0 w-full relative overflow-scroll'
        ref={containerRef}
      >
        {steps.map((step, index) => {
          if (index > activeStep) return null; // This line ensures that only steps before the active one are shown

          return (
            <div
              key={index}
              ref={(el) => (divRefs.current[index] = el)}
              style={{
                height: containerHeight - 20,
                transform: `scale(${transforms[index]?.scale}) translateY(${transforms[index]?.translateY}px)`,
              }}
              className='w-full bg-black/5 dark:bg-black/95 p-4 rounded-t-3xl sticky top-0 transition-transform origin-top border border-black/20 dark:border-white/20 backdrop-blur-2xl'
            >
              <div className='text-sm uppercase tracking-wide text-black dark:text-white opacity-50'>
                {step.title}
              </div>
              {step.component}
            </div>
          );
        })}
      </div>
    </main>
  );
}
