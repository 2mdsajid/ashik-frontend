'use client'

import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const AosAnimation = () => {
    const [animationtype, setanimationType] = useState<string>('')
      // ANIMATE USEEFFECT usnig AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      once: false
    });

    setanimationType('zoom-in')
  }, []);
  return (
    <div>
    </div>
  )
}
export default AosAnimation
