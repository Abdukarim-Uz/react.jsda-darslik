import { useContext, useRef, useState } from "react"
import { StateContext } from "../../../App"

function Page() {

    return (
        <div className="container p-5 text-2xl text-white mx-auto" >

        </div>
    )
}

export default Page

// import { useRef, useEffect } from "react";

// function Camera() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Kamera oqimini so'rash
//     async function startCamera() {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (err) {
//         console.error("Kamera ochilmadi: ", err);
//       }
//     }

//     startCamera();

//     // Cleanup: komponent unmount bo‘lganda streamni to‘xtatish
//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         const tracks = videoRef.current.srcObject.getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <video ref={videoRef} autoPlay playsInline className="w-full max-w-md border" />
//     </div>
//   );
// }

// export default Camera;
