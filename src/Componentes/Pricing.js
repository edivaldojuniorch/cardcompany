import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { Button } from './Button';
import { IconContext } from 'react-icons';
import './Pricing.css'



function Pricing(props) {



  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>

      <div>

        <div className="pricing__section">
          <h1>Pricing</h1>
          <div className="pricing__wrapper">
            <div className="pricing__heading">
              <div className="princing__container">

                <Link className="pricing__container-card">

                  <div className="pricing__container-cardInfo">
                    <div className="icon"><FaFire /></div>
                    <h3> Starter </h3>
                    <h4>$8.99</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li> 100 Transactions </li>
                      <li> 2% Cash Back </li>
                      <li> $ 10,000 Limit</li>

                    </ul>

                    <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plane</Button>
                  </div>

                </Link>


                <Link className="pricing__container-card">

                  <div className="pricing__container-cardInfo">
                    <div className="icon"><FaFire /></div>
                    <h3> Starter </h3>
                    <h4>$8.99</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li> 100 Transactions </li>
                      <li> 2% Cash Back </li>
                      <li>  $ {props.preco},00 Limit</li>
                    </ul>

                    <Button buttonSize='btn--wide' buttonColor='blue'>Choose Plane</Button>
                  </div>

                </Link>


              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>

  )
}

export default Pricing
