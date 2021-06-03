import React from 'react'
import f1 from '../../images/footer_img/f1.svg';
import f2 from '../../images/footer_img/f2.svg';
import f3 from '../../images/footer_img/f3.svg';
import f4 from '../../images/footer_img/f4.svg';
import f10 from '../../images/footer_img/f10.svg';
import './footer.css';
function Footer() {
    return(
        <div className="footer_comp">
            <footer className="footer">
                <div className="divone">
                <ul className="lists">
                    <h4>ABOUT</h4>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Flipkart Stories</li>
                    <li>Press</li>
                    <li>Flipkart Wholesale</li>
                </ul>

                <ul className="lists">
                    <h4>HELP</h4>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                </ul>

                <ul className="lists">
                    <h4>POLICY</h4>
                    <li>Return Policy</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>EPR Compliance</li>
                </ul>

                <ul className="lists">
                    <h4>SOCIAL</h4>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                </ul>
                
                <ul className="lists">
                    <h4>Mail Us</h4>
                    <li>Flipkart Internet Private Limited</li>
                    <li>Building Alyssa, Begonia &</li>
                    <li>Clove Embassy Tech Village,</li>
                    <li>Outer Ring Road, Devarabeesanahalli Village,</li>
                    <li>Bengaluru, 560103,</li>
                    <li>Karnataka, India</li>
                </ul>

                <ul className="lists">
                    <h4>Registered Office Address:</h4>
                    <li>Flipkart Internet Private Limited</li>
                    <li>Building Alyssa, Begonia &</li>
                    <li>Clove Embassy Tech Village,</li>
                    <li>Outer Ring Road, Devarabeesanahalli Village,</li>
                    <li>Bengaluru, 560103,</li>
                    <li>Karnataka, India</li>
                    <li>CIN : U51109KA2012PTC066107</li>
                    <li>Telephone: 1800 208 9898</li>
                </ul>
            </div>
           
            </footer>
            {/* <ul className="flex space-btw padding-top"> */}
            <ul className="footer_lower" style={{listStyleType:'none'}}>
                <li><img src={f1}/> <span className="footerlowerspan">Sell on Flipkart</span></li>
                <li><img src={f2}/> <span className="footerlowerspan">Advertise</span></li>
                <li><img src={f3}/> <span className="footerlowerspan">Gifts Cards</span></li>
                <li><img src={f4}/> <span className="footerlowerspan">Help Center</span></li>
                <li className="footerlowerspan">© 2007-2020 Flipkart.com</li>
                <li><img src={f10}/></li>
            </ul>
        </div>
    )
}

export default Footer
