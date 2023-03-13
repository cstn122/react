
import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

// const DUMMY_USERS = [
//     { id: 'u1', name: 'Max' },
//     { id: 'u2', name: 'Manuel' },
//     { id: 'u3', name: 'Julie' },
// ];

class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();  // to inherit Component
        this.state = {  // define a set of states in an object, assign their initial values
            filteredUsers: [],
            searchTerm: '',
        };
    }

    componentDidMount() {  // only run once when initial render
        // send http request to connect to database here
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState) {  // equal to useEffect(func, [dep]), update filter only when it changes
        if (prevState.searchTerm !== this.state.searchTerm) {  // if filter changed
            this.setState({  // update the values of shown user list via state setting
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }

    searchChangeHandler(event) {  // set input box when typing
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//     const DUMMY_USERS = [
//         { id: 'u1', name: 'Max' },
//         { id: 'u2', name: 'Manuel' },
//         { id: 'u3', name: 'Julie' },
//     ];
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment >
//     );
// };

export default UserFinder;