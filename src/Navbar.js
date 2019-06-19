import tw from "tailwind.macro";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const Nav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`};
`;

const NavLink = styled.a`
  ${tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4`};
`;

const Navbar = () => {
  return (
    <Nav>
      <div css={tw`flex items-center flex-shrink-0 text-white mr-7`}>
        <span css={tw`font-semibold text-xl tracking-tight`}>
          Plant Tracker
          </span>
      </div>
      <div css={tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div css={tw`text-sm lg:flex-grow`}>
          <NavLink href="#responsive-header">Docs</NavLink>
          <NavLink href="#responsive-header">Docs1</NavLink>
          <NavLink href="#responsive-header">Docs2</NavLink>
        </div>
        <div>
          <a
            href="#"
            css={tw`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0`}
          >
            Download
            </a>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
