import { useEffect, useState } from "react";
import { API } from "../../global";
import { Navigate, useNavigate } from "react-router-dom";
import "./courses.css"




export function Courses(){
    const navigate = useNavigate();
    const [courseData,setCourseData]=useState([]);


    let userDetails = localStorage.getItem("user");
    userDetails = userDetails && JSON.parse(userDetails);
    const token = userDetails && userDetails.token;


    async function getAllCourses(){
        const data = await fetch(`${API}/courses/getAllCourses`,{
            headers: {"x-auth-token" : token }
        }).then((data)=>data.json());
        setCourseData(data);
    }
    
    useEffect(()=>{
        getAllCourses();
    },[]);

    return localStorage.getItem("user") ? (
        <div className="allCoursesWraper" id="courses">
            {courseData.map((course, index) => {
                return (
                <div className="courseCard" key={course._id} onClick={() => navigate(`/courses/${course._id}`, {state:{courseData: courseData, course : course}})}>
                    <img src={course.coverPage} alt={course.course}/>
                    <div className='courseDescription'>
                    <h2>{course.course}</h2>
                    <p>{course.description}</p>
                    </div>
                </div>
                );
            })}
        </div>
    ) :
    (
        <Navigate to ="/login" />
    );
}
