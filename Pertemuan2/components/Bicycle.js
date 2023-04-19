import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default function Bicycle() {
    const city = "south west";
    const peoples = [{ name: 'bagas', fams: 'Brother' }, { name: 'Bagus', fams: 'Brother' }];
    return (
        <View>
            <Text>Hi i'm a Bicycle</Text>
            <TakeARide bebas={peoples} />
            {Place2Go(city)}
            <View>
                <Text>Sepeda Gunung</Text>
                <Image source={require("../assets/sepedagunung.jpeg")} style={{ width: 200, height: 200 }} />
            </View>

            <View>
                <Text>Sepeda Lipat</Text>
                <Image source={require("../assets/sepedapolygon.jpeg")} style={{ width: 200, height: 200 }} />
            </View>
        </View>
    )
}

const TakeARide = ({ bebas }) => {
    return (
        <View>
            <Text>Let's go riding with me:</Text>
            {bebas.map((v, index) => (
                <View key={index}>
                    <Text>{v.name} / my {v.fams}</Text>
                </View>
            ))}
        </View>
    )
};

function Place2Go(value) {
    return <Text>We'r going to {value} now, come on</Text>
}