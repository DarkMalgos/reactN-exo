import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Picker, StyleSheet } from 'react-native';

//components
import { Card, CardSection, Input, Button, Spinner } from './common';

//actions
import { employeeUpdate, employeeCreate } from '../actions';

type Props = {}
class EmployeeCreate extends Component<Props> {

    onButtonPress() {
        const { employee, phone, shift } = this.props;

        this.props.employeeCreate({ employee, phone, shift: shift || 'Lundi' });
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label={"Name"}
                        placeholder={"Jane"}
                        value={this.props.employee}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'employee', value: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        keyboardType={"number-pad"}
                        label={"Phone"}
                        placeholder={"0688995700"}
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection : 'column', height: 50, paddingLeft: 20 }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{ flex:1, width: 150, height: 40}}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day})}
                    >
                        <Picker.Item label={"Lundi"} value={"Lundi"} />
                        <Picker.Item label={"Mardi"} value={"Mardi"} />
                        <Picker.Item label={"Mercredi"} value={"Mercredi"} />
                        <Picker.Item label={"Jeudi"} value={"Jeudi"} />
                        <Picker.Item label={"Vendredi"} value={"Vendredi"} />
                        <Picker.Item label={"Samedi"} value={"Samedi"} />
                        <Picker.Item label={"Dimanche"} value={"Dimanche"} />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        buttonText={"Create"}/>
                </CardSection>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
    pickerTextStyle: {
        fontSize: 18
    }
})

const mapStateToProps = (state) => {
    const { employee, phone, shift } = state.employeeForm
    
    return { employee, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate } )(EmployeeCreate);