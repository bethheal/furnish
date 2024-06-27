import { Link } from "react-router-dom";
import k from "../constants";
const Navbar = () => {
  return (
    <div className="flex justify-between px-56 py-10">
      <span>LiT</span>
      <div className="flex gap-x-16">
        {
          k.NAVLINKS.map(
            (item, index) =>{
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
          )
        }      
      </div>

    </div>
  )
}

export default Navbar;