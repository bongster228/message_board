import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import CreateMessage from '../components/CreateMessage'
import MessageList from '../components/MessageList'

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Route exact path="/" component={MessageList} />
                <Route exact path="/create" component={CreateMessage} />
            </BrowserRouter>
        </div>
    )
}

export default App;