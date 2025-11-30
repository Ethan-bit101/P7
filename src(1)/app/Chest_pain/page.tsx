'use client';
import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"


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

        <div className="relative left-0 pr-15">
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

        <ButtonGroup className="relative" style={{ right: "30px" }}>
          <Input placeholder="Search..." className="w-120 h-10" />
          <Button variant="outline" aria-label="Search" className="h-10 hover:bg-gray-100">
            <SearchIcon />
          </Button>
        </ButtonGroup>

        <div className="absolute" style={{ left: "1080px" }}>
          <Image
            src="/microphone.png"
            alt="Microphone"
            width={25}
            height={25}
            className="inline-block"
          />
        </div>

        <Image
          src="/notification.png"
          alt="Notifications"
          width={30}
          height={30}
          className="absolute" style={{ left: "1400px" }}
        />

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
              <Link href="#" rel="noopener noreferrer">Profile</Link>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Your token</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="leading-none font-medium">{token}</h4>
                      <p className="text-muted-foreground text-sm">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href="/register" rel="noopener noreferrer">
                <Button variant="destructive" onClick={handleLogout}>Logout</Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>

     <aside className="bg-white border float-left p-5 fixed"
            style={{ top: "48px", left: "0px", width: "215px", height: "800px" }}
          >
             <ul className="-ml-5">
          <div className = "relative left-4">
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

          </div>
            </ul>

          </aside>
     <div className = "float-right relative top-10 left-4 w-94">
             <Button variant="outline" className = "">Programming</Button>
             <Button variant="outline" className = "">Web-Development</Button>
             <Button variant="outline" className = "">Game Dev</Button>
    <div className = "border">
    <figure className = "inline-block">
      <Link href="/Every_breath_you_take" rel="noopener noreferrer">
      <Image src="/every_breath_you take.jpg" alt="Homepage" width={120} height={120} className="inline-block" />
      <figcaption className='inline-block'>The Police- Every breath you take</figcaption></Link>
    </figure>
    </div>

      </div>
   <main className="ml-[200px]">

      <fieldset className = "relative bottom-[-40px]">
        <figure>

      <iframe width="905" height="500" src="https://www.youtube.com/embed/Q_nxgjIY6qQ?si=OUEAuIzh4UtUNHL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <figcaption>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Malcomm Todd- Chest Pain
    </h3>
    <div className = "flex p-1 items-center justify-between">
      <div className = "w-90">
        <Avatar className="inline-block">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h4 className="inline-block scroll-m-20 text-xl font-semibold tracking-tight">
      Dela Cruz
      <Badge
          variant="secondary"
          className="inline-block bg-blue-500 text-white dark:bg-blue-600"
        >
          <BadgeCheckIcon />
      </Badge>
    </h4>
      <Button variant = "destructive">Subscribe</Button>
    </div>
    <Image src="/like.png" alt="Like" width={28} height={28} className="inline-block" />
    <Image src="/dont-like.png" alt="Like" width={28} height={28} className="inline-block" />
      <div>
      <Button variant = "outline">Share</Button>
      <Button variant = "outline">Ask</Button>
      <Button variant = "outline">Download</Button>
      <Button variant = "outline">...</Button>
      </div>
    </div>
    </figcaption>
      </figure>

      </fieldset>
      <div className = "float-right">

      </div>
    </main>
    </div>
  );
}
