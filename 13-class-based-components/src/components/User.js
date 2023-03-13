import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {

  componentWillUnmount() {  // execute before current component disappears (unmounted) from screen
    console.log('User will unmount');
  }

  render() {  // same as return() in functional cmp, not receiving props by default
    return <li className={classes.user}>{this.props.name}</li>;  // available because of the inherited Component class
  }
}


// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
