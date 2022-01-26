import React, {Fragment} from 'react';
import Thing from './thing'
import  './style.css'

const Things = () => {
    return (
        <Fragment>
            <h1>Amazing things in the universe</h1>
            <Thing title="Black Hole"
                   img_url="https://i.pinimg.com/originals/36/44/e8/3644e8246a043ab697bcc9af0e584a15.gif"
                   description="A black hole is a region of spacetime where gravity is so strong that nothing no particles or even electromagnetic radiation such as light can escape from it. The theory of general relativity predicts that a sufficiently 
                   compact mass can deform spacetime to form a black hole. The boundary of no escape is called the event horizon. 
                   Although it has an enormous effect on the fate and circumstances of an object crossing it, it has no locally detectable 
                   features according to general relativity."/>
            <Thing title="Pulsar"
                   img_url="https://svs.gsfc.nasa.gov/vis/a010000/a013000/a013058/Pulsar_Loop_Electron_Glow.gif"
                   description="A pulsar (from pulsating radio source) is a highly magnetized rotating neutron star that emits 
                   beams of electromagnetic radiation out of its magnetic poles. This radiation can be observed only when a beam of
                   emission is pointing toward Earth (similar to the way a lighthouse can be seen only when the light is pointed in the 
                   direction of an observer), and is responsible for the pulsed appearance of emission. Neutron stars are very dense and
                   have short, regular rotational periods. This produces a very precise interval between pulses that ranges from
                   milliseconds to seconds for an individual pulsar. Pulsars are one of the candidates for the source of 
                   ultra-high-energy cosmic rays. (See also centrifugal mechanism of acceleration.)"/>
            <Thing title="Wormhole"
                   img_url="https://c.tenor.com/mQlsQ5hSO2kAAAAM/wormhole-einstein.gif"
                   description="A wormhole (or Einstein–Rosen bridge or Einstein–Rosen wormhole) is a speculative structure linking disparate 
                   points in spacetime, and is based on a special solution of the Einstein field equations.
                   A wormhole can be visualized as a tunnel with two ends at separate points in spacetime (different locations, different 
                   points in time, or both)."/>
            <footer>Desenvolvido por<a href='https://github.com/prince-neres' target='_blank'>Prince Neres</a></footer>
        </Fragment>
    )
}

export default Things;