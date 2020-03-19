export const DELETE_LIST = 'DELETE_LIST'
export const ADD_LIST = 'ADD_LIST'
export const SET_LISTS = 'SET_LISTS'

export const setLists = () => {
  return async dispatch => {
    const response = await fetch('https://finalprojectedx-72902.firebaseio.com/lists.json')
    const resData = await response.json()
    console.log(resData)
    resLists = []
    for(let key in resData){
      resLists.push(resData[key])
    }
    dispatch({ type: SET_LISTS, lists:resLists })
  }
}

export const addList = (list) => {
  return async (dispatch) => {
    const response = await fetch('https://finalprojectedx-72902.firebaseio.com/lists.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: list.title,
        shop: list.shop,
        products: list.products
      })
    })
    const resData = await response.json()
    console.log(resData)
    dispatch({ type: ADD_LIST, list, id: resData.name })
  }

}
export const deleteList = (id) => {
  return dispatch => {
    dispatch({ type: DELETE_LIST, id })
  }
}