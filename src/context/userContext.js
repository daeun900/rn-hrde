import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userNm, setUserNm] = useState(''); //사용자이름

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userNm');
      
      if (jsonValue != null) {
        const { value, createdTime, expirationTime } = JSON.parse(jsonValue);

        // 현재 시간 구하기 (Unix 타임스탬프)
        const currentTimeStamp = Math.floor(Date.now() / 1000);

        // 만료 시간 확인
        if (currentTimeStamp < expirationTime) {
          console.log('Stored value:', value);
          setUserNm(value); // 상태 변수에 할당
          console.log('Created time:', new Date(createdTime * 1000).toLocaleString());
          console.log('Expiration time:', new Date(expirationTime * 1000).toLocaleString());
        } else {
          console.log('Data has expired');
        }
      } else {
        console.log('No data stored for the key');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateUserNm = async () => {
    await getData();
  };

  return (
    <UserContext.Provider value={{ userNm, setUserNm, updateUserNm }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };