import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { home, writeups, workshops, labs } from "@/lib/navLinks";
import { Icons } from "node_modules/@astrojs/starlight/components/Icons";

const CustomMobileNavigationMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-transparent xl:hidden flex justify-center items-center ml-3">
        <Menu className="size-[1.5rem]" />
      </SheetTrigger>
      <SheetContent side="right" className="grid grid-rows-[auto_1fr_auto]">
        <SheetHeader>
          <SheetTitle className="text-primary">{home.title}</SheetTitle>
          <SheetDescription>{home.description}</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <a href={home.href} className="text-xl text-white no-underline">
              Home
            </a>
            <div className="flex flex-col ml-4">
              {home.listItems.map(({ title, href }) => (
                <a
                  key={title}
                  href={href}
                  className="text-base text-white no-underline border-l-2 border-primary pl-4 py-2"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a href="" className="text-xl text-white no-underline">
              Writeups
            </a>
            <div className="flex flex-col ml-4">
              {writeups.map(({ title, href }) => (
                <a
                  key={title}
                  href={href}
                  className="text-base text-white no-underline border-l-2 border-primary pl-4 py-2"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a href="" className="text-xl text-white no-underline">
              Labs
            </a>
            <div className="flex flex-col ml-4 gap-2">
              {labs.map(({ title, href }) => (
                <a
                  key={title}
                  href={href}
                  className="text-base text-white no-underline border-l-2 border-primary pl-4 py-2"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a href="" className="text-xl text-white no-underline">
              Workshops
            </a>
            <div className="flex flex-col ml-4 gap-2">
              {workshops.map(({ title, href }) => (
                <a
                  key={title}
                  href={href}
                  className="text-base text-white no-underline border-l-2 border-primary pl-4 py-2"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <SheetFooter className="flex flex-row gap-2 justify-center sm:justify-center pt-4">
          <a href="https://github.com/ThamizhiniyanCS/" target="_blank">
            <svg
              className="text-primary"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Icons["github"] }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/thamizhiniyancs/"
            target="_blank"
          >
            <svg
              className="text-primary"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Icons["linkedin"] }}
            />
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CustomMobileNavigationMenu;
