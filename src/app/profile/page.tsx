'use client';
import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"

import { Sheet,
         SheetClose,
         SheetContent,
         SheetDescription,
         SheetFooter,
         SheetHeader,
         SheetTitle,
         SheetTrigger,
        } from "@/components/ui/sheet";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DashboardLayout({children}: {
    children: React.ReactNode;
}) {
  const router = useRouter();
  const token = getToken();

  if (!token) {
    router.push('/login');
    return null;
  }

  function handleLogout() {
    logoutUser();
    router.push('/login');
  }

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}



  return (
    <div className="p-6">
      <div className="shadow-xl border flex p-1 items-center justify-between fixed bg-white top-0 left-0 right-0 z-50">

        <div className="relative left-4 pr-15">
          <Sheet >
      <SheetTrigger asChild>
         <Image
         src="/menu.png"
         alt="Like"
         width={25}
         height={25}
         className="inline-block cursor-pointer" />

      </SheetTrigger>
      <SheetContent side = "left" className = "opacity-90 w-[400px] sm:w-[240px]">
        <SheetHeader>
          <ul className="-ml-5 mt-0">
     <div className = "relative left-4">
      <Link href="/dashboard" rel="noopener noreferrer">
          <Image
            src="/youtube.png"
            alt="YouTube Logo"
            width={37}
            height={37}
            className="inline-block relative left-5"
          />
          <h1 className="inline-block text-2xl font-bold left-7 relative">
            Youtube<sup className="text-sm">PH</sup>
          </h1>
          </Link>
          <ul>
       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
          <Image src="/bahay.png" alt="Homepage" width={28} height={28} className="inline-block float-left" />
        <span className = "relative left-5">
                    <Link href="/dashboard" rel="noopener noreferrer">
                          Home
                    </Link>
        </span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/shorts.png" alt="Homepage" width={28} height={28} className="inline-block float-left" />
         <span className = "relative left-5">Shorts</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/subscription.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Subscription</span>
       </li>


       <Separator />
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Explore
         </h4>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/trending.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Trending</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/music.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Music</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/movies.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Movies</span>
       </li>
      <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/history.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">History</span>
       </li>


       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/music.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Music</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/gaming.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Gaming</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">News</span>
       </li>
       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Sports</span>
       </li>
       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Fashion & Beauty</span>
       </li>
       <Separator />
        </ul>
     </div>
       </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
          <Link href="/dashboard" rel="noopener noreferrer">
          <Image
            src="/youtube.png"
            alt="YouTube Logo"
            width={37}
            height={37}
            className="inline-block relative left-5"
          />
          <h1 className="inline-block text-2xl font-bold left-7 relative">
            Youtube<sup className="text-sm">PH</sup>
          </h1>
          </Link>
        </div>
    <Popover>
                   <PopoverTrigger asChild>
                     <ButtonGroup
                       className="relative cursor-pointer"
                       style={{ right: "30px" }}
                     >
                       <Input
                         placeholder="Search..."
                         className="w-150 h-10 rounded-r-none"
                         />

                       <Button
                         variant="outline"
                         aria-label="Search"
                         className="h-10 hover:bg-gray-100 rounded-l-none"
                       >
                         <SearchIcon />
                       </Button>
                     </ButtonGroup>
                   </PopoverTrigger>

                   <PopoverContent className="p-0 relative left-[-175]">
                     <Command className=" rounded-lg border shadow-md md:min-w-[640px]">
                         <CommandList>
                         <CommandEmpty>No results found.</CommandEmpty>

                           <CommandItem>
                             <span><Link href="/multo" rel="noopener noreferrer">Multo</Link></span>
                           </CommandItem>

                           <CommandItem>
                             <span><Link href="/about_you" rel="noopener noreferrer">About you</Link></span>
                           </CommandItem>

                           <CommandItem>
                             <span><Link href="/walking_back_home" rel="noopener noreferrer">Walking back home</Link></span>
                           </CommandItem>

                           <CommandItem>
                             <span><Link href="/foolish_heart" rel="noopener noreferrer">Foolish Heart</Link></span>
                           </CommandItem>

                           <CommandItem>
                             <span><Link href="/end_of_beginning" rel="noopener noreferrer">End of Beginning</Link></span>
                           </CommandItem>
                       </CommandList>
                     </Command>
                   </PopoverContent>
                 </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger className="top-4">
            <Image
              src="/profile-user.png"
              alt="Profile"
              width={32}
              height={32}
              className="mr-7 inline-block cursor-pointer"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link href="/profile" rel="noopener noreferrer">Profile</Link>
            </DropdownMenuLabel>

            <DropdownMenuLabel>
              <Link href="/positions" rel="noopener noreferrer">Positions</Link>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href="/register" rel="noopener noreferrer">
                <Button variant="destructive" onClick={handleLogout}>Logout</Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
   <main className="ml-[80px] mt-15">
    <div className = "bg-[url('/bscs-2a.jpg')] bg-cover bg-top rounded-lg h-55 w-335 border border-black text-center"></div>
    <div className = "">
      <div className = "">
        <Avatar className="inline-block w-40 h-40 float-left">
                   <AvatarImage src="https://github.com/shadcn.png" />
                   <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
          Ethan-bytes101001
        </h1>
        <p className = "inline-block">@Ethan</p>
        <p className = "inline-block">500K subscribers</p>
        <p className = "inline-block">12 videos</p>
      </div>
    </div>
    </main>
    <section className = "text-left relative top-30">

      <Separator />
        <div className = "relative right-35 space-x-10 p-3">
          <span className = "font-bold underline inline-block cursor-pointer hover:underline">Home</span>
          <span className = "font-bold inline-block cursor-pointer hover:underline">Videos</span>
          <span className = "font-bold inline-block cursor-pointer hover:underline">Shorts</span>
        </div>
        <div className = "relative right-35 space-x-10 p-3">

        <h3 className="inlinr-block scroll-m-20 text-2xl font-semibold tracking-tight">
        Videos
        </h3>
        </div>
        <fieldset className = "ml-22">
          <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out border-none">
                <figure className="p-5 rounded-md">
                  <Image
                    src="/foolish_heart.jpg"
                    alt="Homepage"
                    width={300}
                    height={300}
                    className="object-cover inline-block rounded-md"
                  />
                  <figcaption className="h-20">
                    <div className = "ml-1 m-2">
                    <span className="text-small relative left-3">
                      <Link href="/foolish_heart" rel="noopener noreferrer">
                                    Foolish Heart<br/>
                                    </Link></span>

                    <div className="relative left-3 inline-block text-gray-500 text-md">
                      <span className="text-gray-500">10M views</span>
                      <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
                      <span className="text-gray-500 ml-3">1 month ago</span>
                    </div>
                    </div>
                  </figcaption>
                </figure>
                </div>
                <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out border-none">
                <figure className="p-5 rounded-md">
                  <Image
                    src="/about_you.jpg"
                    alt="Homepage"
                    width={300}
                    height={300}
                    className="object-cover inline-block rounded-md"
                  />
                  <figcaption className="h-20">
                    <div className = "ml-1 m-2">
                    <span className="text-small relative left-3">
                      <Link href="/about_you" rel="noopener noreferrer">
                                    About you<br/>
                                    </Link></span>

                    <div className="relative left-3 inline-block text-gray-500 text-md">
                      <span className="text-gray-500">10M views</span>
                      <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
                      <span className="text-gray-500 ml-3">7 month ago</span>
                    </div>
                    </div>
                  </figcaption>
                </figure>
                </div>
                <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out border-none">
                <figure className="p-5 rounded-md">
                  <Image
                    src="/end_of_beginning.jpg"
                    alt="Homepage"
                    width={300}
                    height={300}
                    className="object-cover inline-block rounded-md"
                  />
                  <figcaption className="h-20">
                    <div className = "ml-1 m-2">
                    <span className="text-small relative left-3">
                      <Link href="/end_of_beginning" rel="noopener noreferrer">
                                    End of Beginning<br/>
                                    </Link></span>

                    <div className="relative left-3 inline-block text-gray-500 text-md">
                      <span className="text-gray-500">5M views</span>
                      <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
                      <span className="text-gray-500 ml-3">10 month ago</span>
                    </div>
                    </div>
                  </figcaption>
                </figure>
                </div>
                <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out border-none">
                <figure className="p-5 rounded-md">
                  <Image
                    src="/walking_back_home.jpg"
                    alt="Homepage"
                    width={300}
                    height={300}
                    className="object-cover inline-block rounded-md"
                  />
                  <figcaption className="h-20">
                    <div className = "ml-1 m-2">
                    <span className="text-small relative left-3">
                      <Link href="/walking_back_home" rel="noopener noreferrer">
                                    Walking back home<br/>
                                    </Link></span>

                    <div className="relative left-3 inline-block text-gray-500 text-md">
                      <span className="text-gray-500">10M views</span>
                      <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
                      <span className="text-gray-500 ml-3">5 month ago</span>
                    </div>
                    </div>
                  </figcaption>
                </figure>
                </div>
                                <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out border-none">
                <figure className="p-5 rounded-md">
                  <Image
                    src="/multo.jpg"
                    alt="Homepage"
                    width={300}
                    height={300}
                    className="object-cover inline-block rounded-md"
                  />
                  <figcaption className="h-20">
                    <div className = "ml-1 m-2">
                    <span className="text-small relative left-3">
                      <Link href="/multo" rel="noopener noreferrer">
                                    Multo<br/>
                                    </Link></span>

                    <div className="relative left-3 inline-block text-gray-500 text-md">
                      <span className="text-gray-500">3M views</span>
                      <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
                      <span className="text-gray-500 ml-3">4 month ago</span>
                    </div>
                    </div>
                  </figcaption>
                </figure>
                </div>
                                <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out border-none">
                <figure className="p-5 rounded-md">
                  <Image
                    src="/wasted.jpg"
                    alt="Homepage"
                    width={300}
                    height={300}
                    className="object-cover inline-block rounded-md"
                  />
                  <figcaption className="h-20">
                    <div className = "ml-1 m-2">
                    <span className="text-small relative left-3">
                      <Link href="/walking_back_home" rel="noopener noreferrer">
                                    Wasted<br/>
                                    </Link></span>

                    <div className="relative left-3 inline-block text-gray-500 text-md">
                      <span className="text-gray-500">2M views</span>
                      <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
                      <span className="text-gray-500 ml-3">10 month ago</span>
                    </div>
                    </div>
                  </figcaption>
                </figure>
                </div>
                                <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out border-none">
                <figure className="p-5 rounded-md">
                  <Image
                    src="/your_song.jpg"
                    alt="Homepage"
                    width={300}
                    height={300}
                    className="object-cover inline-block rounded-md"
                  />
                  <figcaption className="h-20">
                    <div className = "ml-1 m-2">
                    <span className="text-small relative left-3">
                      <Link href="/walking_back_home" rel="noopener noreferrer">
                                    Your song<br/>
                                    </Link></span>

                    <div className="relative left-3 inline-block text-gray-500 text-md">
                      <span className="text-gray-500">10M views</span>
                      <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
                      <span className="text-gray-500 ml-3">5 years ago</span>
                    </div>
                    </div>
                  </figcaption>
                </figure>
                </div>
                                <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out border-none">
                <figure className="p-5 rounded-md">
                  <Image
                    src="/without_you.jpg"
                    alt="Homepage"
                    width={300}
                    height={300}
                    className="object-cover inline-block rounded-md"
                  />
                  <figcaption className="h-20">
                    <div className = "ml-1 m-2">
                    <span className="text-small relative left-3">
                      <Link href="/without_you" rel="noopener noreferrer">
                                    Without you<br/>
                                    </Link></span>

                    <div className="relative left-3 inline-block text-gray-500 text-md">
                      <span className="text-gray-500">10M views</span>
                      <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
                      <span className="text-gray-500 ml-3">10 month ago</span>
                    </div>
                    </div>
                  </figcaption>
                </figure>
                </div>
                                <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out border-none">
                <figure className="p-5 rounded-md">
                  <Image
                    src="/every_breath_you take.jpg"
                    alt="Homepage"
                    width={300}
                    height={300}
                    className="object-cover inline-block rounded-md"
                  />
                  <figcaption className="h-20">
                    <div className = "ml-1 m-2">
                    <span className="text-small relative left-3">
                      <Link href="/walking_back_home" rel="noopener noreferrer">
                                    Every breath you take<br/>
                                    </Link></span>

                    <div className="relative left-3 inline-block text-gray-500 text-md">
                      <span className="text-gray-500">500K views</span>
                      <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
                      <span className="text-gray-500 ml-3">1 month ago</span>
                    </div>
                    </div>
                  </figcaption>
                </figure>
                </div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Shorts
                </h3>
        </fieldset>
      </section>
    </div>
  );
}

