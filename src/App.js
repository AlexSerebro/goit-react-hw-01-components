import Profile from "./components/Profile/Profile";
import user from "./DataBase/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./DataBase/data.json";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
