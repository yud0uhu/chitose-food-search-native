import Footer from './components/blocks/footer';
import { Provider as PaperProvider } from 'react-native-paper';
import Appbar from './components/blocks/header';

export default function App() {
  return (
    <PaperProvider>
      <Appbar />
      <Footer />
    </PaperProvider>
  );
}
