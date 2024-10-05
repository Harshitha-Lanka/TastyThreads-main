import { useParams } from "react-router-dom";
import Idly from "./Idly";

import Dosa from "./Dosa";



import Chat from "./Chat";
import PaniPuri from "./PaniPuri";
import Samosa from "./Samosa";
import Butterscotch from "./Butterscotch";
import Chocolate from "./Chocolate";
import Vanilla from "./Vanilla";
import Greensalad from "./Greensalad";
import VegVibe from "./VegVibe";
import BowlGlow from "./BowlGlow";

import React from 'react';
import Omlette from "./Omelette";
import Paneer from "./Paneer";
import Chicken from "./Chicken";
import Biryani from "./Biryani";

import Gulabjamun from "./Gulabjamun";
import Jalebi from "./Jalebi";
import Kulfi from "./Kulfi";
import Indian from "./Indian";
import Italian from "./Italian";
import Chinese from "./Chinese";
import Chai from  "./Chai";
import Lassi from "./Lassi";
import Buttermilk from "./Buttermilk";
import Poha from "./Poha";
import Upma from "./Upma";
import Vibrant from "./Vibrant";



function RecipeDetailsPage() {
    const { name } = useParams();

    if (name === "Idly") {
        return <Idly />;

    } else if (name === "Dosa") {
        return <Dosa />;
    } else if(name==="Omelette"){
        return <Omlette/>;
    } else if(name==="Paneer"){
        return <Paneer/>
    }else if(name==="Chicken"){
        return <Chicken/>
    }else if(name==="Biryani"){
       return <Biryani/>
    } else if(name==="Gulabjamun"){
        return <Gulabjamun/>
    } else if(name==="Jalebi"){
        return <Jalebi/>
    } else if(name==="Kulfi"){
        return <Kulfi/>
    }
   

     else if (name === "Chat") {        //Snacks
        return <Chat />;
    } else if (name === "PaniPuri") {        //Snacks
        return <PaniPuri />;
    } else if (name === "Samosa") {        //Snacks
        return <Samosa />;
    } else if (name === "Butterscotch") {        //IceCream
        return <Butterscotch />;
    } else if (name === "Chocolate") {        //IceCream
        return <Chocolate />;
    } else if (name === "Vanilla") {        //IceCream
        return <Vanilla />;
    } else if (name === "Greensalad") {        //Salad
        return <Greensalad />;
    } else if (name === "VegVibe") {        //Salad
        return <VegVibe />;
    } else if (name === "BowlGlow") {        //Salad
        return <BowlGlow />;

    }
    
     

    else if(name == "Indian"){
        return <Indian/>
    }else if(name == "Italian"){
        return <Italian/>
    }else if(name == "Chinese"){
        return <Chinese/>
    }else if(name == "Chai"){
        return <Chai/>
    }else if(name == "Lassi"){
        return <Lassi/>
    }else if(name == "Buttermilk"){
        return <Buttermilk/>
    }else if(name == "Poha"){
        return <Poha/>
    }else if(name == "Vibrant"){
        return <Vibrant/>
    }else if(name == "Upma"){
        return <Upma/>
    }
    else {

        return <div>Recipe not found</div>;
    }
}

export default RecipeDetailsPage;
