import React, { Fragment } from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCard'

export const Home = () => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2}/>
    </Fragment>
  )
}
