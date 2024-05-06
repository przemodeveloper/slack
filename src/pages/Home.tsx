import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "../components/Chat";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAppSelector } from "../hooks/hooks";

const Home = () => {
  const [channels] = useCollection(collection(db, "rooms"));
  const roomId = useAppSelector((state) => state.app.roomId);

  const roomFound = channels?.docs.find((doc) => doc.id === roomId);

  return (
    <>{roomFound?.data().name && <Chat roomName={roomFound?.data().name} />}</>
  );
};

export default Home;
