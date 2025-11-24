
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<ComponentProps<typeof Link>, "href"> {
  to?: string;
  href?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, to, href, ...props }, ref) => {
    const pathname = usePathname();
    const finalHref = to ?? href ?? "/";
    const isActive = pathname === finalHref;

    return (
      <Link
        ref={ref}
        href={finalHref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };

