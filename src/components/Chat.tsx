import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

interface ChatProps {
  roomName: string;
  roomId: string;
}

const Chat = ({ roomName, roomId }: ChatProps) => {
  const messagesQuery = query(
    collection(db, "rooms", roomId, "messages"),
    orderBy("timestamp", "asc")
  );
  const [messages] = useCollection(messagesQuery);

  console.log(messages?.docs.map((doc) => doc.data()));

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>{`# ${roomName}`}</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlined /> Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {messages?.docs.map((doc) => {
            return <p>{doc.data().message}</p>;
          })}
        </ChatMessages>

        <ChatInput roomName={roomName} roomId={roomId} />
      </>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;

const ChatMessages = styled.div``;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSviIcon-root {
    margin-right: 5px;
    font-size: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
