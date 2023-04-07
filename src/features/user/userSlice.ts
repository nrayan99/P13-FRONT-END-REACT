import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserState {
  firstName: string;
  lastName: string;
  jwt: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  jwt: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload
    },
    updateLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload
    },
    updateJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload
    },
    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    }
  },
});

export const { updateFirstName, updateLastName, updateJwt, updateIsLoggedIn } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFirstName = (state: RootState) => state.user.firstName;
export const selectLastName = (state: RootState) => state.user.lastName;
export const selectJwt = (state: RootState) => state.user.jwt;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export default userSlice.reducer;