import { Timestamp } from "firebase/firestore";
import styled from "styled-components";

export interface MessageProps {
  message: string;
  timestamp: Timestamp;
  userName: string;
  userImage: string;
}

const Message = ({ message, timestamp, userName, userImage }: MessageProps) => {
  return (
    <MessageContainer>
      <img src={userImage} alt={userName} />
      <MessageInfo>
        <h4>
          {userName} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-size: 10px;
    margin-left: 4px;
    font-weight: 300;
  }
`;

export default Message;
