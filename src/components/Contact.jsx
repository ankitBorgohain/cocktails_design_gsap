import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('.content h2', { type: 'words' });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut',
        });

        tl
        .from(titleSplit.words, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.02,
        })
        .from('#contact h3, #contact p', 
            {yPercent: 100,
            opacity: 0,
            stagger: 0.02,
        })
        .to('#f-right-leaf', { yPercent: -20,  ease: 'power1.inOut', duration: 1.5}, 0)
        .to('#f-left-leaf', { yPercent: 10, scale:1.5, ease: 'power1.inOut', duration: 1.5}, 0)
        .to('#f-drinks', { yPercent:15, xPercent:10, scale:0.8, ease: 'power1.inOut', duration: 1.5}, 0)
         

    }, [])
  return (
    <footer id='contact'>
        <img src='/images/footer-right-leaf.png' alt='leaf-right' id='f-right-leaf'/>
        <img src='/images/footer-left-leaf.png' alt='leaf-left' id='f-left-leaf'/>
        
        <div className='content'>
            <h2>Where to Find Us</h2>

            <div>
                <h3>Visit Our Bar</h3>
                <p>123 Cocktail Lane, Mixology City</p>
            </div>
            
            <div>
                <h3>Contact Us</h3>
                <p>(555) 987-6543</p>
                <p>contact@cocktailbar.com</p>
            </div>

            <div>
                <h3>Opens Everyday</h3>
                {openingHours.map((item, index) => (
                  <p key={index}>{item.day}: {item.time}</p>
                ))}
            </div>

            <div>
                <h3>Socials</h3>
                <div className='flex-center gap-5'>
                    {socials.map((social, index) => (
                      <a href={social.url} key={index} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
                        <img src={social.icon} alt={social.name} />
                      </a>
                    ))}
                </div>
            </div>
        </div>

        <img src='/images/footer-drinks.png' alt='footer-drinks' id='f-drinks'/>

    </footer>
  )
}

export default Contact