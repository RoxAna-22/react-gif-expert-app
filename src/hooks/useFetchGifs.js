import React, { useEffect, useState } from 'react'
import {getGifs} from '../helpers/getGifs'

//hook es una funcion q regresa algo --> el algo es un objeto

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async()=> {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }
  
     useEffect(()=> {
      getImages();
    },[])    



  return {
    images:images,
    isLoading: isLoading
  }
}
