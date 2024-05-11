import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";

interface ChatInput {
  roomId: string;
  roomName: string;
  chatRef: React.RefObject<HTMLDivElement>;
}

const ChatInput = ({ roomId, roomName, chatRef }: ChatInput) => {
  const [text, setText] = useState("");

  const [user] = useAuthState(auth);

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!text || text.length < 2 || !roomId) return;

    addDoc(collection(db, "rooms", roomId, "messages"), {
      message: text,
      timestamp: serverTimestamp(),
      userName: user?.displayName,
      userImage: user?.photoURL,
    });

    chatRef.current?.scrollIntoView({
      behavior: "smooth",
    });

    setText("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <ChatInputContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder={`Message #${roomName}`}
          onChange={handleChange}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
        />
        <Button type="submit" hidden onClick={(event) => handleSubmit(event)}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;

export default ChatInput;
