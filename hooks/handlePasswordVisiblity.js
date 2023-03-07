import { View, Text } from 'react-native'
import React, { useState } from 'react'

export const handlePasswordVisiblity = () => {
  const [visible,setVisiblity] = useState(true)
  const [icon,setIcon] = useState('eye')
  const handleVisiblity = () => {
    if(icon === 'eye-off'){
        setIcon('eye')
        setVisiblity(true)
    }
    else if(icon === 'eye'){
        setIcon('eye-off')
        setVisiblity(false)
    }
  }
  return ({
    visible,icon,handleVisiblity
  }
  )
}

