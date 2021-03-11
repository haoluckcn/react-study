function Input (props) {
  let {value, onChange, onEnter} = props
  const keydown = function(e) {
    if(e.keyCode === 13) {
      onEnter(e)
    }
  }
  return <>
    <input
      type='text'
      value={value}
      onChange={onChange}
      onKeyDown={keydown} />
  </>
}

export default Input