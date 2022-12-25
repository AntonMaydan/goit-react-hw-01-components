import { Profile } from "./Profile/Profile";
import user from "AppData/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "AppData/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "AppData/friends.json"


export const App = () => {
  return (
    <div>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        statHeader="Upload stats"
        statData={data} />
      <FriendList
        friends={friends} />

    </div>
  );
};
