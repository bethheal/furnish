import { collectionFive, collectionFour, collectionOne, collectionSix, collectionThree, collectionTwo } from "../../../assets";
import ImagesCollectionGrid from "../../collection/components/imagesCollectionGrid";

const Collection = () => {
  return (
<div>
    <div>
      <span>OUR FINISH PROJECTS</span>
      <h2>EXECUTIVES</h2>

    </div>

    <div className='grid grid-cols-3'>
     <ImagesCollectionGrid 
     image={collectionOne}
     name="CEO"
     />
     <ImagesCollectionGrid
     image={collectionTwo}
     name="CEO"
     />
     <ImagesCollectionGrid 
     image={collectionThree}
     name="CEO"
     />
     <ImagesCollectionGrid 
     image={collectionFour}
     name="CEO"
     />
     <ImagesCollectionGrid 
     image={collectionFive}
     name="CEO"
     />
     <ImagesCollectionGrid 
     image={collectionSix}
     name="CEO"
     />

   
    </div>
    </div>

  )
}

export default Collection;