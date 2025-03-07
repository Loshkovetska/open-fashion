import { CustomIconType } from "@/lib/type";

export function Sort(props: CustomIconType) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7.5V8.5H21V7.5H3ZM10 16.5H14V15.5H10V16.5ZM18 12.5H6V11.5H18V12.5Z"
      />
    </svg>
  );
}
