import React from "react"
import "./category.css"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { category } from "../../resources/data/data"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' style={{color: 'black'}}/>
      </button>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' style={{color: 'black'}} />
      </button>
    </div>
  )
}

export const Category = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='category'>
        <div className='container'>
          <Slider {...settings}>
            {category.map((item) => (
              <div className='box' key={item.id}>
                <div className='box boxItems'>
                  <img src={item.cover} alt='' />
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}