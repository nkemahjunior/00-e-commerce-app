"use client";
import { Toaster } from "react-hot-toast";

function ReactHotToast() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 6000,
        },
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "#ffffff",
          color: "#000000",
        },
      }}
    />
  );
}

export default ReactHotToast;
