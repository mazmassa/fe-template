import "./app.css";

// import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./resources/main/Main";

const queryClient = new QueryClient();

function App({ intl }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Main intl={intl} />
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
