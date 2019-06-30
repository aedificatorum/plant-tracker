import { useState } from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import { seedTestData } from "./Components/PlantStore";

const Nav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`};
`;

const Navbar = () => {
  const [seedText, setSeedText] = useState("More Plants?");

  const seed = () => {
    seedTestData();
    setSeedText("MORE PLANTS!");
  }

  return (
    <Nav>
      <div css={tw`flex items-center flex-shrink-0 text-white mr-7`}>
        <span css={tw`font-semibold text-xl tracking-tight`}>
          <Link to="/">Plant Tracker</Link>
          </span>
      </div>
      <div css={tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div>
          <button
            onClick={seed}
            css={tw`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0`}
          >
            {seedText}
          </button>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
