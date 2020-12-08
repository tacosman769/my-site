import React from 'react'
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'
import './style.css'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y-100}px,0) translate3d(-50%,-50%,0)`

export default function Goo() {
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
    return (
        <div className="about">
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                    <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                </filter>
            </svg>
            <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
                {trail.map((props, index) => (
                    <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                ))}
            </div>
            <dl>
                <dt>
                    <h1>About</h1>
                </dt>
                <dd>
                    <p>
                        Programmer, audiophile, SFF fanatic, simple life, monster <br></br>
                    energy fan. I'm on a daily quest for the ideal PC desk <br></br>
                    environment. I'm obsessed with the look and feel of all my <br></br>
                    possessions.I also do some modeling as a hobby.
                    </p>
                </dd>
                <dt>
                    <h1>Skill</h1>
                </dt>
                <dd>
                    <p>
                        HTML / CSS / Java / C / PHP /<br></br>
                    Javascript / jQuery / React /<br></br>
                    Fusion360 / Blender
                    </p>
                </dd>
                <dt>
                    <h1></h1>
                </dt>
                <dd>
                </dd>
            </dl>
        </div>
    )
}
render(<Goo />, document.getElementById('root'))