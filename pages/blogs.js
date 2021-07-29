import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
const blogs = () => {
  return (
    <div>
      <TypistLoop interval={1000}>
        {["Coming soon..."].map((text) => (
          <Typist key={text} startDelay={500}>
            {text}
          </Typist>
        ))}
      </TypistLoop>
    </div>
  );
};

export default blogs;
