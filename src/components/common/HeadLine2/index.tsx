export default function HeadLine2(props: React.PropsWithChildren) {
  return (
    <h2 className="uppercase text-lg tracking-[4px] text-center">
      {props.children}
    </h2>
  );
}
