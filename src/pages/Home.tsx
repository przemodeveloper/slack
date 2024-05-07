import Chat from "../components/Chat";
import { db } from "../firebase";
import { useAppSelector } from "../hooks/hooks";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

const Home = () => {
  const roomId = useAppSelector((state) => state.app.roomId);

  const [roomDetails] = useDocument(roomId ? doc(db, "rooms", roomId) : null);

  const { name } = roomDetails?.data() || {};

  return <>{name && roomId && <Chat roomName={name} roomId={roomId} />}</>;
};

export default Home;
