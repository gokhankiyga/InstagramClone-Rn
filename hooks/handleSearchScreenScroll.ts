import {NativeSyntheticEvent,NativeScrollEvent} from 'react-native'
import { useCallback, useState } from 'react'
//divider set 300(according to video height) I wrote it as hook so it is easily adapted any situation
//I used useCallback to memoization the scroll event
export const handleScrollEvent = () => {
    const [playIndex,setPlayIndex] = useState(0)
    const handleScroll = useCallback((i: NativeSyntheticEvent<NativeScrollEvent>) =>{
        const offset = Math.round(i.nativeEvent.contentOffset.y/300)
        setPlayIndex(offset)
    },[setPlayIndex])

    return({
        playIndex,handleScroll
      }
      )
  
}

