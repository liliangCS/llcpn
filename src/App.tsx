import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
export default function App() {
  return (
    <div>
      <Button className='111' > Hello </Button>
      <Button btnType={ ButtonType.Primary } size={ButtonSize.Large} onClick={() => console.log(1)}> Hello </Button>
      <Button btnType={ ButtonType.Link } to="http://www.baidu.com" disabled> Hello </Button>
      <Button btnType={ ButtonType.Link } to="http://www.baidu.com" target="_blank"> Hello </Button>
      <Button btnType={ ButtonType.Danger }> Hello </Button>
      <Button btnType={ ButtonType.Default } autoFocus> Hello </Button>
    </div>
  )
}