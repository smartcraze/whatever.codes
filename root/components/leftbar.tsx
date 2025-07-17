import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, NavMenu } from "@/components/navbar";
import { Button } from "./ui/button";
import { AlignLeftIcon } from "lucide-react";
import { FooterButtons } from "./footer";
import { DialogTitle } from "./ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import DocsMenu from "./docs-menu";

export function Leftbar() {
  return (
    <aside className="md:flex hidden w-[20rem] sticky top-16 flex-col h-[93.75vh] overflow-y-auto">
      <ScrollArea className="py-4 px-4 ">
        <DocsMenu />
      </ScrollArea>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col p-2">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader className="px-4 py-3">
          <SheetClose asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="flex-1 px-4">
          <div className="flex flex-col gap-5 pb-4">
            <NavMenu isSheet />
            <DocsMenu isSheet />
          </div>
        </ScrollArea>
        <div className="border-t mt-auto px-4 py-3">
          <FooterButtons />
        </div>
      </SheetContent>
    </Sheet>
  );
}
