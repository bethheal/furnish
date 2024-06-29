import { Handshake } from "lucide-react";
import k from "../../../constants";

const Services = () => {
  return (
    
    <div className="grid grid-cols-4 gap-x-2 h-50 py-2  ">
      {
        k.SERVICES.map(
          (service,index)=>{
            return <div key={index} style={{backgroundColor:service.bgColor}} className="p-20">
              <span><Handshake/></span>
              <h3 className="font-bold">{service.title}</h3>
              <p className="font-thin">{service.desription}</p>
            </div>

          }
        )
      }
    
    </div>
    

  )
}

export default Services;