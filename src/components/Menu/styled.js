import styled from 'styled-components';
import musicNote from '../../assets/music_note.png';
import { useSpring, animated } from 'react-spring';

export const Title = styled.h1`
    font-size: 40px;
`;  

export const Display = styled.div`
    height: 240px;
    width: 340px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Image = styled(animated.div)`
    background-image: url(${musicNote});
    background-size: 100%;
    width: 70px;
    height: 100px;
`;

export const Text = styled(animated.h4)`

`;

export const MenuImg = () => {
    const items = [1, 2, 3];
    const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
    const { radians } = useSpring({
        to: async next => {
            while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },   
        config: { duration: 3500 },
        reset: true,
    });  

    return(
        <Display>
            {items.map(item => <Image key={item} style={{ transform: radians.interpolate(interp(item)) }}/>)}
        </Display>
    )
}

export const MenuText = () => {
    const props = useSpring({
        to: async (next, cancel) => {
            while(1) {
                await next({opacity: 1})
                await next({opacity: 0})
            }
        },
        config: { duration: 500 },
        from: { opacity: 1 }, 
        reset: true,
    })

    return(
        <Text style={props}> press enter to start </Text>    
    )
}
