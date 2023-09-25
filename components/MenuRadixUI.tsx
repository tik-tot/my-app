"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import cn from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import itemsNav from "@/types/menuTypeData";
import "./styles/menuStyles.css";

// customised NavigationMenu.Link as suggested in https://www.radix-ui.com/primitives/docs/components/navigation-menu
export const RadixLink = ({
  href,
  className,
  children,
  ...props
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link
        className={cn("NavigationMenuLink", className)}
        active={isActive}
        {...props}
      >
        {children}
      </NavigationMenu.Link>
    </NextLink>
  );
};


type ListProps = React.HTMLProps<HTMLElement>;

// wrapping Link according to next/link: https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-functional-component
export const ListItem = React.forwardRef<HTMLAnchorElement, ListProps>(
  ({ className, href, children, title, ...props }, forwardedRef) => {
    const pathname = usePathname();
    const isActive = pathname === href; 

    return (
      <li>
        <NavigationMenu.Link asChild active={isActive}>
          <a
            className={cn("ListItemLink", className)}
            {...props} href={href}
            ref={forwardedRef}
          >
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </a>
        </NavigationMenu.Link>
        </li>
    );
  }
);
ListItem.displayName = "ListItem"

const MenuRadixUI = () => {
  let pathname = usePathname();
  if (pathname.length === 0) pathname = "/";
  const menuList = itemsNav.map((e, idx) => {
    if (!e.children) {
      let active = pathname === e.url;
      return (
        <NavigationMenu.Item
          key={e.name}
          className={cn({ active: { active } })}
        >
          <RadixLink
            className={cn({ NavigationMenuLink: true, active: { active } })}
            href={e.url!}
          >
            {e.name}
          </RadixLink>
        </NavigationMenu.Item>
      );
    } else {
      return (
        <NavigationMenu.Item key={e.name}>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            {e.name} <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              {e.children?.map((ec) => {
                return (
                  <NextLink key={ec.name} href={ec.url} passHref legacyBehavior>
                    <ListItem title={ec.name} href={ec.url}>
                      {ec.desc}
                    </ListItem>
                  </NextLink>
                );
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      );
    }
  });

  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        {menuList}
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default MenuRadixUI;
