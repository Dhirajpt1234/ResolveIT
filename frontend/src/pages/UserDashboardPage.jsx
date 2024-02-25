import { Navigate } from "react-router-dom";
import {useContext } from "react";
import {UserContext} from "../App";
import UserDashBoard from "../components/UserDashBoard";
function UserDashBoardPage()
{
    const {user} = useContext(UserContext);
    return(
        (user) ?
        <UserDashBoard></UserDashBoard> :
        <Navigate to='/' replace={true}></Navigate>
    )
}

export default UserDashBoardPage;