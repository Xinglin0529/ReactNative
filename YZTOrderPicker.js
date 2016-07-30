
import React, { Component, PropTypes } from 'react';
import {
	View,
	Picker,
	Text,
	Modal,
	StyleSheet,
	Dimensions,
	Animated,
	Easing,
} from 'react-native';

const window = Dimensions.get('window');

class YZTOrderPicker extends Component {
	static propTypes = {
		itemList: PropTypes.array,
		visible: PropTypes.bool,
		selectedValue: PropTypes.string,
		onConfirmClick: PropTypes.func,
		onCancelClick: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			itemList: [],
			selectedValue: '',
			translateValue: new Animated.ValueXY({x: 0, y: 0}),
		}

		this.animatedMoveVisible = Animated.timing(
			this.state.translateValue,
			{
				toValue:{x:0,y:-260},
				duration:200,
				easing:Easing.linear
			}
		);

		this.animatedMoveHide = Animated.timing(
			this.state.translateValue,
			{
				toValue:{x:0,y:0},
				duration:200,
				easing:Easing.linear
			}
		);
	}

	componentWillUpdate() {
		if (!this.state.visible) {
			this.animatedMoveVisible.start();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.visible !== undefined) {
			if (nextProps.visible) {
				this.setState({
					visible: nextProps.visible,
					itemList: nextProps.itemList,
					selectedValue: nextProps.selectedValue,
				});
			} else {
				this.animatedMoveHide.start();
				setTimeout(()=>{
					this.setState({visible: nextProps.visible});
				}, 200);
			}
		}
	}

	_setSelectedValue(value) {
		this.setState({selectedValue: value});
	}

	render() {
		const itemList = this.state.itemList;
		const pickItems = [];
		if (itemList) {
			for (value of itemList) {
				pickItems.push(<Picker.Item key={`key:${value}`} label={value} value={value} />)
			}
		}

		const onConfirmClick = this.props.onConfirmClick;
		const onCancelClick = this.props.onCancelClick;

		return (
			<Modal
				animationType="fade"
				transparent={true}
				visible={this.state.visible}
			>
				<Animated.View style={[styles.container,
					{transform:[
                        {translateX:this.state.translateValue.x},
                        {translateY:this.state.translateValue.y},
                    ]}]}>
					<View style={styles.toolBar}>
						<Text
							style={styles.cancel}
							onPress={()=>{
								onCancelClick && onCancelClick();
							}}
						>
							取消
						</Text>
						<Text
							style={styles.complete}
							onPress={()=>{
								onConfirmClick && onConfirmClick(this.state.selectedValue);
							}}
						>
							确定
						</Text>
					</View>
					<Picker
						selectedValue={this.state.selectedValue}
						onValueChange={(value) => {
                            this._setSelectedValue(value);
                        }}
					>
						{pickItems}
					</Picker>
				</Animated.View>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		backgroundColor: '#9d9d9d',
		width: window.width,
		bottom: -260,
	},
	toolBar: {
		height: 44,
		backgroundColor: 'gray',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10,
		alignItems: 'center',
	},
	complete: {
		color: '#28b6ea',
		fontSize: 15,
	},
	cancel: {
		color: '#333333',
		fontSize: 15,
	},
})

export default YZTOrderPicker;