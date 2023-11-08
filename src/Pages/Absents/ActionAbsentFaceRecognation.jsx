import React, {Component, createRef, useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import api from "../../Config/api";
import * as faceapi from "face-api.js";

function ActionAbsentFaceRecognition () {


    const [user , setUser] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        let isMounted = true;
        const fetchData = async () => {
            try {
                if (!isDataFetched) {
                    const response = await api.get(`/user`);
                    await new Promise((resolve) => setTimeout(resolve, 1500));

                    const data = response.data;
                    if (isMounted) {
                        setUser(data);
                        setIsDataFetched(true);
                    }
                }
                setIsFetching(false);
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsFetching(false);
                }
            }
        }

        const timeout = setTimeout(() => {
            if (isFetching) {
                if (isMounted) {
                    setError(new Error("Timeout: Could not fetch data."));
                    setIsFetching(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    } , [user])

        return (
            <>
                {isFetching ? (
                    <h2>Sedang mengambil data</h2>

                ): !isDataFetched ? (
                    <div>
                        <h2>Sedang mengambil data</h2>
                    </div>
                ) : (
                  <div>
                      {user.image_verify === null ? (
                          <div>
                              <h2>Kamu harus mengambil gambar dirimus terlebih dahulu</h2>
                          </div>
                      ): (
                          <>
                              <div>
                                  <h2>Kamu bisa langsung absent</h2>
                              </div>
                          </>
                      )}
                  </div>
                )}
            </>
        );
    }




export default ActionAbsentFaceRecognition;
//
//
// const [images, setImages] = useState([]);
// const [screenshot, setScreenShot] = useState([]);
// const [isFetching, setIsFetching] = useState(true);
// const [error, setError] = useState(null);
//
// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const token = localStorage.getItem("auth_token");
//             const response = await api.get(`/get/image`, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//
//             await new Promise((resolve) => setTimeout(resolve, 1500));
//             const data = response.data;
//             setImages(data);
//             setIsFetching(false);
//         } catch (error) {
//             setError(error);
//             setIsFetching(false);
//         }
//     };
//
//     fetchData();
// }, []);
//
//
// console.log(images);
//
// const webcamRef = createRef();
//
// const captureSelfie = async () => {
//     if (webcamRef.current) {
//         const screenshot = webcamRef.current.getScreenshot();
//
//         // Use face-api.js to detect faces in the screenshot
//         const detections = await faceapi.detectAllFaces(screenshot).withFaceLandmarks().withFaceDescriptors();
//
//         if (detections.length > 0) {
//             // Handle the captured image (e.g., save it, display it, etc.)
//             console.log('Captured selfie:', screenshot);
//
//             // Perform face recognition here by comparing detected faces with the images in your state (images)
//             // You can use face-api.js to compute face descriptors and compare them with your stored images' descriptors
//             // Update your logic here
//         } else {
//             console.log('No faces detected in the captured selfie.');
//         }
//     }
// }
