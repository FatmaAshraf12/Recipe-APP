import { useEffect,useState } from "react";

function Popular(){
    const [popular,setPopular] = useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async () =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=2e9d982c51a1449b990cfa0f7675a2af&number=9`);
        const data = await api.json();
        setPopular(data.recipes);

    }
    return(
        <div>
            {popular.map(recipe=>{
                return(
                    <p>{recipe.title}</p>
                )
            })

            }
        </div>
    )
}

export default Popular;
