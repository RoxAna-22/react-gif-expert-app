
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


//rafc

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);
  console.log({ images, isLoading});


    return (
    <> 

        <h3>{category}</h3>
          
        {
          // if   <h2> Cargando...</h2> = true
          isLoading && ( <h2> Cargando...</h2> )        }
        

        <div className="card-grid">
          {
            images.map( (image) => (
              <GifItem 
              key={image.id}
              { ...image  }  //esparcimos image y ya tenemos acceso desde gifItem
              />
            ))
          }
        </div>
        
    </>
  )
}
