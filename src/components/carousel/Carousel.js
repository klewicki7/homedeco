import React from 'react'
import logo from '../../image.jpg'
import { Navbar, Nav, Image, Form, FormControl, Button, Container, Carousel } from 'react-bootstrap'

const contentStyle = {
    height: 'auto',
    color: 'black',
    lineHeight: 'auto',
    textAlign: 'center',
    background: '#364d79',
};
function MyCarousel() {
    return (
        <Carousel indicators={false}>
            <Carousel.Item>
                <Image src="https://sommiercenter.com/media/slider/slide/2022_slider-60y18.png" style={{ height:200, width:'100%' }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="https://sommiercenter.com/media/slider/slide/2022_slider-winter_promo.png" style={{ height:200, width:'100%' }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="https://sommiercenter.com/media/slider/slide/2022_slider-60y18.png" style={{ height:200, width:'100%' }} />
            </Carousel.Item>
        </Carousel>
    )
}

export default MyCarousel