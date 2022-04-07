import Link from "next/link";
import { ReactSVG } from "react-svg";
import * as NavigationMenuCardComponent from "./styles";

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
    <NavigationMenuCardComponent.Root>
      <Link href={href}>
        <a>
          <h2>
            <ReactSVG src={icon} />
          </h2>
          <p>{text}</p>
        </a>
      </Link>
    </NavigationMenuCardComponent.Root>
  );
}
