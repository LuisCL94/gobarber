import React, { useState, useEffect } from 'react';
import { Container, HourList, Hour, Title } from './styles';
import DateInput from '~/components/DateInput';
import api from '~/services/api';
import Background from '~/components/Background';

export default function SelectDateTime({ route, navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const { provider } = route.params;

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: selectedDate.getTime(),
        },
      });

      setHours(response.data);
    }
    loadAvailable();
  }, [selectedDate, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={selectedDate} setDate={setSelectedDate} />

        <HourList
          data={hours}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => handleSelectHour(item.value)}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}
