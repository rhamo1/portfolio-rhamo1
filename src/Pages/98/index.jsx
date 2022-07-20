import {
  Box,
  Button,
  Center,
  Container,
  Image,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import gospel from "../../media/gspl.gif";
import Draggable from "react-draggable";

import "98.css";

export const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#00807f",
        height: "100vh",
      }}
    >
      <div
        class="title-bar"
        style={{
          height: "40px",
        }}
      >
        <div class="title-bar-text">&#60;Rhamon de Souza /&#62;</div>
      </div>

      <Center>
        <Draggable>
          <div style={{ width: 300 }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">Sobre</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div class="window-body">
              <Image src={gospel} padding="10px" />
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Me relaciono com a tecnologia desde pequeno, sempre procurei
                explorar as diversas possibilidades e infinitas ferramentas
                disponíveis, principalmente na criação de arte/música. Gosto da
                área porque ela possibilita o constante crescimento e incentiva
                a curiosidade na comunicação e solução de problemas. Meu
                objetivo é aprofundar cada vez mais no desenvolvimento de
                soluções com criatividade e eficiência, aposto na minha
                facilidade em aprender e na boa comunicação.
              </p>
            </div>
          </div>
        </Draggable>

        <div style={{ width: 300 }} className="window">
          <div className="title-bar">
            <div className="title-bar-text">Habilidades</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>
          <div class="window-body">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              molestiae fugit dolorum voluptates, architecto molestias qui
              doloribus non omnis. Sapiente architecto laborum assumenda
              deserunt consectetur culpa commodi quidem expedita natus.
            </p>
          </div>
        </div>
      </Center>
    </div>
  );
};
