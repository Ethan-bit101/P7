'use client';
import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import { ChevronsUpDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Sheet,
         SheetClose,
         SheetContent,
         SheetDesription,
         SheetFooter,
         SheetHeader,
         SheetTitle,
         SheetTrigger,
        } from "@/components/ui/sheet";

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
                <Separator/>
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

             <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/movies.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">History</span>
             </li>
            <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/history.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Playlist</span>
             </li>


             <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/music.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Watch later</span>
             </li>

             <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/gaming.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Liked videos</span>
             </li>

       <Separator/>
       <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
               More from Youtube
               </h4>
                <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Youtube Premium</span>
             </li>
             <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/yt-studio.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Youtube Studio</span>
             </li>
             <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/yt-music.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Youtube Music</span>
             </li>
             <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/yt-kids.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Youtube kids</span>
             </li>
             </ul>
       <Separator/>
              <ul className = "relative top-6">
             <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/download.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Downloads</span>
             </li>
              <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/feedback.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Send Feedback</span>
             </li>
              <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
               <Image src="/about.png" alt="Homepage" width={28} height={28} className="inline-block" />
               <span className = "relative left-5">Help</span>
             </li>
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
       <div className="absolute left-250">
                <Image
                  src="/microphone.png"
                  alt="Microphone"
                  width={25}
                  height={25}
                  className="inline-block"
                />
              </div>

      <div className = "relative left-40">
                <Popover>
        <PopoverTrigger asChild>
                <Button variant = "outline">Create<span className = "text-2xl">+</span></Button>

        </PopoverTrigger>
        <PopoverContent>
               <ul>
                <li>Upload Video</li>
                <li>Go live</li>
                <li>Create post</li>
               </ul>
          </PopoverContent>
      </Popover>
              </div>

      <Popover >
        <PopoverTrigger className = "mb-7">
          <Image
                src="/notification.png"
                alt="Notifications"
                width={30}
                height={30}
                className="absolute" style={{ left: "1400px" }}
              />
      </PopoverTrigger>
        <PopoverContent className = "relative top-8 left-20 w-50 cursor-pointer">
           <h4 className="scroll-m-20 text-md text-center font-semibold tracking-tight">
            Notification
          </h4>

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
     <div className = "float-right relative top-4 left-[-50px] w-100">
    <div className = "bg-white rounded-sm">
    <figure className = " inline-block">
      <Link href="/walking_back_home" rel="noopener noreferrer">

      <Image src="/walking_back_home.jpg" alt="Homepage" width={150} height={150} className="rounded-md inline-block" />
      <figcaption className='absolute inline-block relative left-2 top-[18]'>
        <span>Fur- Walking back home</span><br/>
        <span className = "text-small text-gray-500">Ethan-bytes101001</span><br/>
      <span className = "text-small text-gray-500">3M views</span><br/>
        </figcaption></Link>
    </figure>
    <figure className = "inline-block">
      <Link href="/about_you" rel="noopener noreferrer">

      <Image src="/about_you.jpg" alt="Homepage" width={150} height={150} className="rounded-md inline-block" />
      <figcaption className='absolute inline-block relative left-2 top-[18]'><span>The 1975- About you</span><br/>
      <span className = "text-small text-gray-500">Ethan-bytes101001</span><br/>
      <span className = "text-small text-gray-500">3M views</span><br/>
      </figcaption></Link>
    </figure>
    <figure className = "inline-block">
      <Link href="/without_you" rel="noopener noreferrer">

      <Image src="/without_you.jpg" alt="Homepage" width={150} height={150} className="rounded-md inline-block" />
      <figcaption className='absolute inline-block relative left-2 top-[18]'><span>Air Supply- Without you</span><br/>
      <span className = "text-small text-gray-500">Ethan-bytes101001</span><br/>
      <span className = "text-small text-gray-500">3M views</span><br/>
      </figcaption></Link>
    </figure>
        <figure className = "inline-block">
      <Link href="/without_you" rel="noopener noreferrer">

      <Image src="/wasted.jpg" alt="Homepage" width={150} height={150} className="rounded-md inline-block" />
      <figcaption className='absolute inline-block relative left-2 top-[18]'><span>Juice Wrld, Lil Uzi Vert- Wasted</span><br/>
      <span className = "text-small text-gray-500">Ethan-bytes101001</span><br/>
      <span className = "text-small text-gray-500">3M views</span><br/>
      </figcaption></Link>
    </figure>
            <figure className = " inline-block">
      <Link href="/end_of_beginning" rel="noopener noreferrer">

      <Image src="/end_of_beginning.jpg" alt="Homepage" width={150} height={150} className="rounded-md inline-block" />
      <figcaption className='absolute inline-block relative left-2 top-[18]'>
        <span>Djo- End of Beginning</span><br/>
      <span className = "text-small text-gray-500">Ethan-bytes101001</span><br/>
      <span className = "text-small text-gray-500">3M views</span><br/>
      </figcaption></Link>
    </figure>
    <figure className = "inline-block">
      <Link href="/your_song" rel="noopener noreferrer">

      <Image src="/your_song.jpg" alt="Homepage" width={150} height={150} className="rounded-md inline-block" />
      <figcaption className='absolute inline-block relative left-2 top-[18]'>
        <span>Parokya ni Edgar- Your song</span><br/>
      <span className = "text-small text-gray-500">Ethan-bytes101001</span><br/>
      <span className = "text-small text-gray-500">3M views</span><br/>
      </figcaption></Link>
    </figure>
        <figure className = " inline-block">
      <Link href="/foolish_heart" rel="noopener noreferrer">

      <Image src="/foolish_heart.jpg" alt="Homepage" width={150} height={150} className="rounded-md inline-block" />
      <figcaption className='absolute inline-block relative left-2 top-[18]'>
        <span>Steve Perry- Foolish Heart</span><br/>
      <span className = "text-small text-gray-500">Ethan-bytes101001</span><br/>
      <span className = "text-small text-gray-500">3M views</span><br/>
      </figcaption></Link>
    </figure>
    </div>

      </div>
   <main className="ml-[50px]">

      <fieldset className = "relative bottom-[-30px]">
        <figure>

      <iframe width="905" height="500" src="https://www.youtube.com/embed/LtDwJGncHcA?si=SMfFokX5OtF_PjQK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <figcaption className = "relative top-2">

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Cup of Joe- Multo
    </h3>
    <div className = "relative top-[0px] flex p-1 items-center justify-between">

       <Avatar className="float-left">
                   <AvatarImage src="https://github.com/shadcn.png" />
                   <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4 className="ml-[-60] inline-block scroll-m-20 text-xl font-semibold tracking-tight">
     Ethan-bytes101001
      <Badge
          variant="secondary"
          className="inline-block bg-blue-500 text-white dark:bg-blue-600"
        >
          <BadgeCheckIcon />
      </Badge>
    </h4>
      <Button variant = "destructive" className = "right-10 relative">Subscribe</Button>

    <Image src="/like.png" alt="Like" width={20} height={20} className="inline-block" />
    <Image src="/dont-like.png" alt="Like" width={20} height={20} className="inline-block" />
      <div>
      <Button variant = "outline">Share</Button>
      <Button variant = "outline">Ask</Button>
      <Button variant = "outline">Download</Button>
      <Button variant = "outline">...</Button>
      </div>
    </div>
    </figcaption>
      </figure>
      <h4 className="scroll-m-20 text-small font-semibold tracking-tight">
      3M views 4 months ago
    </h4>
      </fieldset>
    </main>
    </div>
  );
}

