export default function DotBackground(props) {
  return (
    <svg className='absolute w-full h-full mt-8 left-0 right-0 top-0'>
      <defs>
        <pattern
          id='polka-dots'
          x='0'
          y='0'
          width='18'
          height='18'
          patternUnits='userSpaceOnUse'
        >
          <circle
            className='fill-black/30 dark:fill-white/30'
            cx='16'
            cy='16'
            r='0.5'
          ></circle>
        </pattern>
      </defs>

      <rect
        x='0'
        y='0'
        width='100%'
        height='100%'
        fill='url(#polka-dots)'
      ></rect>
    </svg>
  );
}
