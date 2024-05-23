'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Ads() {
  const routerPathname = usePathname()

  useEffect(() => {
    loadAd()
  }, [routerPathname])

  useEffect(() => {
    document.addEventListener('preview:clicked', loadAd)
  }, [])

  function loadAd() {
    if (document.getElementById('EthicalAds')) {
      window && window.ethicalads && window.ethicalads.reload()

      return
    }

    const newScript = document.createElement('script')

    newScript.src = 'https://media.ethicalads.io/media/client/ethicalads.min.js'
    newScript.async = true
    newScript.id = 'EthicalAds'

    document.body.appendChild(newScript)
  }
}
