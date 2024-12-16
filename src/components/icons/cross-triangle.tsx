import { CustomIconType } from "@/lib/type";

export function CrossTriangle(props: CustomIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g opacity="0.5">
        <path
          d="M7.65101 11.4464L3.8407 18.5405H19.9806L11.9881 3.54681L8.73526 9.33982"
          stroke="black"
        />
        <path
          d="M3.77869 6.95447L21.8082 16.0002"
          stroke="black"
        />
      </g>
    </svg>
  );
}
