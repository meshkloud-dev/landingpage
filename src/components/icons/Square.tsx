const Square = ({ className }: { className?: string }) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="6" height="6" rx="2" fill="currentColor" />
    </svg>
  );
};

export default Square;
