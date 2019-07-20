export default store =>{
  //
  // console.log('store初始化')
  if ( localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state)) 
  }
  store.subscribe((mutatioan,state)=>{
    localStorage.state = JSON.stringify(state)
  })
}

