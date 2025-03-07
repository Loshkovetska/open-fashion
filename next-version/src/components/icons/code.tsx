import { CustomIconType } from "@/lib/type";

export function Code(props: CustomIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 21 21"
      fill="none"
      {...props}
    >
      <g opacity="0.5">
        <path
          d="M10.446 1.01811L20.2367 10.8088L10.8086 20.2369L1.01794 10.4462L1.38056 1.38073L10.446 1.01811Z"
          stroke="black"
        />
        <circle
          cx="6.7839"
          cy="6.2972"
          r="0.833333"
          stroke="black"
        />
      </g>
    </svg>
  );
}
