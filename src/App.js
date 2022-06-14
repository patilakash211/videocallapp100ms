import "./components/styles.css";
import JoinForm from "./components/JoinForm";
import Conference from "./components/Conference";
import { useEffect } from "react";
import Header from "./components/Header";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import Footer from "./components/Footer";

export default function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
      <p>Video Confrence App </p>
      <Header/>
      {isConnected ? (
        <>
        <Conference />
        <Footer/>
        </>
      ) : (
        <JoinForm />
      )}
    </div>
  );
}

