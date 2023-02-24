import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sideNavbar.css";


export function SideNavbar({onClick, type}){

    const navigate = useNavigate();
    const [showNavBar, setNavBarVisibility] = useState(false);


    const handleMouseEnter = () => {
        setNavBarVisibility(true);
    }

    const handleMouseLeave = () => {
        setNavBarVisibility(false);
    }


    return(
        <div id="sideNavBar" className={showNavBar ? "navBarContainer" : "collapsedNavbar"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="sideNavbar">
                <div className="navBarItems">
                    <div className="dashboardWrapper" onClick={()=> onClick("/dashboard")}>
                        <img src={type === "course" ? "../Assets/dashboard1.png": "./Assets/dashboard1.png"} alt="Avatar"/>
                        <div>Dashboard</div>
                    </div>
                    <div className="coursesText" onClick={()=> onClick("/courses")}>
                        <img src={type === "course" ? "../Assets/courses.png": "./Assets/courses.png"}/>
                        <div>Courses</div>
                    </div>
                    <div className="coursesText" onClick={()=> onClick("/classes")}>
                        <img src={type === "course" ? "../Assets/classes.png": "./Assets/classes.png"}/>
                        <div>Classes</div>
                    </div>
                    <div className="coursesText" onClick={()=> onClick("/tasks")}>
                        <img src={type === "course" ? "../Assets/tasks.png" : "./Assets/tasks.png"}/>
                        <div>Tasks</div>
                    </div>
                </div>
                <div className="signOut" onClick={() => onClick("/login", "signOut")}>
                    <img src={type === "course" ? "../Assets/signout.png" : "./Assets/signout.png"}/>
                    <div>Sign Out</div>
                </div>
            </div>
        </div>
    );
}