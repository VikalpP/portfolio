import Image from 'next/image'
import { Logo, Spacer, Stack, Text, THEME, useTheme } from '../../components'
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
        <Spacer size='none' ns='large' />
        <Stack hidden visible='ns'>
          <SocialLinks />
        </Stack>

        <Spacer size='small' fill />

        <div
          className='relative bg-dark-gray pa1 br-pill overflow-hidden pointer o-90'
          onClick={toggleTheme}
        >
          <input type='toggleThemeCheckbox' className='o-0 absolute' id='checkbox' />
          <label
            htmlFor='toggleThemeCheckbox'
            className='flex relative pointer br-pill overflow-hidden'
          >
            <Image
              src='/images/moon.png'
              alt='moon'
              width={32}
              height={32}
              className={styles.rotateAnimation}
            />
            <Spacer size='x-small' />
            <Image
              src='/svgs/sun.svg'
              alt='sun'
              width={32}
              height={32}
              className={styles.rotateAnimation}
            />

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
