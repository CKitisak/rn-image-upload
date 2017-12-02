import React from 'react';
import { Dimensions, Image } from 'react-native';
import { Content, Text, Item, Thumbnail, Input, View } from 'native-base';

const window = Dimensions.get('window');
const imageSize = window.width - 40;

const AppBody = () => (
  <Content padder>
    <Text>Share your photo with some comment to us...</Text>
    <View padder style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg' }}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
    <Item regular last>
      <Input placeholder="Your comment..." />
    </Item>
  </Content>
);

export default AppBody;
