import create from 'zustand';

interface UserState {
  users: User[];
  addUser: (fullname: string) => void;
  removeUser: (id: string) => void;
  toggleCompletedState: (id: string) => void;
}
interface User {
  id: string;
  fullname: string;
  mail: string;
}

export const useStore = create<UserState>(set => ({
  // initial state
  users: [],
  // methods for manipulating state
  addUser: (description: string) => {
    set(state => ({
      users: [
        ...state.users,
        {
          fullname: '',
          mail: '',
        } as User,
      ],
    }));
  },
  removeUser: id => {
    set(state => ({
      users: state.users.filter(user => user.id !== id),
    }));
  },
  toggleCompletedState: id => {
    set(state => ({
      users: state.users.map(user =>
        user.id === id ? ({ ...user, completed: !user } as User) : user,
      ),
    }));
  },
}));
