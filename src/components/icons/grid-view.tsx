import { CustomIconType } from "@/lib/type";

export function GridView(props: CustomIconType) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="4.50024"
        y="4.5"
        width="6"
        height="6"
        stroke="#14142B"
      />
      <rect
        x="4.50024"
        y="13.5"
        width="6"
        height="6"
        stroke="#14142B"
      />
      <rect
        x="13.5002"
        y="4.5"
        width="6"
        height="6"
        stroke="#14142B"
      />
      <rect
        x="13.5002"
        y="13.5"
        width="6"
        height="6"
        stroke="#14142B"
      />
    </svg>
  );
}
