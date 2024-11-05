"use client";

import { useLogOut } from "@/app/(noAuth)/login/useLogout";

import Link from "next/link";
import { useGetUser } from "./useGetUser";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GlobalLoading from "@/ui/GlobalLoading";

function AdminLinks() {
  // const {data:{user},error} = await supabase.auth.getUser();

  const router = useRouter();
  const origin = window.location.origin;
  const { logout, isLoading: load, isSuccess } = useLogOut(origin);
  const { data: user, isLoading } = useGetUser();
  const [refreshing, setRefreshing] = useState(false);
  // const [active,setActive] = useState(false)
  // const [admin,setAdmin] = useState(false)

  let active = false;
  let admin = false;
  if (user?.user !== null) {
    // setActive(true)
    active = true;
    if (user?.user?.user_metadata?.isAdmin === true) admin = true;
  }

  if (refreshing) return <GlobalLoading />;
  return (
    <ul className="space-y-5 md:space-y-1">
      {!active && (
        <Link
          href={`/signup?redirect=${location.pathname}${location.search}`}
          className="block"
        >
          <li className="capitalize font-semibold  ">sign up</li>
        </Link>
      )}

      {!active ? (
        <Link
          href={`/login?redirect=${location.pathname}${location.search}`}
          className="block"
        >
          <li className="capitalize font-semibold ">sign in</li>
        </Link>
      ) : (
        <li
          className="capitalize font-semibold  md:hover:text-red-500"
          onClick={() => logout()}
        >
          {load ? "logging Out.." : "logout"}
        </li>
      )}

      {admin && (
        <Link href={"/admin"} className="block">
          <li className="capitalize font-semibold  md:hover:text-red-500">
            {" "}
            admin dashboard
          </li>
        </Link>
      )}
    </ul>
  );
}

export default AdminLinks;
