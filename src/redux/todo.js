import { getDefaultNormalizer } from "@testing-library/react";

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const MARK_ITEM = 'MARK_ITEM';

const action = [
    {type: ADD_ITEM, payload: "HELELELELE"},
    {type: DELETE_ITEM, payload: "123"},
    {type: MARK_ITEM, payload: "222"}
  ]

export const addItem = (content) => ({
      type: ADD_ITEM,
      payload: content
    }) 
export const deleteItem = (item) => (
    {
      type: DELETE_ITEM,
      payload: item
    }
  ) 
export const markItem = (content) => (
    {
      type: MARK_ITEM,
      payload: content
    }
  ) 

  const initialState = {
    items: []
  }
  const reducer = (state = initialState, action) => {
    switch(action.type){
      case ADD_ITEM:
        return {
          ...state,
          items:  [...state.items, {content: action.payload, isDone: false}]
        };
      case MARK_ITEM: 
        const markIndex = state.items.indexOf(action.payload);
        return {
          ...state,
          items: [...state.items.slice(0,markIndex),
                  {content: action.payload.content, isDone: !action.payload.isDone},
                  ...state.items.slice(markIndex + 1)
                ]
        }
      case DELETE_ITEM:
        const deleteIndex = state.items.indexOf(action.payload);
        return {
          ...state,
          items: [...state.items.slice(0,deleteIndex), ...state.items.slice(deleteIndex + 1)]
        }
        default:
            return state;
    }
  }

  export default reducer;