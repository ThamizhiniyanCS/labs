import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { home, writeups, workshops, labs } from "@/lib/navLinks";

const CustomMobileNavigationMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-transparent xl:hidden flex justify-center items-center ml-3">
        <Menu className="size-[1.5rem]" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-primary">{home.title}</SheetTitle>
          <SheetDescription>{home.description}</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <a href={home.href} className="text-xl text-primary no-underline">
              Home
            </a>
            <div className="flex flex-col ml-4">
              {home.listItems.map(({ title, href }) => (
                <a href={href} className="text-base text-primary no-underline">
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <a href="" className="text-xl text-primary no-underline">
              Writeups
            </a>
            <div className="flex flex-col ml-4">
              {writeups.map(({ title, href }) => (
                <a href={href} className="text-base text-primary no-underline">
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <a href="" className="text-xl text-primary no-underline">
              Labs
            </a>
            <div className="flex flex-col ml-4">
              {labs.map(({ title, href }) => (
                <a href={href} className="text-base text-primary no-underline">
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <a href="" className="text-xl text-primary no-underline">
              Workshops
            </a>
            <div className="flex flex-col ml-4">
              {workshops.map(({ title, href }) => (
                <a href={href} className="text-base text-primary no-underline">
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CustomMobileNavigationMenu;
