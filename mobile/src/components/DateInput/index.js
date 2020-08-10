import React, { useMemo, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, setDate }) {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  const handleToggleDataPicker = useCallback(() => {
    setShowDateTimePicker((state) => !state);
  }, []);

  const handleDateChanged = useCallback(
    (event, selectedDate) => {
      if (Platform.OS === 'android') {
        setShowDateTimePicker(false);
      }
      if (selectedDate) {
        setDate(selectedDate);
      }
    },
    [setDate]
  );

  return (
    <Container>
      <DateButton onPress={handleToggleDataPicker}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {showDateTimePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          onChange={handleDateChanged}
        />
      )}
    </Container>
  );
}
