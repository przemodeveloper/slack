import { AccessTime, HelpOutline, Logout, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderLeftInnerContainer>
          {user?.photoURL ? (
            <HeaderAvatar src={user?.photoURL} />
          ) : (
            <HeaderAvatar />
          )}
          <Logout onClick={logout} />
        </HeaderLeftInnerContainer>

        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input placeholder="Search" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderLeftInnerContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 15px;
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
