import "./styles.css";
import Cards from "./MuiCard.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Cards />
      </div>
    </QueryClientProvider>
  );
}
