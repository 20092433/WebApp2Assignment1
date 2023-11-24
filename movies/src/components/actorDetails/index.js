import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

//functional react component name ActorDetails is defined which takes an object 'actors'
//props
const ActorDetails = ({ actor }) => {  // Don't miss this!
    //component uses the use state hook to initialize variable openDrawer
    const [drawerOpen, setDrawerOpen] = useState(false);

    console.log(actor)

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

         //displays the actors name using a material ui typography component with the 
         //variant h5
            <Typography variant="h6" component="p">
                {actor.name}
            </Typography> 

           


//uses a material ui paper component as a container for a list of chip components, each 
//of them displaying specific details about the actor

    
    

      <Paper 
        component="ul" 
        sx={root}
      >
         <Chip
         label={`Popularity rating: ${actor.popularity}`}
        />
        
        <Chip
         label={`Date of birth: ${actor.birthday}`}
        />

         <Chip
         label={`Birthplace: ${actor.place_of_birth}`}
        />

         <Chip
         label={`Best known for: ${actor.known_for_department}`}
        />
        </Paper>
       
    
     

      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      </Drawer>
      </>
  );
};



           
export default ActorDetails;