import Posts from './domain/posts/pages/postsPage';
import { UserProvider } from './domain/users/context/usersContext';

function App() {
  return (
    <>
      <UserProvider>
        <Posts />
      </UserProvider>
    </>
  );
}

export default App;
