import Link from "next/link";
import { ReactSVG } from "react-svg";
import { NavigationMenuCardRoot } from "./styles";

type NavigationMenuCardProps = {
  icon: string;
  text: string;
  href: string;
};

export function NavigationMenuCard({
  icon,
  text,
  href,
}: NavigationMenuCardProps) {
  return (
    <NavigationMenuCardRoot>
      <Link href={href}>
        <a>
          <h2>
            <ReactSVG src={icon} />
          </h2>
          <p>{text}</p>
        </a>
      </Link>
    </NavigationMenuCardRoot>
  );
}
