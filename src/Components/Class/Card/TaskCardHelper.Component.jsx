import {TaskCardComponent} from "./TaskCard.Component";
import React from "react";

export const TaskCardHelperComponent = ({absent , assignment}) => {
    return(
        <>
            <div className="sm:gap-3  md:gap-6 lg:gap-3 gap-2 md:my-4 my-2 flex flex-wrap">
                {absent.map((item) => {
                    return(
                        <TaskCardComponent
                            name={item.absent_name}
                            status={item.absent_status}
                            action={item.action}
                            teacher={item.absent_teacher}
                            type={item.type}
                            date={item.absent_date}
                            created_at={item.created_at}
                            deadline={item.absent_deadline}
                            // post_time={item.post_time}

                        />
                    )
                })}
            </div>
            <div>
                {assignment.map((item) => {
                    return(
                    <TaskCardComponent
                        name={item.assignment_name}
                        status={item.assignment_status}
                        action={item.action}
                        teacher={item.assignment_teacher}
                        type={item.type}
                        assignment_time={item.assignment_time}
                        date={item.assignment_date}
                        created_at={item.created_at}
                        deadline={item.assignment_deadline}

                    />
                )
                })}
            </div>

        </>
    )
}