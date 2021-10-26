/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import FoodCard from '../components/FoodCard';
import HomeHeader from '../components/HomeHeader';
import {filterData, foodData} from '../global/data';
import {colors} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Home = () => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.secondary : 'gainsboro',
                }}>
                <Text
                  style={
                    delivery ? styles.deliveryTextActive : styles.deliveryText
                  }>
                  Delivery
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? 'gainsboro' : colors.secondary,
                }}>
                <Text
                  style={
                    delivery ? styles.deliveryText : styles.deliveryTextActive
                  }>
                  Pick Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressBar}>
            <View style={styles.address}>
              <Icon
                type="material-community"
                name="map-marker"
                color="black"
                size={26}
              />
              <Text style={{marginLeft: 5, marginRight: 5}}>5460 Broadway</Text>
            </View>

            <View style={styles.deliveryTime}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color="black"
                size={26}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="tune"
              color="black"
              size={26}
            />
          </View>
        </View>

        <View style={{backgroundColor: 'white', marginTop: 10}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.iconCardActive}
                      : {...styles.iconCard}
                  }>
                  <Image source={item.image} />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.iconCardTextActive}
                          : {...styles.iconCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={{backgroundColor: 'white', marginTop: 10}}>
          <FlatList
            horizontal={true}
            data={foodData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <FoodCard
                  name={item.name}
                  delivery={delivery}
                  deliveryFee={item.deliveryFee}
                  promotion={item.promotion}
                  promotionType={item.promotionType}
                  rating={item.rating}
                  distance={item.distance}
                  minutesAway={delivery ? item.deliveryTime : item.pickupTime}
                  screenWidth={SCREEN_WIDTH * 0.8}
                  image={item.image}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },

  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 5,
    marginVertical: 10,
  },

  deliveryText: {
    fontSize: 18,
    color: 'black',
  },

  deliveryTextActive: {
    fontSize: 18,
    color: 'white',
  },

  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 15,
  },

  addressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 2,
  },

  address: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },

  deliveryTime: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    paddingHorizontal: 5,
    borderRadius: 5,
  },

  iconCard: {
    borderRadius: 15,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    height: 90,
    marginHorizontal: 10,
    marginVertical: 15,
  },

  iconCardActive: {
    borderRadius: 15,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    height: 90,
    marginHorizontal: 10,
    marginVertical: 15,
  },

  iconCardText: {
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
  },

  iconCardTextActive: {
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
});

export default Home;
