import { LOADING, RESET } from '../types/system';

export type SystemState = {
  loading: boolean;
};

const initialState: SystemState = {
  loading: false,
};

export default function reducer(state: SystemState = initialState, action: any) {
  switch (action.type) {
    case RESET:
      return { ...initialState };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
