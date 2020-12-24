import React from 'react';
import { Container, FormButton, Icon, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text, Form } from './SignElements'

const Sign = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to="/" >Dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign into your account</FormH1>
                            <FormLabel  htmlFor ="for">
                                Email
                            </FormLabel>
                            <FormInput type="email" required/>
                            <FormLabel  htmlFor ="for">
                                Password
                            </FormLabel>
                            <FormInput type="password" required/>
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forget Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </div>
    )
}

export default Sign
