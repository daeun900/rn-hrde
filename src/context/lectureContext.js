import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LectureContext = createContext();

export const LectureProvider = ({ children }) => {
  const [lectures, setLectures] = useState([]);

  const fetchLectureData = async () => {
    try {
      const userIdSession = await AsyncStorage.getItem('userId');
      const userData = JSON.parse(userIdSession);
      if (userData && userData.value) {
        const userId = userData.value; // 아이디 추출
        console.log('userId 값 ---->', userId);
        const response = await axios.post("https://hrdeedu.co.kr/mobileTest/lecture_list.php", { id: userId });

        // 서버 응답 형식 확인
        console.log('Server response:', response.data);
        
        const lectureList = response.data.data;

        // 배열 내의 객체들을 상태로 설정
        const formattedLectureList = lectureList.map((lecture, index) => ({
          id: index.toString(),
          ContentsName: lecture[0], //강의제목
          ProgressStep: lecture[1], //현재 차시 진행 상태
          ProgressNum: lecture[2], //현재강의차시번호
          Chapter: lecture[3], //총차시수
          ProgressP: lecture[4], //현재진도율
        }));

        setLectures(formattedLectureList);
      }
    } catch (err) {
      console.log(`Error fetching lecture data: ${err}`);
    }
  };

  const clearLectures = () => {
    setLectures([]);
  };

  useEffect(() => {
    fetchLectureData();
  }, []);


  return (
    <LectureContext.Provider value={{ lectures, fetchLectureData, clearLectures }}>
      {children}
    </LectureContext.Provider>
  );
};

export const useLectureContext = () => useContext(LectureContext);
