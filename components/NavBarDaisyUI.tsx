// navbar using daisyUI https://daisyui.com/components/navbar/
import Link from "next/link";
import Image from "next/image";
import UserLinks from "./UserLinksDaisyUI";
import MobileMenuDaisyUI from "./MobileMenuDaisyUI";
import MenuRadixUI from "./MenuRadixUI";

export default function NavBarDaisyUI() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Mobile Menu */}
          <MobileMenuDaisyUI />
      {/* Logo */}
      <Link href="/" className="btn btn-ghost normal-case text-xl hover:bg-blue-100/50">
          <Image
            src={"/popLogo.svg"}
            width={100}
            height={100}
            alt="logo"
            className="w-16 h-auto"
          />
          Pops Recording System
        </Link>
      </div>
      {/* Menu Window Screen */}
      <div className="navbar-center hidden lg:flex">
        <MenuRadixUI />
      </div>
      <div className="navbar-end">
        <UserLinks />
      </div>
    </div>
  );
}
