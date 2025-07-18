import { ReactNode } from "react";
import Link from "next/link";
// import PearDark from "./ui/PearDark.svg";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import AuthButton from "./ui/authbutton";
import MobileMenu from "./ui/mobile-menu";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DownloadButton from "./ui/downloadbutton";

const NavItem = ({
  href,
  target = "_self",
  children,
}: {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  children: ReactNode;
}) => (
  <NavigationMenuLink
    asChild
    className={navigationMenuTriggerStyle()}
    href={href}
    target={target}
  >
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
);

export default async function Header() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e6e6e6] bg-background bg-white-50 p-2 transition-all duration-300 ease-in-out">
      <nav
        className="mx-auto flex max-w-[1070px] items-center justify-between px-2 transition-all duration-300 ease-in-out dark:border-gray-50"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="flex flex-shrink-0 items-center"
            aria-label="Ralli Home"
          >
            <span className="text-2xl">🎡</span>
            <div className="ml-1 mt-[2px] text-xl font-semibold">Ralli</div>
          </Link>
          {/* <nav className="ml-4 hidden md:block" aria-label="Main menu">
            <NavigationMenu>
              <NavigationMenuList className="text-[#666666] dark:text-gray-500">
                <NavItem href="/about">About</NavItem>
                <NavItem href="/faq">FAQ</NavItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav> */}
        </div>
        <div className="hidden items-center space-x-2 lg:flex">
          <Link
            href="https://tryralli.notion.site/"
            className="text-white flex h-9 items-center rounded-xl bg-black px-4 text-base font-normal hover:bg-black/80"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Waitlist
          </Link>
        </div>
      </nav>
    </header>
  );
}
