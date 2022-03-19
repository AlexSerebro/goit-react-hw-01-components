import Profile from "./components/Profile/Profile";
import user from "./DataBase/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./DataBase/data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./DataBase/friends.json";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        <Statistics title="Upload stats" stats={data} />;
        {/* <Statistics stats={data} />; */}
        <FriendList friends={friends} />
      </Container>
    </div>
  );
}

export default App;
