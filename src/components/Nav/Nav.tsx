import React from 'react'
import { MainHeader } from '../Styled/Header'
import { Logo } from '../Styled/Images'
// @ts-ignore
import logoImg from '../../images/rei-dev-white.webp'
import { Row, RowItem } from '../Styled/Container'
import { Text } from '../Styled/Text'
import StyledTheme from '../Styled'


/**
 * * Will render the main navigation tab (top of page)
 * 
 * @returns {React.FunctionComponent}
 */
const Nav = () => {
    return (
        <MainHeader>
            <Row style={{ padding: "0 15px" }} as="article" items={"center"} content={"space-evenly"}>
                <Row as={RowItem} spacing={4} items={"center"}>
                    <Logo
                        src={logoImg}
                        alt={"Rei dev"}
                    />
                    <Text className="border-left">
                        Desenvolvimento
                        <br />
                        Profissional
                    </Text>
                </Row>
                <Row as={RowItem} spacing={4} items={"center"}>
                    <Row as="ul" content={"space-evenly"}>
                        <li>
                            <Text>Lorem ipsum</Text>
                        </li>
                        <li>
                            <Text>Lorem ipsum</Text>
                        </li>
                        <li>
                            <Text>Lorem ipsum</Text>
                        </li>
                    </Row>
                </Row>
                <Row as={RowItem} spacing={3}>
                    <Row as="ul" content={"flex-start"}>
                        <li>
                            <button>
                                Cadastrar
                            </button>
                        </li>
                        <li>
                            <button>
                                Login
                            </button>
                        </li>
                    </Row>
                </Row>
            </Row>
            <Row style={{ padding: "8px 15px" }} as="article" items={"center"} content={"space-evenly"}>
                <RowItem spacing={3}>
                    <Text align={"center"}>
                        Alguma coisa
                    </Text>
                </RowItem>
                <RowItem spacing={6}>
                    <Row as={"ul"} content={"space-evenly"}>
                        <li className="floating-border">
                            <Text>Lorem ipsum</Text>
                        </li>
                        <li>
                            <Text>Lorem ipsum</Text>
                        </li>
                        <li>
                            <Text>Lorem ipsum</Text>
                        </li>
                        <li>
                            <Text>Lorem ipsum</Text>
                        </li>
                        <li>
                            <Text>Lorem ipsum</Text>
                        </li>
                        <li>
                            <Text>Lorem ipsum</Text>
                        </li>
                    </Row>
                </RowItem>
                <RowItem spacing={3} />
            </Row>
        </MainHeader>
    )
}

export default Nav
