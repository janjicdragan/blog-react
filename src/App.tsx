import { UserProvider } from './domain/users/context/usersContext';
import GlobalRouter from './router/Router';
import './App.css';

function App(): JSX.Element {
  const helloMessage: string = 'Hello from';
  console.log(`${helloMessage} ${App.name}`);
  return (
    <UserProvider helloMessage={helloMessage}>
      <GlobalRouter helloMessage={helloMessage} />
    </UserProvider>
  );
}

export default App;
