import { SvgIconComponent } from "@mui/icons-material";
import styled from "styled-components";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { setRoomId } from "../features/appSlice";
import { useAppDispatch } from "../hooks/hooks";

interface SidebarOptionProps {
  Icon?: SvgIconComponent;
  title: string;
  id?: string;
  addChannelOption?: boolean;
}

const SidebarOption = ({
  Icon,
  title,
  addChannelOption,
  id,
}: SidebarOptionProps) => {
  const dispatch = useAppDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      addDoc(collection(db, "rooms"), { name: channelName });
    }
  };

  const selectChannel = () => {
    if (!id) return;
    dispatch(setRoomId(id));
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;
  align-items: center;

  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
