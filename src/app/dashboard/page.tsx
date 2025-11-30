"use client";
import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { Separator } from "@/components/ui/separator"


import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const token = getToken();
  let username = "Guest";

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded.username) {
        username = decoded.username;
      }
    } catch (e) {
      console.error("Token decoding failed:", e);
    }
  }

  return (
    <>

<aside className="bg-white border float-left p-5 fixed"
  style={{ top: "48px", left: "0px", width: "215px", height: "800px" }}
>
   <ul className="-ml-5">
<div className = "relative left-4">
  <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
     <Image src="/bahay.png" alt="Homepage" width={28} height={28} className="inline-block float-left" />
   <span className = "relative left-5">Home</span>
  </li>

  <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
    <Image src="/shorts.png" alt="Homepage" width={28} height={28} className="inline-block float-left" />
    <span className = "relative left-5">
          <Link href="#" rel="noopener noreferrer">
                Shorts
          </Link>
    </span>
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
    <main className="ml-50 mt-10">

    <div className="sticky border border-white-600 bg-white rounded-lg">
  <h2 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight mb-2 p-5">
    Welcome, {username}
  </h2>

  {token && (
    <ContextMenu>
      <ContextMenuTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              Your bearer token
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            Right-click to view your token
          </TooltipContent>
        </Tooltip>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem>
          <pre className="scroll-m-20 text-sm font-semibold tracking-tight whitespace-pre-wrap">
            {token}
          </pre>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )}
</div>


<fieldset className="mt-10 border bg-white">
    <div className="inline-block pl-10 sticky top-12 bg-white rounded-lg w-322">
      <Button variant="secondary" className = "top-5">All</Button>
      <Button variant="outline" className = "top-5">Programming</Button>
      <Button variant="outline" className = "top-5">Web-Development</Button>
      <Button variant="outline" className = "top-5">Game Dev</Button>
      <Button variant="outline" className = "top-5">David Goggins</Button>
      <Button variant="outline" className = "top-5">Motivation</Button>
      <Button variant="outline" className = "top-5">90's music</Button>
      <Button variant="outline" className = "top-5">20's music</Button>
      <Button variant="outline" className = "top-5">Five Night's At Freddy's</Button>
      <Button variant="outline" className = "top-5">Japan pop rock</Button>
    </div>

    <div className = "mt-20">

      <figure className="pl-5 pb-5 rounded-md">
        <Image
          src="/every_breath_you take.jpg"
          alt="Homepage"
          width={400}
          height={400}
          className="inline-block rounded-md"
        />
        <figcaption className="h-20">
          <div className = "ml-1 m-2">
          <Avatar className="float-left">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="text-xl">
            <Link href="/Every_breath_you_take" rel="noopener noreferrer">
                          The Police- Every breath you take<br/>
                          </Link></span>

          <div className="inline-block text-gray-500 text-md">
            <span className="text-gray-500">Dela Cruz</span>
            <span className="text-gray-500 ml-3">1 views</span>
          </div>
          </div>
        </figcaption>
      </figure>

      <figure className="pl-5 pb-5 rounded-md">
        <Image
          src="/chest_pain.jpg"
          alt="Homepage"
          width={400}
          height={400}
          className="inline-block rounded-md"
        />
        <figcaption className="h-20">
          <div className = "ml-1 m-2">
          <Avatar className="float-left">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="text-xl">
            <Link href="/Chest_pain" rel="noopener noreferrer">
                          Malcom Todd- Chest Pain<br/>
                          </Link></span>

          <div className="inline-block text-gray-500 text-md">
            <span className="text-gray-500">Dela Cruz</span>
            <span className="text-gray-500 ml-3">1 views</span>
          </div>
          </div>
        </figcaption>
      </figure>


    </div>

  </fieldset>
</main>


    </>
  );
}
