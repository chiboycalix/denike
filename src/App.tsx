import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Footer, Header } from './components';
import { Home, Lugah, AgentBook, Esquity, XCEL, Grocerist, MobileAB } from './pages';
import './styles.css';
import theme from './theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lugah" element={<Lugah />} />
          <Route path="/agent-book" element={<AgentBook />} />
          <Route path="/esquity" element={<Esquity />} />
          <Route path="/xcel" element={<XCEL />} />
          <Route path="/grocerist" element={<Grocerist />} />
          <Route path="/mobile-ab" element={<MobileAB />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  </ChakraProvider>
);
