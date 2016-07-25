import React, { Component } from 'react';
import {
    Modal,
    StyleSheet,
    Switch,
    Text,
    TouchableHighlight,
    View,
    Dimensions,
    Animated,
    Easing
} from 'react-native';

import CustomButton from './CustomButton';
import Touch from './Touch';

const _window = Dimensions.get('window');

var animatedShow;
var animatedSpring;
var aimatedRotate;
var animatedMove;
var animatedDecay;

//动画组合
var animatedSequence; //顺序执行
var animatedParallel; //同时执行
var animatedStagger;  //错位执行

class ModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            bounceValue: new Animated.Value(1),
            fadeInOpacity: new Animated.Value(1),
            rotate: new Animated.Value(0),
            translateValue: new Animated.ValueXY({x: 0, y: 0}),
            left: new Animated.Value(0),
        }

        //显现动画
      animatedShow = Animated.timing(
          this.state.fadeInOpacity, {
              toValue: 1,  //目标值
              duration: 5000,//动画时间
              easing: Easing.linear  //缓动函数
          }
      );

      //弹跳动画
      animatedSpring = Animated.spring(
          this.state.bounceValue,
          {
              toValue: 0.8,
              friction: 1,
              tension: 40
          }
      );

      //旋转动画
      animatedRotate =  Animated.timing(
          this.state.rotate,
          {
              toValue:1,
              duration:3000,
              easing:Easing.linear
          }
      );

      //位移动画
      animatedMove = Animated.timing(
          this.state.translateValue,
          {
              toValue:{x:50,y:100},
              //toValue:this.state.translateValue,
              duration:2000,
              easing:Easing.linear
          }
      );

      //衰减动画
      animatedDecay =  Animated.decay(
          this.state.left,
          {
              velocity:0.4,
              deceleration:0.997,
          }
      );


      //顺序
      animatedSequence = Animated.sequence(
          [
              //Animated.delay(1000),
              animatedShow,
              animatedSpring,
              animatedRotate
          ]
      );

      //同时
      animatedParallel = Animated.parallel(
          [
              //Animated.delay(1000),
              animatedShow,
              animatedSpring,
              animatedRotate
          ], {stopTogether:true}
      );

      //错峰
      animatedStagger = Animated.stagger(500,
          [
              //Animated.delay(1000),//延迟时间
              animatedShow,
              animatedSpring,
              animatedRotate
          ]
      );
    }

    _showModal() {
        this.setState({isShow: true})
    }

    _closeModal() {
        this.setState({isShow: false})
    }

    componentDidMount() {
        animatedStagger.start();
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomButton
                    viewStyle={[styles.commitButtonViewStyle]}
                    textStyle={styles.commitButtonTextStyle}
                    onPress={()=>this._showModal()}
                    title='提交'
                />
                <Animated.View style={{
                    height: 100,
                    width: 100,
                    backgroundColor: 'yellow',
                    opacity: this.state.fadeInOpacity,
                    left:this.state.left,
                    transform:[
                        {scale:this.state.bounceValue},
                        {rotate:this.state.rotate.interpolate({inputRange:[0,1],outputRange:['0deg','360deg']})},
                        {translateX:this.state.translateValue.x},
                        {translateY:this.state.translateValue.y},
                    ],
                }}/>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isShow}
                    onRequestClose={() => {this._closeModal()}}
                >
                    <Touch onPress={()=>this._closeModal()}>
                        <Animated.View
                            style={{flex: 1,
                                height: _window.height,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{width: 200, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                                <Text> Hello World </Text>
                                <Text> Hello World</Text>
                            </View>
                        </Animated.View>
                    </Touch>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
        justifyContent: 'center',
    },
    commitButtonViewStyle: {
        marginLeft: 100,
        marginTop: 20,
        backgroundColor: 'black',
        height: 44,
        width: 200,
        borderRadius: 22,
    },
    commitButtonTextStyle: {
        fontSize: 18,
        color: 'white',
    },
})

export default ModalDemo;
