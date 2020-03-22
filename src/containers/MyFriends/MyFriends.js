import React from 'react';
import {
    Header,
    RouteWrapper,
    MyRouteContainer,
    FormRenderContainer
} from './myfriends.style';
import { List } from '@solid/react';

class MyFriends extends React.Component{

 render(): React.ReactNode {
     return (

            <RouteWrapper data-testid="route-component">
            <MyRouteContainer>
            <FormRenderContainer>
                <Header>
                    <h1>My friends</h1>
                </Header>
                <div>
                    <List src="user.friends" />
                </div>
            </FormRenderContainer>
            </MyRouteContainer>
            </RouteWrapper>
        );
    }

};

export default MyFriends;
