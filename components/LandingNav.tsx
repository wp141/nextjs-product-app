import Head from 'next/head'
import styles from '../styles/LandingNav.module.css'
import { Navbar, Button, Link } from '@nextui-org/react'

export default function LandingNav() {
  return (
    <Navbar className={styles.nav_parent}>
        <Navbar.Brand>
            <Link href="/"><h3>SAAS</h3></Link>
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
