import React from "react";
import { Box, Divider} from "@mui/material";
import MemberProfile from "../components/about/member-profile";

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
          WebkitTextStroke: "2px #013476"
          
        }}>
          CONHEÇA O DAAL
        </Box>
      </Box>


      <div style={{
        marginTop: "10vh"
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
        <Divider className="divider_subtitle"/>
        <Box sx={{
          display: "flex",
        }} className="container">
          <Box sx={{
            width: "45vw"
          }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, optio, aperiam error minima mollitia odio hic dicta, esse in necessitatibus dolorum nam ipsum quidem. Delectus doloremque iste porro explicabo odit adipisci ipsa totam tempora, eius placeat error quisquam cupiditate exercitationem tempore similique autem repudiandae pariatur, aspernatur quia voluptatem nobis id quis. Rem animi distinctio voluptates incidunt fugit eum similique quos. Animi hic expedita in corporis! Veritatis non provident quos enim neque consectetur doloribus vero labore exercitationem aliquam. Sapiente quia maiores dolores! Aliquam sequi tempore eum nam asperiores dolores magni voluptatibus aspernatur unde ullam, tenetur nisi facilis nobis in repellat eveniet provident facere vel illo consectetur
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flex: "1"
          }}>
            <img src="src/images/logo_daal2.0.png" alt="logo_daal" style={{
              width: "300px",
              height: "300px",
            }} />
          </Box>
        </Box>
      </div>
      <div>
        <Box sx={{
            color: "#339edd",
            fontFamily: "Poppins",
            fontWeight: "bold",
            marginLeft: "5%",
            fontSize: "1.5rem"
          }}>
            GESTÃO ATUAL DO DAAL
        </Box>
        <Divider className="divider_subtitle"/>
        <Box className="container flex-row"
          sx={{flexWrap: "wrap"}}>

            <MemberProfile 
              imgAltText="Andriel_Vinicius"
              imgSrc="#"
              role="1º Diretor geral"
              name="Andriel Vinicius"
            />
            <MemberProfile 
              imgAltText="Emilly_Miller"
              imgSrc="#"
              role="2º Diretora geral"
              name="Emilly Miller"
            />
            <MemberProfile 
              imgAltText="Murilo_Antonio"
              imgSrc="#"
              role="Secretário"
              name="Murilo Antonio"
            />
            <MemberProfile 
              imgAltText="Dinorah_de_Farias"
              imgSrc="#"
              role="Direção de Finanças"
              name="Dinorah de Farias"
            />
            <MemberProfile 
              imgAltText="Giliardo_Júlio"
              imgSrc="#"
              role="Direção de Ensino e Capacitação"
              name="Giliardo Júlio"
            />
            <MemberProfile 
              imgAltText="Clara_Virgínia"
              imgSrc="#"
              role="Diretora de Mulheres"
              name="Clara Virgínia"
            />
            <MemberProfile 
              imgAltText="Lucas_Vinicius"
              imgSrc="#"
              role="Direção de Cultura, Diversidade e Eventos"
              name="Lucas Vinicius"
            />
            <MemberProfile 
              imgAltText="Flawbert_Lorran"
              imgSrc="#"
              role="Direção de Comunicação"
              name="Flawbert Lorran"
            />
            <MemberProfile 
              imgAltText="Ramon_Jales"
              imgSrc="#"
              role="Direção de Lazer, Saúde e Bem-Estar"
              name="Ramon Jales"
            />
        </Box>
      </div>
    </div>
  );
};

export default About;
