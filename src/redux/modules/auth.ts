import { createActions, handleActions } from "redux-actions";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

const initailState: AuthState = {
  token: null,
  loading: false,
  error: null,
}

const prefix = 'my-books/auth';

export const { pending, success, fail } = createActions('PENDING', 'SUCCESS', 'FAIL', { prefix })

const reducer = handleActions<AuthState, string>({
  PENDING: (state) => ({
    ...state,
    loading: true,
    error: null
  }),
  SUCCESS: (state, action) => ({
    token: action.payload,
    loading: false,
    error: null
  }),
  FAIL: (state, action: any) => ({
    ...state,
    loading: false,
    error: action.payload
  }),
}, initailState, { prefix })

export default reducer

// saga
// 나만의 사가 함수, 비동기 처리를 할 수 있게 됩니다. 
export function* authSaga() {

}