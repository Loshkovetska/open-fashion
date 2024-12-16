import Layout from "@/components/common/layout";

export default function RootLayout(props: React.PropsWithChildren) {
  return <Layout>{props.children}</Layout>;
}
