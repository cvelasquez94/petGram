import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'
import Context from './Contex'

const client = new ApolloClient({
  uri: 'https://petgram-server-lfeueld6w.now.sh/graphql'
})

ReactDOM.render(
  <Context.Provider >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('app')
)
