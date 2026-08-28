import type { PropsWithChildren } from "react"
import { Footer } from "../../screens/home/components";

export const AppLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      {children};
      <Footer />
    </>
  )
}
