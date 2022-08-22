import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
export default function App() {
  return (
    <div>
      <Menu defaultIndex={0} onSelect={(index) => { console.log(index) }} mode="horizontal">
        <MenuItem index={0}>
          cool link 1
        </MenuItem>
        <MenuItem index={1} disabled={true}>
          cool link 2
        </MenuItem>
        <MenuItem index={2}>
          cool link 3
        </MenuItem>
      </Menu>
      <Button className='111'>Hello</Button>
      <Button btnType={ ButtonType.Primary } size={ButtonSize.Large} onClick={() => console.log(1)}> Hello </Button>
      <Button btnType={ ButtonType.Link } to="http://www.baidu.com" disabled> Hello </Button>
      <Button btnType={ ButtonType.Link } to="http://www.baidu.com" target="_blank"> Hello </Button>
      <Button btnType={ ButtonType.Danger }> Hello </Button>
      <Button btnType={ ButtonType.Default } autoFocus> Hello </Button>
    </div>
  )
}