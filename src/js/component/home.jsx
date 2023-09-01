import React from "react";

import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Cards from "./cards";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbo />
      <div className="container row m-auto p-0 justify-content-between mb-6">
        <Cards
          title="Card Title"
          img ="https://images.unsplash.com/photo-1692560415033-44a79cff20b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Cards 
		title="Card Title"
		img='https://images.unsplash.com/photo-1520474151999-5cb75d6a9a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8NTAwKjMyNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
	
		/>
        <Cards 
		title="Card Title"
		img= "https://images.unsplash.com/photo-1520022974279-a96d1e249eab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NTAwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        />
		<Cards 
		title="Card Title"
		img="https://images.unsplash.com/photo-1558877110-c51f38f8e22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDUwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
		/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
