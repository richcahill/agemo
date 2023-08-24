export default function LoadingSpinner(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      className={props.classname || 'w-52 stroke-white'}
    >
      <circle
        cx='50'
        cy='50'
        r='40'
        fill='none'
        strokeWidth='10'
        strokeDasharray='251.3274'
        strokeDashoffset='251.3274'
      >
        <animate
          attributeName='stroke-dashoffset'
          from='251.3274'
          to='0'
          dur='10s'
          fill='freeze'
        />
      </circle>
    </svg>
  );
}
