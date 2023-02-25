import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserAuth } from "../context/UserAuthContext";
import { getSingleUserData, getUsersData, postSingleUserData } from "../Redux/auth/auth.action";
import { Box, Heading, Image } from "@chakra-ui/react";
import ResponsiveCarousal from "../Components/Carousel";
import Carding from "../Components/Carding";
import Slide from "../Components/Slide";
import OurStory from "../Components/OurStory";
import Footer from "../Components/Footer"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";


const HomePage = () => {
   const { logIn, googleSignIn,user } = useUserAuth();
   const data = useSelector((res) => res.AuthReducer.allUsers);
   const singleUserData = useSelector((res) => res.AuthReducer.singleUser);
   const dispatch = useDispatch();
//    const [userId,setUserId] = useState("");

  //  console.log(user);

   useEffect(() => {
    // if(user?.uid){
      dispatch(getUsersData());
    //   setUserId(user?.uid);
      findUser(user.uid)
    // } 
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
        console.log(singleUserData);
      }else{
        dispatch(postSingleUserData(userObject));
        console.log(data);
        console.log("not exist")
       }
   }



    return(
      <div>
         <Box>
        <Image
          src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1"
          alt=""
        />
      </Box>
        <ResponsiveCarousal />
        <Carding />
        <Slide />
        <Heading
        display={"flex"}
        margin={10}
        justifyContent={"flex-start"}
        fontFamily={"sans-serif"}>
        CHARGING SOLUTIONS AND WORK ESSENTIALS
        </Heading>
        <Box
        display={{ base: "grid", md: "grid", lg: "flex" }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "flex",
        }}
        gap={10}>
        <Image
          width={"100%"}
          src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-331,dpr-1"
          alt=""
        />

        <Image
          width={"100%"}
          src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-331,dpr-1"
          alt=""
        />
        </Box>
        <Heading
        display={"flex"}
        justifyContent={"flex-start"}
        margin={10}
        fontFamily={"sans-serif"}>
        COLLECTIONS
      </Heading>
      <Box
        width={"33%"}
        display={{ base: "grid", md: "grid", lg: "flex" }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={10}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        w={{ base: "100%", md: "100%", lg: "31.5%" }}
        h={{ base: "auto", md: "auto", lg: "auto" }}>
        <Image
          src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,dpr-1"
          alt=""
        />

        <Image
          src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,dpr-1"
          alt=""
        />

        <Image
          src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/collections-Platform-collection-banner-image-homepgae.png?tr=cm-pad_resize,v-2,dpr-1"
          alt=""
        />
        </Box>
        <Image
        marginTop={10}
        src="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1"
        alt=""
      />

      <Image
        marginTop={10}
        src="https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1"
      />
      <OurStory/>
           <Footer/>
        </div>
    )
}

export default HomePage;