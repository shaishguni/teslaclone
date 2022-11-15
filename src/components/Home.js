import React from 'react'
import styled from 'styled-components';
import Section from './Section'


const Home = () => {
  return (
    <Container>Home 
        <Section 
        title="Model-S"
        description="Order Online for Touchless Delivery"
        backgroundIMG="/images/model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inverntory"
        />
        <Section 
        title="Model-S"
        description="Order Online for Touchless Delivery"
        backgroundIMG="/images/model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inverntory"
        />
        <Section 
        title="Model-S"
        description="Order Online for Touchless Delivery"
        backgroundIMG="/images/model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inverntory"
        />
    </Container>
    
  )
}

export default Home

const Container = styled.div`
    height:1000vh;
`