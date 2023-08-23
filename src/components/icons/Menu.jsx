// Logo

let Logo = ({ color, size, className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='11'
      height='11'
      viewBox='0 0 11 11'
      className={className}
    >
      <g>
        <circle cx='1.5' cy='1.5' r='1.5' />
        <circle cx='9.5' cy='1.5' r='1.5' />
        <circle cx='9.5' cy='9.5' r='1.5' />
        <circle cx='1.5' cy='9.5' r='1.5' />
      </g>
    </svg>
  );
};

export default Logo;
