import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { wsClient } from './config/config'
// import LandingPage from './layout/LandingPage';
import Layout from './layout'
import useHandleMessage from './hooks/useHandleMessage'
import { Code } from './constants'

const App: React.FC = () => {
  var adminVerify = {
    code: Code.CODE_ADMIN_CLIENT,
    data: {
      message: 'Admin',
    },
  }

  React.useEffect(() => {
    wsClient.onopen = handleOpen
    wsClient.onerror = handleError
    wsClient.onmessage = getMessage
    wsClient.onclose = handleClose
  }, [])

  const handleOpen = () => {
    console.log('ws connection opened')
    wsClient.send(JSON.stringify(adminVerify))
    localStorage.setItem('webSocketDisConnectState', 'connect')
  }

  const handleError = (error: any) => {
    console.error('ws error', error)
    handleClose()
  }

  const handleClose = () => {
    console.error('ws connection closed')
    localStorage.setItem('webSocketDisConnectState', 'disconnect')
  }

  const { onParseMessage } = useHandleMessage()

  const getMessage = (event: any) => {
    const message = JSON.parse(event.data)
    console.log(message)

    onParseMessage(message)
  }

  return (
    <Router>
      <Switch>
        {/* <Route path="/" render={() => <Layout />}></Route> */}
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  )
}

export default App
