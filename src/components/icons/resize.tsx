import { CustomIconType } from "@/lib/type";

export function Resize(props: CustomIconType) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.0879 3.64563L20.3623 3.64563L20.3623 10.9365"
        stroke="#FCFCFC"
      />
      <line
        y1="-0.5"
        x2="10.1647"
        y2="-0.5"
        transform="matrix(-0.70631 0.707903 -0.70631 -0.707903 19.8225 3.43253)"
        stroke="#FCFCFC"
      />
      <path
        d="M10.9121 20.355L3.63768 20.355L3.63768 13.0641"
        stroke="#FCFCFC"
      />
      <line
        y1="-0.5"
        x2="10.1647"
        y2="-0.5"
        transform="matrix(0.70631 -0.707903 0.70631 0.707903 4.22827 20.4272)"
        stroke="#FCFCFC"
      />
    </svg>
  );
}
