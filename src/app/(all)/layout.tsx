import Layout from "@/components/common/layout";

export default function RootLayout(props: React.PropsWithChildren) {
  return <Layout headerColor="bg-white">{props.children}</Layout>;
}
