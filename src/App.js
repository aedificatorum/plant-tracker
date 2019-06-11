import React from 'react';
import './App.css';
import tw from 'tailwind.macro';
import styled from '@emotion/styled'

const Header = styled.header`
${tw`bg-red-300 min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

function App() {
  return (
    <div>
      <Header>
        PLANT TRACKER
      </Header>
      <main>
        This is the beginning
      </main>
    </div>
  );
}

export default App;
