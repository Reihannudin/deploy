import React, {Component, createRef, useEffect, useState} from 'react';
import Webcam from 'react-webcam';
import api from "../../Config/api";
import * as faceapi from "face-api.js";

function ActionAbsentFaceRecognition () {

    const [images, setImages] = useState([]);
    const [screenshot, setScreenShot] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("auth_token");
                const response = await api.get(`/get/image`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                await new Promise((resolve) => setTimeout(resolve, 1500));
                const data = response.data;
                setImages(data);
                setIsFetching(false);
            } catch (error) {
                setError(error);
                setIsFetching(false);
            }
        };

        fetchData();
    }, []);


    console.log(images);

    const webcamRef = createRef();

    const captureSelfie = async () => {
        if (webcamRef.current) {
            const screenshot = webcamRef.current.getScreenshot();

            // Use face-api.js to detect faces in the screenshot
            const detections = await faceapi.detectAllFaces(screenshot).withFaceLandmarks().withFaceDescriptors();

            if (detections.length > 0) {
                // Handle the captured image (e.g., save it, display it, etc.)
                console.log('Captured selfie:', screenshot);

                // Perform face recognition here by comparing detected faces with the images in your state (images)
                // You can use face-api.js to compute face descriptors and compare them with your stored images' descriptors
                // Update your logic here
            } else {
                console.log('No faces detected in the captured selfie.');
            }
        }
    }

        return (
            <>
                <div>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={640}
                        height={480}
                    />
                    <button onClick={captureSelfie}>Capture Selfie</button>
                </div>
                <div>
                    <img src={screenshot}/>
                    <img src={images}/>
                </div>
            </>
        );
    }

export default ActionAbsentFaceRecognition;
