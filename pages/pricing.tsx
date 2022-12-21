import Head from 'next/head'
import styles from '../styles/Pricing.module.css'
import LandingNav from '../components/LandingNav'
import { Card, Text, Spacer, Button } from '@nextui-org/react'

export default function Pricing() {
  return (
    <div>
       <LandingNav/>
       <div className={styles.pricing_content}>
          <h2>Pricing</h2> 
          <Spacer></Spacer> 
          <div className={styles.pricing_cards}>
            <Card className={styles.pricing_card}>
                <Card.Header>
                    <Text b>Pro</Text>
                </Card.Header>
                <Card.Divider/>
                <h1>$99/mo</h1>
                <Card.Divider/>
                <Card.Body>
                X aggregates all of your data and tools in one easy-to-use platform, giving you more time to focus on what really matters: delivering the best customer experience possible. 
                <br/><br/>
                Track sales and inventory, manage employee schedules and payroll, and even market your venue to potential customers. Automate ordering and inventory management to provide actionable insights and analytics.
                </Card.Body>
                <Card.Footer>
                    <Button>
                        Sign Up
                    </Button>
                </Card.Footer>
            </Card>
            <Card className={styles.pricing_card}>
                <Card.Header>
                    <Text b>Group</Text>
                </Card.Header>
                <Card.Divider/>
                <h1>-</h1>
                <Card.Divider/>
                <Card.Body>
                X tracks sales and inventory, manages employee schedules and payroll, and markets your venues all in one place, enabling you to deliver the best customer experience possible.
                <br/><br/>
                But X isn't just a data management tool. We also offer a suite of powerful tools to help you run your business more efficiently. Automate ordering and inventory management, gain valuable insights and analytics, and make informed decisions about your business.
                </Card.Body>
                <Card.Footer>
                    <Button disabled>
                        Contact Sales
                    </Button>
                </Card.Footer>
            </Card>
          </div>
          <Spacer></Spacer>

       </div>
    </div>
  )
}
