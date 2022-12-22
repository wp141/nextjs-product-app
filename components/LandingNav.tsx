import Head from 'next/head'
import styles from '../styles/LandingNav.module.css'
import { Navbar, Button, Link, Text } from '@nextui-org/react'

export default function LandingNav() {
  return (
    <Navbar className={styles.nav_parent} variant={'sticky'}>
        <Navbar.Brand>
            <Link href="/"><Text h3>XYZ</Text></Link>
        </Navbar.Brand>
        <Navbar.Collapse>
            <Navbar.CollapseItem><Link href="/features">Features</Link></Navbar.CollapseItem>
            <Navbar.CollapseItem><Link href="/pricing">Pricing</Link></Navbar.CollapseItem>
            <Navbar.CollapseItem><Link>Login</Link></Navbar.CollapseItem>
        </Navbar.Collapse>
        <Navbar.Toggle showIn="xs"/>
        <Navbar.Content hideIn="xs">
            <Navbar.Link href="/features">Features</Navbar.Link>
            <Navbar.Link href="/pricing">Pricing</Navbar.Link>
            <Button flat auto >Login</Button>
        </Navbar.Content>
    </Navbar>
  )
}
