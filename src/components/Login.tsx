import { Button } from "@mui/material";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAppDispatch } from "../hooks/hooks";
import { setUser } from "../features/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();

  const signIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser(result));
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://assets-global.website-files.com/621c8d7ad9e04933c4e51ffb/65eba5ffa14998827c92cc01_slack-octothorpe.png"
          alt="slack"
        />
        <h1>Sign in</h1>
        <p>slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export default Login;
