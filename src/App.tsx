import { UserProvider } from './domain/users/context/usersContext';
import GlobalRouter from './router/router';

function App() {
  return (
    <UserProvider>
      <GlobalRouter />
    </UserProvider>
  );
}

export default App;
