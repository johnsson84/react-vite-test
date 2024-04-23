import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Message from "./components/Message";
import ReusableButton from "./components/ReusableButton";
import Content from "./components/Content";
import Form from "./components/Form";
import "./css/Startpage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function Startpage() {
  const [who, setWho] = useState("user");

  const inputName = () => {
    const updatedWho = prompt("Enter name");
    setWho(updatedWho);
  };

  return (
    <div className="startpage">
      <section className="asd">
        <Header></Header>
        <div className="welcome">
          <Message greet="Welcome" who={who} />
          <ReusableButton onClick={inputName}>Change name</ReusableButton>
        </div>
        
        <div className="btn-form">
          <Form></Form>
        </div>
        
      </section>

      <section className="section">
        <div className="nav1">
          <Nav></Nav>
        </div>
        <div className="main1">
          <Main></Main>
        </div>
      </section>
      <section className="cont">
        <Content></Content>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default Startpage;
