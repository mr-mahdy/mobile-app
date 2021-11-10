import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const CustomDatePicker = props => {
  const {textStyle, defaultDate} = props;
  const [date, setDate] = useState(moment(defaultDate));
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(moment(selectedDate));
      props.onDateChange(selectedDate);
    }
  };

  const renderDatePicker = () => {
    return (
      <DateTimePicker
        // timeZoneOffsetInMinutes={0}
        value={new Date(date)}
        mode="date"
        // format="DD-MM-YYYY"
        minimumDate={
          new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))
        }
        onChange={onChange}
      />
    );
  };

  return (
    <TouchableHighlight
      style={styles.date}
      activeOpacity={0}
      onPress={() => setShow(true)}>
      <View>
        <Text style={textStyle}>{date.format('DD-MM-YYYY')}</Text>
        {show && renderDatePicker()}
      </View>
    </TouchableHighlight>
  );
};

CustomDatePicker.defaultProps = {
  textStyle: {},
  defaultDate: moment(),
  onDateChange: () => {},
};

const styles = StyleSheet.create({
  date: {
    width: '50%',
    marginBottom: 30,
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});

export default CustomDatePicker;
