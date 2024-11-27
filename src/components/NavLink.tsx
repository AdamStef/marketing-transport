import { cn } from "@/lib/utils";
import {
  NavLink as RRDNavLink,
  NavLinkProps as RRDNavLinkProps,
} from "react-router-dom";

type NavLinkProps = RRDNavLinkProps;

export const NavLink = (props: NavLinkProps) => {
  return (
    <RRDNavLink
      to={props.to}
      className={({ isActive }) =>
        cn(
          isActive
            ? "text-primary hover:text-primary/80"
            : "hover:text-primary",
          "transition"
        )
      }
    >
      {props.children}
    </RRDNavLink>
  );
};
