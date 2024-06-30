import { Computer, Cookie, Handshake, Icon, UserCheck2 } from "lucide-react";

const k = {
    NAVLINKS:[
        {
            name:"Home",
            path: "/"
        },
        {
            name:"About",
            path: "/about-us"
        },
        {
            name:"Collection",
            path: "/collection"
        },
        {
            name:"Contact",
            path: "/contactUs"
        },
      
        
    ],

    SERVICES:[
        {
            title:"Meet Amazing People",
            description:"We will aid  you to  connect with inspiring individuals in the tech industry",
            Icon: <Handshake/>,
            bgColor: "#F5EBEB",
            iconBg:"#CB9696"
        },
        {
            title:"Network",
            description:" We are designed to foster connections and collaboration among women with talent and  in the tech industry.",
            Icon: <UserCheck2/>,
            bgColor: "#DCEBDD",
            iconBg:"#8BBD8E"
        },
        {
            title:"Always Up to Date",
            description:"We are dedicated to keeping women in tech informed and ahead of the curve. ",
            Icon: <Computer/>,
            bgColor: "#F5EFD8",
            iconBg:"#D1B54A"
        },
        {
            title:"Best Support",
            description:" We focus on empowering women in the tech industry through mutual support and collaboration. ",
            Icon: <Cookie/>,
            bgColor: "#F4E6D8",
            iconBg:"#D29A61"
        },
       

    ]

}
export default k;