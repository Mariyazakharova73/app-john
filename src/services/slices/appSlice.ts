import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface State {
  isLoading: boolean,
  error?: string,
  
  data: undefined,
}

const initialState: State = {
  isLoading: false,
  error: undefined,

  data: undefined,
};

export const appSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    // setReadonly: (state, action: PayloadAction<boolean>) => {
    //   state.readonly = action.payload
    // },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchArticleById.pending, state => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //       state.error = undefined;
  //     })
  //     .addCase(fetchArticleById.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;