import { LuCheck, LuUser } from "react-icons/lu";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => <LuCheck {...props} />,
  user: (props: IconProps) => <LuUser {...props} />,
};
