import Head from 'next/head'
import styles from '../styles/Pricing.module.css'
import LandingNav from '../components/LandingNav'
import { Card, Text, Spacer, Button, Row, Col } from '@nextui-org/react'

export default function Pricing() {
  return (
    <div>
       <LandingNav/>
       <div className={styles.pricing_content}>
          <Text h2>Pricing</Text>
          <Spacer></Spacer> 
          <div className={styles.pricing_cards}>
            <Card className={styles.pricing_card}>
                <Card.Header>
                    <Row justify="center">
                        <Text b>Option A</Text>
                    </Row>   
                </Card.Header>
                <Card.Divider/>
                <h1>$99/mo</h1>
                <Card.Divider/>
                <Card.Body>
                    <Row >
                        ✅ Feature 1 <br/><br/>
                        ✅ Feature 2 <br/><br/>
                        ✅ Feature 3 <br/><br/>
                        🚫 Feature 4 <br/><br/>
                        🚫 Feature 5 <br/><br/>
                        🚫 Feature 6 <br/><br/>
                    </Row>   
                </Card.Body>
                {/* <Card.Body>
                X aggregates all of your data and tools in one easy-to-use platform, giving you more time to focus on what really matters: delivering the best customer experience possible. 
                <br/><br/>
                Track sales and inventory, manage employee schedules and payroll, and even market your venue to potential customers. Automate ordering and inventory management to provide actionable insights and analytics.
                </Card.Body> */}
                <Card.Footer>
                    <Row justify="center">
                        <Button>
                            <Text b color="white">Sign Up</Text>
                        </Button>
                    </Row>   
                </Card.Footer>
            </Card>
            <Card className={styles.pricing_card}>
                <Card.Header>
                    <Row justify="center">
                        <b>Option B</b>
                    </Row>   
                </Card.Header>
                <Card.Divider/>
                <h1>-</h1>
                <Card.Divider/>
                <Card.Body>
                {/* X tracks sales and inventory, manages employee schedules and payroll, and markets your venues all in one place, enabling you to deliver the best customer experience possible.
                <br/><br/>
                But X isn't just a data management tool. We also offer a suite of powerful tools to help you run your business more efficiently. Automate ordering and inventory management, gain valuable insights and analytics, and make informed decisions about your business. */}
                <Row >
                        ✅ Feature 1 <br/><br/>
                        ✅ Feature 2 <br/><br/>
                        ✅ Feature 3 <br/><br/>
                        ✅ Feature 4 <br/><br/>
                        ✅ Feature 5 <br/><br/>
                        ✅ Feature 6 <br/><br/>
                    </Row> 
                </Card.Body>
                <Card.Footer>
                    <Row justify="center">
                        <Button disabled>
                            Contact Sales
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
          </div>
          <Spacer y={3} />
          <Spacer y={3} />
       </div>
    </div>
  )
}
