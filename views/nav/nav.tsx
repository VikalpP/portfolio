import Image from 'next/image'
import { Logo, Spacer, Stack, Text, THEME, useTheme } from '../../components'
import moonImage from '../../public/images/moon.webp'
import SunIcon from '../../public/svgs/sun.svg'
import { SocialLinks } from '../social-links'
import { Resume } from './resume'
import styles from './styles.module.css'

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className='w-100 fixed top-0 z-5'>
      <Stack horizontal fillHorizontal verticalAlign='middle' padding='large'>
        <Spacer size='none' l='normal' />

        <Logo />
        <Spacer size='small' />
        <Text fontSize={24}>Vikalp</Text>

        <Spacer size='normal' l='large' />
        <div className='social-links-navbar'>
          <SocialLinks />
        </div>

        <Spacer size='small' fill />

        {/* Fix the rounded shape toggle for Safari */}
        <div
          className='relative bg-dark-gray pa1 br-pill overflow-hidden pointer o-90 flex-shrink-0 theme-toggle'
          onClick={toggleTheme}
        >
          <input type='toggleThemeCheckbox' className='o-0 absolute' id='checkbox' />
          <label
            htmlFor='toggleThemeCheckbox'
            className='flex relative pointer br-pill overflow-hidden'
          >
            <Image
              src={moonImage}
              alt='moon'
              width={32}
              height={32}
              className={styles.rotateAnimation}
            />
            <Spacer size='x-small' />
            <SunIcon alt='sun' width={32} height={32} className={styles.rotateAnimation} />

            <div
              className='absolute bg-white w2 h2'
              style={{
                ...(theme === THEME.LIGHT
                  ? { left: 0, transform: 'translateX(0)' }
                  : { left: '100%', transform: 'translateX(-100%)' }),
                transition: 'all 0.3s ease',
              }}
            />
          </label>
        </div>
        <Spacer size='small' />

        <Resume />
        <Spacer size='none' l='normal' />
      </Stack>
    </header>
  )
}
