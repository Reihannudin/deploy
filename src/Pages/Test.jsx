import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

const FaceDetection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Load face-recognation-api.js models and weights
        const loadModels = async () => {
            await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
            await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        };

        // Start face-recognation detection
        const startFaceDetection = async () => {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;

                // Detect faces in the video stream
                const canvas = faceapi.createCanvasFromMedia(videoRef.current);
                document.body.append(canvas);
                const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
                faceapi.matchDimensions(canvas, displaySize);

                setInterval(async () => {
                    const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
                    const resizedDetections = faceapi.resizeResults(detections, displaySize);
                    canvas?.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
                    faceapi.draw.drawDetections(canvas, resizedDetections);
                    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
                }, 100);
            }
        };

        loadModels();
        startFaceDetection();
    }, []);

    return (
        <div>
            <h1>Face Detection</h1>
            <video ref={videoRef} autoPlay muted width="640" height="480" />
        </div>
    );
};

export default FaceDetection;
