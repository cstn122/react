// import { useState } from 'react';
import { Component } from 'react';
import User from './User';
import classes from './Users.module.css';


class Users extends Component {
  // const[showUsers, setShowUsers] = useState(true);
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No users provided!');
    }
  }

  toggleUsersHandler = () => {
    // setShowUsers((curState) => !curState);
    // originally: pass an object in the ()
    // if updating a state based on the previous state: has to ise an updating function
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  };

  render() {
    const usersList = (<ul>
      {/* {DUMMY_USERS.map((user) => ( */}
      {this.props.users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>);

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  };
}


// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
