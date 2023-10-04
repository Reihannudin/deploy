import {useEffect, useRef, useState} from "react";
import async from "async";
import * as faceapi from "face-api.js";
import api from "../../Config/api";
import {NavbarAbsentActionClassComponent} from "../../Components/Body/Nav/NavbarAbsentActionClassComponent";
import {ActionAbsentPasswordComponent} from "../../Components/Absent/ActionAbsentPassword.Component";

function ActionAbsentFaceRecognationPassword(){

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


    const videoRef = useRef(null);

    useEffect(() => {
        const loadModels = async() => {
            await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
            await faceapi.nets.faceRecognitionNet.loadFromUri('/models');

        }
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

    return(
        <>
            <div className="h-full" style={{ background:"#FFFFFF"}}>
                <NavbarAbsentActionClassComponent title={"Absensi kehadiran"} />
                <div className="w-full pb-5 mx-0 px-0 h-full " style={{ background:"#FFFFFF"}}>
                    <div  className="w-full">
                        <div className="w-full">
                            {/*<ActionAbsentPasswordComponent  user={user} status={item.absent_status} absent_id={id} slug={slug} name={item.absent_name} email={item.email} end_time={item.absent_deadline} date={item.absent_date} />*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ActionAbsentFaceRecognationPassword