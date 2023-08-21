// Logo

let Logo = ({ color, size, className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || '80'}
      height={size || '80'}
      fill='none'
      viewBox='0 0 80 80'
      className={className}
    >
      <path
        fill={color || '#000'}
        fillRule='evenodd'
        d='M76.436 40.269c0-19.813-16.061-35.875-35.874-35.875-19.813 0-35.875 16.062-35.875 35.875v33.647c0 1.23.997 2.227 2.227 2.227h22.154c.841 0 1.523-.682 1.523-1.524V61.73a2 2 0 0 1 2-2h14.817a2 2 0 0 1 2 2v12.824c0 .878.712 1.59 1.59 1.59H74.21c1.23 0 2.227-.997 2.227-2.227V40.27Z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export default Logo;
