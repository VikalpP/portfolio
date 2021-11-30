import React, { memo } from 'react'
import LogoIcon from './logo.svg'

export const Logo = memo(() => <LogoIcon className='flex-shrink-0' />)

Logo.displayName = 'Logo'
