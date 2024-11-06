import ReactHotToast from "../(authHome)/ReactHotToast";
import ReactQueryProvider from "../(authHome)/ReactQueryProvider";

export default function RootLayout({ children }) {
  return (
    <div>
      <ReactQueryProvider>
        <ReactHotToast />
        {children}
      </ReactQueryProvider>
    </div>
  );
}
