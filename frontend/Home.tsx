import React  from 'react';
import {Button, Pressable,TouchableOpacity, Image, StyleSheet, Text, View, StatusBar} from 'react-native';

type HomeProps = {
    userName : string;
    score : number;
    style : string;
    onPress: ()=> void
}

export const Home : React.FC<HomeProps> = ({userName , score}) => {
    let heightStatusBar = StatusBar.currentHeight
    const style = HomeStyle({heightStatusBar});
    return (
        <View style={style.container}>
            <StatusBar  translucent={true}/>
            <View style={style.textContainer}>
                <Text style={style.wording}>Username</Text>
                <Text style={style.wording}> Score</Text>
            </View>
            <View style={style.buttonContainer}>
                <View style={style.buttonContainerBoth}>
                    <TouchableOpacity style={style.buttonChallenge}>
                        <Image style={style.icon} source={require('./assets/sword-svgrepo-com.png')}/>
                        <Text style={style.wordingButton}> Challenge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.buttonTraining} onPress={() => console.log(heightStatusBar)}>
                    <Image style={style.icon} source={require('./assets/dumbbell-svgrepo-com.png')}/>
                        <Text style={style.wordingButton}> Training </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.buttonContainerScore}>
                    <TouchableOpacity  style={style.buttonWeeklyRanking}>
                        <Text style={style.wordingButton}>Weekly Ranking</Text>
                        <Image style={style.iconCup} source={require('./assets/cup-1-svgrepo-com.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.footer}></View>
        </View>
    )
}

const HomeStyle = ({heightStatusBar}) => StyleSheet.create({
    container : {
        flexDirection : 'column',
        height : '100%',
        backgroundColor : '#FFEDE1',
        marginTop : heightStatusBar,
        width : '100%',
        // justifyContent : 'space-evenly'
    },
    footer: {
        // backgroundColor : 'purple',
        flex : 1
    },
    icon : {
        height : 50,
        width : 50
    },
    iconCup : {
        marginLeft : 20,
        height : 25,
        width : 25
    },
    wording : {
        fontWeight : 'bold',
        fontSize : 20
    },
    wordingButton : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20
        
    },
    textContainer : {
        flex : 1,
        height : '20%',
        marginHorizontal : 50,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        // backgroundColor : 'blue'
    },
    buttonContainer : {
        flex : 1,
        flexDirection : 'column',
        // backgroundColor : 'pink',
        marginHorizontal : 50,
        // gap : 25
    },
    buttonContainerBoth : {
        flex : 3,
        flexDirection : 'row',
        justifyContent : 'center',
        // backgroundColor : 'yellow',
        gap : 25,
        // marginHorizontal : 50,
        marginTop : '20%',
        // marginBottom : '-20%'
    },
    buttonContainerScore : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        // marginTop : '-15%'
    },
    buttonChallenge : {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        backgroundColor : '#FCCC32',
        height : '65%',
        borderRadius : 5,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 10,
    },
    buttonTraining : {
        display : 'flex',
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        backgroundColor : '#FA003F',
        height : '65%',
        borderRadius : 5,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 10,
    },
    buttonWeeklyRanking : {
        backgroundColor : '#ED6931',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        height : '100%',
        width : '100%',
        borderRadius : 5,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 10,
    }
});