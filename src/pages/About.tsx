import React from "react";
import { Box, Divider } from "@mui/material";

const About = (): React.ReactElement => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",

          position: "relative",
          backgroundImage: 'url("src/images/fundo_titulo_sobre.png")',
          backgroundSize: "contain",
          width: "100%",
          height: "44.01vh",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Box sx={{
          color: "#013476",
          fontFamily: "poppins",
          fontSize: "2em",
          fontWeight: "bold",
          textAlign: "center",
          letterSpacing: "0.1em",
          WebkitTextStroke: "2px #013476",
          
        }}>
          CONHEÇA O DAAL
        </Box>
      </Box>


      <div style={{
        display: "block",
        
      }}>
        <Box sx={{
          color: "#339edd",
          fontFamily: "Poppins",
          fontWeight: "bold",
          marginLeft: "5%",
          fontSize: "1.5rem"
        }}>
          O QUE É O DAAL?
        </Box>
        <Divider sx={{ 
          marginY: "0.5rem",
          borderColor: "#013476",
          borderWidth: "0.1rem",
          width: "55vw"
        }} />
        
        <Box sx={{
          display: "flex",
          marginLeft: "5%",
          marginRight: "5%"
        }}>
          <Box sx={{
            width: "50vw"
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste odio eligendi laboriosam minus repellendus reiciendis, hic quis quia magni et tenetur sit id officia quae ipsam quod enim a!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, tempore. Consequatur nam molestiae delectus itaque nihil id adipisci quos! Repellat vitae, qui nam asperiores eaque facere ipsum molestiae alias eum!
            texto
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "right",
            flex: "1"
          }}>
            <img src="src/images/logo_daal.jpeg" alt="logo_daal" style={{
              width: "300px",
              height: "300px",
            }} />
          </Box>
        </Box>

      </div>
    </div>

  );
};

export default About;
