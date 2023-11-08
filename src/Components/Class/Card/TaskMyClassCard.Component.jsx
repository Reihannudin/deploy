import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

import CustomAlert from "../../Helper/CustomAlert.Component";
import {AbsentMyTaskClassCardHelper} from "./Helper/AbsentMyTaskClassCard.Helper";
import {AssignmentMyTaskClassCardHelper} from "./Helper/AssignmentMyTaskClassCard.Helper";
import {ResourceMyTaskClassCardHelper} from "./Helper/ResourceMyTaskClassCard.Helper";

export const TaskMyClassCardComponent = (props) => {
    const {id  ,slug} = useParams();

    const [windowWidth , setWindowWidth] = useState(window.innerWidth);
    const [showAlert, setShowAlert] = useState(false);
    const [urlCopied , setUrlCopied] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    } , []);

    const urlAbsent = window.location.href;

    const definedUrlAbsent = `/view/${slug}/detail/absent/${props.id}`;
    const inputRefAbsent = useRef(null);

    const copyUrlAbsent = () => {
        if (inputRefAbsent.current) {
            setShowAlert(true);
            inputRefAbsent.current.value = definedUrlAbsent;
            setUrlCopied(definedUrlAbsent)
            inputRefAbsent.current.select();
            document.execCommand('copy');
        }
    };

    const truncatedName = props.name.length > 24 ? `${props.name.slice(0, 23)}...` : props.name;

    const [isDropdownMenu , setIsDropdownMenu] = useState(true);
    const [error, setError] = useState("");



    const navigate = useNavigate();

    // Copy Assignment
    const urlAssignment = window.location.href;

    const definedUrlAssignment = `/view/${slug}/detail/assignment/${props.id}`
    const inputRefAssignment = useRef(null);

    const copyUrlAssignment = () => {
        if (inputRefAssignment.current) {
            setShowAlert(true);
            inputRefAssignment.current.value = definedUrlAssignment;
            setUrlCopied(definedUrlAssignment)
            inputRefAssignment.current.select();
            document.execCommand('copy');
        }
    };




    const urlResource = window.location.href;

    const definedUrlResource = `/view/${slug}/detail/resource/${props.id}`;
    const inputRefResource = useRef(null);

    const copyUrlResource = () => {
        if (inputRefResource.current) {
            setShowAlert(true);
            inputRefResource.current.value = definedUrlResource;
            setUrlCopied(definedUrlResource)
            inputRefResource.current.select();
            document.execCommand('copy');
        }
    };


    useEffect(() => {
        if (error) {
            navigate(`/view/my/class/${id}/${slug}`);
        }
    }, [error, navigate]);


    return(
        <>
            <div className="mb-10">
                {props.type  === "absent" ? (
                    <div >
                        <AbsentMyTaskClassCardHelper
                            id={id} slug={slug} navigate={navigate}
                            absentId={props.id} absentStatus={props.status} absentEndTime={props.end_time} absentDate={props.date}
                            absentName={props.name} absentPostTime={props.post_time}
                            isDropdownMenu={isDropdownMenu} setIsDropdownMenu={setIsDropdownMenu}
                            copyUrlAbsent={copyUrlAbsent} inputRefAbsent={inputRefAbsent} urlAbsent={urlAbsent}
                        />
                    </div>
                ) : (props.type === "assignment") ? (
                    <AssignmentMyTaskClassCardHelper
                        id={id} slug={slug} navigate={navigate}
                        assignmentId={props.id} assignmentStatus={props.status} assignmentEndTime={props.end_time} assignmentDate={props.date}
                        assignmentName={props.name} assignmentPostTime={props.post_time}
                        isDropdownMenu={isDropdownMenu} setIsDropdownMenu={setIsDropdownMenu}
                        copyUrlAssignment={copyUrlAssignment} inputRefAssignment={inputRefAssignment} urlAssignment={urlAssignment}
                    />
                ) : (
                    <ResourceMyTaskClassCardHelper
                        id={id} slug={slug} navigate={navigate}
                        resourceId={props.id} resourceStatus={props.status} resourceEndTime={props.end_time} resourceDate={props.date}
                        resourceName={props.name} resourcePostTime={props.post_time}
                        isDropdownMenu={isDropdownMenu} setIsDropdownMenu={setIsDropdownMenu}
                        copyUrlResource={copyUrlResource} inputRefResource={inputRefResource} urlResource={urlResource}
                    />
                )}
            </div>

            {showAlert && (
                <div id="drop-action" className="fixed inset-0 flex items-center justify-center"  style={{ zIndex: "10000" }}>
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <button
                        onClick={() => setShowAlert(false)} // Close the alert when clicking the backdrop
                        className="bg-gray-500 bg-opacity-30 w-full h-full fixed top-0 left-0"
                        style={{ zIndex: "10000" }}
                    ></button>

                    <CustomAlert
                        message={`${urlCopied}`}
                        onClose={() => setShowAlert(false)} // Close the alert when using the custom alert's close button
                    />
                </div>
            )}
        </>
    )
}
