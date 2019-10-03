import React from 'react'
import './Title.css'

type TitleProps = {
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({children}) => (
  <h1 className='Title'>
    {children}
  </h1>
)

export default Title
