import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text } from "react-native";

const ProductContainer = styled.View `
background-color: #FFFFFF;
border-radius: ${() => `${wp('3.81%')}px`};
margin: ${() => `${hp('1.2%')}px`};
width: ${() => `${wp('95%')}px`};
height: ${() => `${hp('12%')}px`};
padding: ${() => `${wp('2.5%')}px`};
flex-direction: row;
`
const ProductImage = styled.Image`
  width: ${() => `${wp('20%')}px`};
  height: ${() => `${hp('10%')}px`};
  borderRadius: ${() => `${wp('1.9%')}px`};
  background-color: #000000;
`

const ProductInfo = styled.View`
  flex: 1;
  marginLeft: ${() => `${wp('2.5%')}px`};
`;
const ProductName = styled.Text`
  fontSize: ${() => `${wp('4%')}px`};
  fontWeight: bold;
  `;
const ProductDetails = styled.Text`
  fontSize: ${() => `${wp('3%')}px`};
  color: #888;
`;
const EditButton = styled.TouchableOpacity`
  position: absolute;
  right: ${() => `${wp('2.5%')}px`};
  top: ${() => `${hp('1%')}px`};
`;

const product = {
    name: 'Product Name',
    quantity: 10,
    price: 19.99,
  };

const ProductComponent: React.FC = () => {return (
    <ProductContainer>
      <ProductImage/>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductDetails>
        Quantidade: {product.quantity} | Preço: R$ {product.price}
        </ProductDetails>
      </ProductInfo>
      <EditButton onPress={() => { }}>
      <Text>Editar</Text>
      </EditButton>
    </ProductContainer>
  );
};

export default ProductComponent;