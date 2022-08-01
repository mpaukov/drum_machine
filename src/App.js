import { useState, useEffect } from "react";
import { Section } from "./comronents/Section/Section";
import { Container } from "./Container/Container";
import { Button } from "./comronents/Button/Button";
import { ButtonWrapper, DisplayWrapper } from "./App.styled";
import { Display } from "./comronents/Display/Display";

const audio = [
  {
    key: "Q",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    description: "Chord 1",
  },
  {
    key: "W",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    description: "Chord 2",
  },
  {
    key: "E",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    description: "Chord 3",
  },
  {
    key: "A",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    description: "Give us a light",
  },
  {
    key: "S",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    description: "Dry Ohh",
  },
  {
    key: "D",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    description: "Bld H1",
  },
  {
    key: "Z",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    description: "Punchy kick 1",
  },
  {
    key: "X",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    description: "Side stick 1",
  },
  {
    key: "C",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    description: "Brk Snr",
  },
];

function App() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  });
  const keyPress = (e) => {
    let play = null;
    switch (e.code) {
      case "KeyQ":
        play = document.getElementById("Q");
        setDisplayText(play.parentNode.id);
        break;
      case "KeyW":
        play = document.getElementById("W");
        setDisplayText(play.parentNode.id);
        break;
      case "KeyE":
        play = document.getElementById("E");
        setDisplayText(play.parentNode.id);
        break;
      case "KeyA":
        play = document.getElementById("A");
        setDisplayText(play.parentNode.id);
        break;
      case "KeyS":
        play = document.getElementById("S");
        setDisplayText(play.parentNode.id);
        break;
      case "KeyD":
        play = document.getElementById("D");
        setDisplayText(play.parentNode.id);
        break;
      case "KeyZ":
        play = document.getElementById("Z");
        setDisplayText(play.parentNode.id);
        break;
      case "KeyX":
        play = document.getElementById("X");
        setDisplayText(play.parentNode.id);
        break;
      case "KeyC":
        play = document.getElementById("C");
        setDisplayText(play.parentNode.id);
        break;
      default:
        return;
    }

    play.play().catch((error) => {});
  };
  const handleClick = (e) => {
    if (e.target.nodeName !== "BUTTON") {
      return;
    }
    e.target.children[0].play().catch((error) => {});

    setDisplayText(e.target.id);
  };

  return (
    <Section>
      <Container id="drum-machine">
        <ButtonWrapper onClick={handleClick}>
          {audio.map((item) => {
            return (
              <Button
                className="drum-pad"
                key={item.key}
                text={item.key}
                id={item.description}
              >
                <audio className="clip" id={item.key} src={item.audio} />
              </Button>
            );
          })}
        </ButtonWrapper>
        <DisplayWrapper id="display">
          <Display text={displayText}></Display>
        </DisplayWrapper>
      </Container>
    </Section>
  );
}

export default App;
