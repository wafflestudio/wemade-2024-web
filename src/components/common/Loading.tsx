export const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <svg
        className="h-12 w-12 animate-spin text-pointColor"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="100"
          strokeLinecap="round"
          opacity="0.3"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="100"
          strokeDashoffset="75"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
