import { CustomIconType } from "@/lib/type";

export function ListView(props: CustomIconType) {
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
        d="M12.2051 17H19.9768"
        stroke="#14142B"
      />
      <path
        d="M12.2283 7H20"
        stroke="#14142B"
      />
      <rect
        x="2.51318"
        y="3.45508"
        width="7"
        height="7"
        stroke="#14142A"
      />
      <rect
        x="2.51318"
        y="13.5142"
        width="7"
        height="7"
        stroke="#14142A"
      />
    </svg>
  );
}
