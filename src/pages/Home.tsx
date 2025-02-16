import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import "./Home.css";
//import { useUser } from "../UserContext";

const Home = (): React.ReactElement => {
  return (
    <div>
      <div  
        className="imgHome"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "55vh",
          marginBottom: "12.5vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "400px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#6aacd4",
              fontWeight: "bold",
              fontSize: "35px",
              textAlign: "justify",
            }}
          >
            PORTAL
          </Typography>
          <img 
            className="imgDaal"
            src="src/images/nomedaal.png"
            alt="Logo Daal"
            style={{ width: "300px", height: "auto" }}
          />
          <Typography variant="h2" sx={{ color: "#6aacd4", fontSize: "30px" }}>
            Feito para todos os estudantes do IMD
          </Typography>
        </div>
        <img
          className="imgInicio"
          src="src/images/inicio1.png"
          alt="Foto Inicial"
          style={{ width: "400px", height: "auto", marginLeft: "100px" }}
        />
      </div>

      <div
        className="exploreIMD"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          backgroundImage: "url('src/images/designinicio.png')",
          backgroundPosition: "center",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
        }}
      >
        <Typography
          className="titleExplore"
          variant="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "35px",
            marginBottom: "25px",
          }}
        >
          Venha saber mais sobre o seu curso!
        </Typography>
        <Button
          sx={{
            backgroundColor: "#013476",
            borderRadius: "50px",
            padding: "10px 30px",
            height: "35px",
            width: "250px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          VISITE O MAPA DO IMD
        </Button>
        <Button
          sx={{
            backgroundColor: "#013476",
            borderRadius: "50px",
            padding: "10px 30px",
            height: "35px",
            width: "250px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          CONHEÇA A SUA ÁREA
        </Button>
        <Button
          sx={{
            backgroundColor: "#013476",
            borderRadius: "50px",
            padding: "10px 30px",
            height: "35px",
            width: "250px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          MANUAL DO ALUNO
        </Button>
      </div>
      <div
        className="exploreText"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
  
          position: "relative",
        }}
      >
        <Typography
          className="title-two-Explore"
          variant="h2"
          sx={{
            color: "#339edd",
            fontWeight: "bold",
            fontSize: "30px",
            marginBottom: "10px",
            marginTop: "120px",
            maxWidth: "600px",
            marginLeft: "15vw",
          }}
        >
          O QUE VOCÊ IRÁ ENCONTRAR AQUI
        </Typography>
        <Box
          className="dividerHome"
          sx={{
            width: "calc(550px + 15vw)",
            height: "3px",
            backgroundColor: "#013476",
            position: "absolute",
            left: 0,
            top: "calc(120px + 35px + 10px)",
          }}
        />
        <Typography
          className="textExplore"
          variant="body1"
          sx={{ maxWidth: "550px", textAlign: "justify", marginTop: "40px", marginBottom:"80px", marginLeft: "15vw", }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
          risus orci. Integer aliquam dignissim orci a pulvinar. Vivamus turpis
          mauris, facilisis sit amet dictum in, congue convallis massa.
          Vestibulum nec consectetur nunc. Phasellus tincidunt nisl ut ex
          sodales ornare. Sed scelerisque efficitur pulvinar. Curabitur non
          ipsum non odio fringilla sagittis ac sed urna. Vivamus non cursus
          dolor. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas consequat malesuada dui in
          vehicula. In nec sem nec risus accumsan condimentum vel at risus. Nam
          nec ultrices leo, sit amet posuere augue.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
