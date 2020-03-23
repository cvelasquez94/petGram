import React, {useEffect, useState, Fragment } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

function useCateriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server.behagoras.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}


// import { categories as mockCategories } from '../../../api/db.json'
export const ListOfCategories = () => {
  const { categories, loading } = useCateriesData()
  const [showFixed, setShowFixed] = useState(false)


  useEffect(function () {
    const onScroll = e => {
       const newShowFixed = window.scrollY > 200
       showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  
  const renderList = (fixed) => (
    <List fixed={fixed}>
    {
      loading ? 
      <Item key='loading'><Category/></Item> :
      categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
    }
  </List>
  )
  
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
