export function ProfileFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#003366] rounded-full text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        className="rounded-full"
      >
        <rect width="200" height="200" fill="#003366" />
        <circle cx="100" cy="80" r="35" fill="#CCCCCC" />
        <path
          d="M160,170 C160,130 140,110 100,110 C60,110 40,130 40,170"
          fill="#CCCCCC"
        />
        <text
          x="100"
          y="190"
          fontSize="16"
          fontFamily="Arial, sans-serif"
          fill="white"
          textAnchor="middle"
        >
          San Maung Maung
        </text>
      </svg>
    </div>
  );
}