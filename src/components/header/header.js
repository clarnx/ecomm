import React from "react"
// import Medicine from "../../assets/images/Medicine.svg"
import {GiPlantsAndAnimals} from 'react-icons/gi'
import "./header.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Card } from "./card"
import { User } from "./user"
import { Link } from "react-router-dom"

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <Link to='/'>
              <GiPlantsAndAnimals style={{color:"darkgreen", fontSize: '4rem', marginLeft:'2rem'}}/>
              {/* <h1>Outdoor House</h1> */}
            </Link>
          </div>
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input type='text' placeholder='Search...' />
          </div>
          <div className='account flexCenter'>
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
