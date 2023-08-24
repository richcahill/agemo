// Chevron

let Chevron = ({ color, size, className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='9'
      fill='none'
      viewBox='0 0 14 9'
      className={className}
    >
      <path
        fillRule='evenodd'
        d='M.28.987a.5.5 0 0 1 .707 0L6.88 6.88 12.773.987a.5.5 0 1 1 .707.707L7.234 7.941a.5.5 0 0 1-.707 0L.28 1.694a.5.5 0 0 1 0-.707Z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export default Chevron;
