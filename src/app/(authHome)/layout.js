import Footer from "@/ui/footer/Footer";
import BothHeaders from "@/ui/headerFeature/BothHeaders";
import ReactQueryProvider from "./ReactQueryProvider";
import ReactHotToast from "./ReactHotToast";
import ShoppingCart from "@/ui/ShoppingCart";
import ReduxProvider from "./Redux";
import NumberOfItemsOnMount from "@/ui/NumberOfItemsOnMount";

// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { revalidatePath } from 'next/cache'

export default async function RootLayout({ children }) {
  // const supabase = createServerComponentClient({cookies});

  // const {data:{ session }} = await supabase.auth.getSession();

  // if(!session) {
  //     redirect('/login')
  // }

  return (
    <div>
      <ReactQueryProvider>
        <ReduxProvider>
          <ReactHotToast />
          <NumberOfItemsOnMount />
          <BothHeaders />
          <ShoppingCart />

          {children}

          <Footer />
        </ReduxProvider>
      </ReactQueryProvider>
    </div>
  );
}
