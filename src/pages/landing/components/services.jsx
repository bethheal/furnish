import { Handshake } from "lucide-react";
import k from "../../../constants";

const Services = () => {
  return (
    
    <div className="grid grid-cols-4 gap-x-2 h-50 py-2  ">
      {
        k.SERVICES.map(
          ({title,description,Icon,bgColor,iconBg},index)=>{
            return <div key={index} style={{backgroundColor:bgColor}} className="p-20  rounded-l-full">
              <p style={{backgroundColor:iconBg}} className=" border-4 rounded-full">{Icon} </p>

              <h3 className="font-bold">{title}</h3>
              <p className="font-thin">{description}</p>
            </div>

          }
        )
      }
    
    </div>
    

  )
}

export default Services;