import styled from 'styled-components/native';
import React, {useState} from 'react';
import {ScrollView, useWindowDimensions, View} from 'react-native';


const CarouselContainer = styled.View`
  flex: 1;
`;
const Row = styled.View`
  flex-direction: row;
`;
const CarouselItemContainer = styled.View`
  overflow: hidden;
  padding: 7px;
`;
const CarouselItem = styled.Image`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 30px;
`;

const Carousel = ({data}) => {
  const [newData] = useState([
    {key: 'spacer-left'}, 
    ...data.map((item, index) => ({ ...item, key: `item-${index}` })), 
    {key: 'spacer-right'}
  ]);

  const {width} = useWindowDimensions();
  const SIZE = width * .9;
  const SPACER = (width - SIZE) / 2;
  return (
    <CarouselContainer style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        horizontal
        pagingEnabled
        contentContainerStyle={{width: `${width}`}}
        scrollEventThrottle={200}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        snapToInterval={SIZE}>
        <Row>
          {newData.map((item, index) => {
            if (!item.image){
              return<View key={item.key} style={{width:SPACER}}/>
            }
            return (
              <CarouselItemContainer key={item.key} width={SIZE}  >
                <CarouselItem source={item.image}/>
              </CarouselItemContainer>
            );
          })}
        </Row>
      </ScrollView>
    </CarouselContainer>
  );
};

export default Carousel;