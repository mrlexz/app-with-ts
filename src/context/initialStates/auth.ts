export interface AuthData {}
export interface AuthState {
  isLoggedIn?: boolean;
  data?: AuthData;
  error?: string | null;
  loading?: boolean;
}

const authInitState: AuthState = {
  isLoggedIn: false,
  data: {},
  error: null,
  loading: false,
};

export default authInitState;
