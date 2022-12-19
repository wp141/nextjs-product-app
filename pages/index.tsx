import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar, Button } from '@nextui-org/react'

export default function Home() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <h3>SAAS</h3>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.CollapseItem>Features</Navbar.CollapseItem>
          <Navbar.CollapseItem>Pricing</Navbar.CollapseItem>
          <Navbar.CollapseItem>Login</Navbar.CollapseItem>
        </Navbar.Collapse>
        <Navbar.Toggle showIn="xs"/>
        <Navbar.Content hideIn="xs">
          <Navbar.Link>Features</Navbar.Link>
          <Navbar.Link>Pricing</Navbar.Link>
          <Button flat auto >Login</Button>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}
