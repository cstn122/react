import "./styles.css";
import React from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

export default function App() {
  const isAuthed = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Header />
      <main>
        {isAuthed && <UserProfile />}
        {!isAuthed && <Auth />}
      </main>
      <Counter />
    </div>
  );
}
