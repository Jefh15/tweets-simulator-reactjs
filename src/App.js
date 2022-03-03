import React from "react";
// importamos MaterialUI
import { Container, Snackbar } from "@mui/material";
// importo el header
import Header from "./components/Header/index";
// importo el header
import SendTweet from "./components/SendTweet/index";


function App() {
  return (
    <Container 
    className="tweets-simulator" 
    maxWidth={false}>
      <Header />
      <SendTweet />
    </Container>
  );
}

export default App;
