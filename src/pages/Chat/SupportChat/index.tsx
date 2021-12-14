import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { Grid, Avatar, Typography, Button, Badge } from '@material-ui/core'
import { Theme, withStyles, createStyles } from '@material-ui/core/styles'
import { useStyles } from './Style'
import Icon from '@material-ui/core/Icon'
import { REQUEST_API_URL, wsClient } from '../../../config/config'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { supportChat } from '../../../store/chat/selectors'
import { getSupportChatHistory } from '../../../store/chat'
import { Code } from '../../../constants'
import { chatDateConvert, dateConvert } from '../../../common/utils'
import Backimage from '../../../assets/img/selectchat.svg'
import SearchIcon from '@material-ui/icons/Search'
import { ChatUserInfo } from '../../../types/User'

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      marginRight: '5px',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        // animation: '$ripple 1.2s infinite ease-in-out',
        // border: '1px solid currentColor',
        content: '""',
      },
    },
  }),
)(Badge)

function SupportChat() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [userId, setUserId] = React.useState(0)
  const [userEmail, setUserEmail] = React.useState('')
  const [users, setUsers] = React.useState<any>([])
  const [message, setMessage] = React.useState('')
  const [searchUsers, setSearchUsers] = React.useState<any>([])
  const [searchText, setSearchText] = React.useState('')
  const [lastTime, setLastTime] = React.useState(0)

  const handleMessage = (e: string) => {
    setMessage(e)
  }

  var sendSupportMessageData = {
    code: Code.CODE_SUPPORT_MESSAGE,
    data: {
      userid: userId,
      msg: message,
    },
  }

  var chatReadState = {
    code: Code.CODE_CHAT_SEEN,
    data: {
      userid: userId,
      timestamp: Date.now(),
    },
  }

  const sendMessageSubmit = (e: any) => {
    e.preventDefault()
    wsClient.send(JSON.stringify(sendSupportMessageData))
    setMessage('')
  }

  const getUsers = async () => {
    const res = await axios.post(`${REQUEST_API_URL}/users/chat/list`)
    setUsers(res.data.Data)
  }
  const chatHistory = useAppSelector(supportChat)

  React.useEffect(() => {
    var element: any = document.getElementById('chatContent')
    element?.scrollTo(0, element.scrollHeight)
    getUsers()
  }, [chatHistory])

  const getChatHistory = (e: any) => {
    setUserId(e.UserId)
    setUserEmail(e.Email)
    setLastTime(e.LastMsgTime)

    wsClient.send(JSON.stringify(chatReadState))

    const formData = new FormData()
    formData.append('user_id', e?.UserId?.toString())

    dispatch(getSupportChatHistory(formData))
  }

  const handleSearch = (e: string) => {
    setSearchText(e)
    let result = []
    for (let i = 0; i < users.length - 1; i++) {
      if (users[i]?.Email?.toLowerCase().indexOf(e.toLowerCase()) !== -1) {
        result.push(users[i])
      }
    }
    setUsers(result)
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={4} className={classes.leftDiv}>
        <div className={classes.searchSide}>
          <input onChange={(e) => handleSearch(e.target.value)} className={classes.input} />
          <SearchIcon className={classes.searchIcon} />
        </div>
        {users.length !== 0
          ? users?.map((user: any, key: any) => (
              <div key={key} className={user.UserId === userId ? classes.activeDiv : classes.userDiv}>
                <button onClick={(e) => getChatHistory(user)} className={classes.userlink}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar alt={user.Email} src="/static/images/avatar/1.jpg" className={classes.avatar} />
                  </StyledBadge>
                  <div className={classes.showInfo}>
                    <Typography>{user.Email}</Typography>
                    <Typography className={classes.lastMessage}>{user.LastMsg}</Typography>
                  </div>
                  <div style={{ marginRight: '5px' }}>
                    <Typography className={classes.lastMessage1}>
                      {user.LastMsgTime === 0 ? '' : dateConvert(user.LastMsgTime)}
                    </Typography>
                  </div>
                  <Badge color="secondary" variant="dot" invisible={user.UnreadMsgCnt > 0 ? false : true}></Badge>
                </button>
              </div>
            ))
          : ''}
      </Grid>
      <Grid item xs={8} className={classes.rightDiv}>
        {userId > 0 ? (
          <>
            <div className={classes.chatHeader}>
              <Avatar alt={userEmail} src="/static/images/avatar/1.jpg" className={classes.avatar} />
              <div>
                <Typography className={classes.headerText}>{userEmail}</Typography>
                <Typography style={{ fontSize: '12px' }}>{dateConvert(lastTime)}</Typography>
              </div>
            </div>

            <div className={classes.textDiv} id="chatContent">
              {chatHistory.map((text: any, key: any) => (
                <div key={key}>
                  {text.Type === 'Client' && text.UserId === userId ? (
                    <>
                      <div className={classes.chatShowDiv}>
                        <Avatar alt={userEmail} src="/static/images/avatar/1.jpg" className={classes.avatar} />
                        <div>
                          <Typography style={{ fontSize: '12px' }}>{chatDateConvert(text.CreatedAt)}</Typography>
                          <div className={classes.text1}>{text.Message}</div>
                        </div>
                      </div>
                    </>
                  ) : text.Type === 'Support' && text.UserId === userId ? (
                    <>
                      <div className={classes.chatShowDiv}>
                        <div className={classes.right}>
                          <div className={classes.time}> {chatDateConvert(text.CreatedAt)}</div>
                          <div className={classes.text2}>{text.Message}</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              ))}
            </div>
            <div className={classes.inputDiv}>
              <form onSubmit={sendMessageSubmit}>
                <div style={{ display: 'flex' }}>
                  <div className={classes.inputSide}>
                    <input
                      placeholder="Type a message"
                      className={classes.input}
                      value={message}
                      onChange={(e) => handleMessage(e.target.value)}
                    />
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    endIcon={<Icon>send</Icon>}
                    className={classes.sendBtn}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className={classes.backDiv}>
            <img alt="logo" src={Backimage} className={classes.backImg} />
            <Typography className={classes.backText}>Select a chat to read messages</Typography>
          </div>
        )}
      </Grid>
    </Grid>
  )
}

export default SupportChat
