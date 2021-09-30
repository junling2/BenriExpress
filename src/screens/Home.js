/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/styles';

const Home = () => {
  const [delivery, setDelivery] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          <View
            style={{
              backgroundColor: 'mintcream',
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
                  backgroundColor: delivery
                    ? '#87cefa'
                    : 'rgba(135, 206, 250, 0.2)',
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery
                    ? 'rgba(135, 206, 250, 0.2)'
                    : '#87cefa',
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
  },

  deliveryText: {
    marginLeft: 5,
    fontSize: 18,
  },

  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'mintcream',
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
});

export default Home;
