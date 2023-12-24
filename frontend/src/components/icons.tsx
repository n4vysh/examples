import { LuCheck } from "react-icons/lu";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => <LuCheck {...props} />,
};
