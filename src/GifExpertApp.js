import {React, useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = ()=>{
    const [categories, setcategories] = useState(["One Punch"])

    return(
        <>
            <h2>GifExpertApp</h2>            
            <AddCategory    setCategories={setcategories}/>
            <hr />
            {/* <ul> */}
            {
                categories.map(category =>(
                    <GifGrid 
                        key = {category}
                        category = {category} 
                    />
                ))
            }
            {/* </ul> */}
        </>
    )
}