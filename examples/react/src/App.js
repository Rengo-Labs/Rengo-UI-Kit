import React from 'react'
import {Container, Row, Column, Button} from "rengo-ui-kit"
const App = () => {
    return (
        <>
           <Container props={{fluid:true}}>
                <Row>
                    <Column props={{xs: 12, sm:3, md:4, lg:12}}>
                        <h1>Test 1</h1>
                    </Column>
                    <Column props={{xs: 12, sm:3, md:4, lg:12}}>
                        <h1>Test 2</h1>
                    </Column>
                    <Column props={{xs: 12, sm:3, md:4, lg:12}}>
                        <h1>Test 3</h1>
                    </Column>
                </Row>
            </Container>
            <Container>
                <Row props={{center: 'xs'}}>
                    <Column props={{xs: 6}}>
                        <h1>Test 4</h1>
                    </Column>
                    <Column props={{xs: 6}}>
                        <Button props={{onClick: () => console.log('clicked')}} > button </Button>
                    </Column>
                </Row>
            </Container>
        </>
    )
}
export default App
