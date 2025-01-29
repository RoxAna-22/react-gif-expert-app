import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () =>{

    const [categories, setCategories ] = useState(['One Punch']);
    
    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory) ) return;
        setCategories([...categories, newCategory])    
        //setCategories(cat => [...categories, 'valorant2'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            < AddCategory 
                //setCategories ={setCategories}
                onNewCategory = { (value) =>onAddCategory(value)}

            />
            <ol>  
                { 
                    categories.map((category) => (
                        < GifGrid 
                            key = {category}
                            category ={category}
                        />
                    ))
                }
            </ol>

            
        </>
    )
}





{/* Listado de gif  on -> si las palabras llevan on -> es un evento  */}
{ /*map permite recorrer un arreglo y retornar un nuevo arreglo */}