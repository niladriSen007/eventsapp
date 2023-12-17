import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import NavItems from "./NavItems";
import { Separator } from "../ui/separator";

const MobileNav = () => {
  return (
    <nav className="md:hidden bg-white">
      <Sheet>
      <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={2}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden ">
          <Image 
            src="/images/event.jpg"
            alt="logo"
            width={50}
            height={20}
          />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};
export default MobileNav;
