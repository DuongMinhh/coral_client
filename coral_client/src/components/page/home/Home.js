import React, { useContext } from 'react'
import styled from 'styled-components'
import topBg from '../../../share/background/top-background.jpg'
import bottomBg from '../../../share/background/bottom-background.jpg'
import { Button } from 'antd'
import { AppContext } from '../../provider/AppProvider'
import { btnCss } from '../../css-objects'

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    width: 100vw;
`
const Top = styled.div`
    background-image: url(${topBg});
    background-size: cover;
    height: 20vh;
    width: 100vw;
`
const Bottom = styled.div`
    background-image: url(${bottomBg});
    background-size: cover;
    height: 20vh;
    width: 100vw;
`
const Body = styled.div`
    height: 60vh;
    width: 100vw;
`
const Nav = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 30px;
    background-color: #483D8B;

    .flexStart {
        display: flex;
        align-items: center;
    }
    .flexEnd {
        display: flex;
        align-items: center;
    }
`
export default function Home() {
    const { navigation } = useContext(AppContext)
    return (
        <Wrapper>
            <Top></Top>
            <Body>
                <Nav>
                    <div className='flexStart'>
                        <Button
                            style={{ ...btnCss, marginLeft: '5px' }}
                            onClick={() => navigation('/')}
                        >
                            Home
                        </Button>
                        <Button
                            style={{ ...btnCss, marginLeft: '5px' }}
                            onClick={() => navigation('/')}
                        >
                            Statistic
                        </Button>
                    </div>

                    <div className='flexEnd'>
                        <Button
                            style={{ ...btnCss, marginRight: '5px' }}
                            onClick={() => navigation('/register')}
                        >
                            Register
                        </Button>
                        <Button
                            style={{ ...btnCss, marginRight: '5px' }}
                            onClick={() => navigation('/login')}
                        >
                            Login
                        </Button>
                    </div>
                </Nav>
            </Body>
            <Bottom></Bottom>
        </Wrapper>
    )
}
