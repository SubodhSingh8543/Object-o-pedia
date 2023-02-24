import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserAuth } from "../context/UserAuthContext";
import { getSingleUserData, getUsersData, postSingleUserData } from "../Redux/auth/auth.action";


const HomePage = () => {
   const { logIn, googleSignIn,user } = useUserAuth();
   const data = useSelector((res) => res.AuthReducer.allUsers);
   const singleUserData = useSelector((res) => res.AuthReducer.singleUser);
   const dispatch = useDispatch();
//    const [userId,setUserId] = useState("");

   console.log(user);

   useEffect(() => {
    if(user?.uid){
      dispatch(getUsersData());
    //   setUserId(user?.uid);
      findUser(user?.uid)
    } 
   },[])

   const findUser = (id) => {
    let flag = false

    let userObject = {
        profile: user.photoURL,
        active: false,
        name: user.displayName,  
        email: user.email,
        address: "",
        id: user.uid,
        cart:[],
        wishlist: [],
        orders: []
      }

      for(let i=0; i<data.length; i++){
          if(data[i].id === id){
             flag = true;
             break;
          }
       }

       if(flag === true){
        dispatch(getSingleUserData(id));
        console.log("exist")
       }else{
        dispatch(postSingleUserData(userObject));
        console.log("not exist")
       }  
   }



    return(
        <div>
            HomePage
        </div>
    )
}

export default HomePage;