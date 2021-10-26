/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Icon} from 'react-native-elements';
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import {colors} from '../global/styles';

const FoodCard = ({
  OnPress,
  name,
  delivery,
  deliveryFee,
  promotion,
  promotionType,
  rating,
  distance,
  minutesAway,
  image,
  screenWidth,
}) => {
  return (
    <TouchableOpacity>
      <View style={{...styles.card, width: screenWidth}}>
        <Image style={{...styles.image, width: screenWidth}} source={image} />

        <View>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={{...styles.info, width: screenWidth}}>
          <Text>{minutesAway}</Text>
          <Icon
            name="circle-small"
            type="material-community"
            color="black"
            size={18}
            iconStyle={{marginTop: 3}}
          />
          <Text>{distance}</Text>
          {delivery && (
            <Icon
              name="circle-small"
              type="material-community"
              color="black"
              size={18}
              iconStyle={{marginTop: 3}}
            />
          )}
          {delivery && <Text>${deliveryFee} Delivery Fee</Text>}

          <View style={styles.rating}>
            <Text>{rating}</Text>
          </View>
        </View>
      </View>

      {promotion && (
        <View style={styles.discount}>
          <Text style={styles.discountText}>{promotionType}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  image: {
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 'auto',
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: colors.blue,
    padding: 5,
  },
  discount: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  discountText: {
    color: 'white',
    marginHorizontal: 5,
    marginVertical: 3,
  },
});
