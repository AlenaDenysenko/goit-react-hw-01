
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import friends from './friends.json'
import userData from './userData.json';
import transactions from "./transactions.json";


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />

        <div>
        <h2>Transaction History</h2>
        <TransactionHistory items={transactions} />
      </div>
    </>

  );
};



export default App
