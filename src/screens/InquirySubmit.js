import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import { Button } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";
import DropDownPicker from 'react-native-dropdown-picker';


const Container = styled.View`
  padding: 30px;
  background-color: #fff;
  flex: 1;
`;

const Label = styled.Text`
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
`;

const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
  font-weight: 200;
  color: #767676;
  margin-top: 10px;
`;

const Name = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #0059C1;
  margin-left: 20px;
  margin-top: 20px;
`;

const Input = styled.TextInput.attrs(({ theme }) => ({ placeholderTextColor: theme.inputPlaceholder }))`
  color: #111111;
  padding: 20px 10px;
  font-size: 16px;
  border: 1px solid ${({ theme, isFocused }) => isFocused ? '#ccc' : '#eee'};
  border-radius: 10px;
  margin-top: 10px;
`;

const InputContainer = styled.View`
  position: relative;
`;

const CaptchaImg = styled.Image`
  position: absolute;
  top: 34px;
  left: 20px;
`;

const InquirySubmit = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { userNm, updateUserNm } = useContext(UserContext);

  useEffect(() => {
    updateUserNm();
  }, []);

  const [isFocused, setIsFocused] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  // selectbox
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '학습내용 문의', value: '학습내용 문의' },
    { label: '수강관련 문의', value: '수강관련 문의' },
    { label: '시스템 문의', value: '시스템 문의' },
  ]);


const submit = () => {
  navigation.navigate("InquiryComplete")
}

  const renderItem = () => (
    <Container contentContainerStyle={{ paddingBottom: insets.bottom }}>
      <View style={{ flexDirection: 'row' }}>
        <Label>이름</Label>
        <Name>{userNm}</Name>
      </View>
      <SmallTxt>* 1:1문의는 실시간으로 답변이 불가합니다. 빠른 상담을 원하시는 경우 카카오톡 상담을 이용해주세요</SmallTxt>
      <Label>보안코드</Label>
      <InputContainer>
        <CaptchaImg source={require('../../assets/76521.png')} />
        <Input
          placeholder="왼쪽의 보안코드를 입력하세요"
          isFocused={isFocused}
          onFocus={() => setIsFocused(true)}
          value={captcha}
          onChangeText={setCaptcha}
          style={{ paddingLeft: 90 }}
        />
      </InputContainer>
      <Label>문의종류</Label>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="문의유형을 선택하세요"
        containerStyle={{ marginTop: 20, borderColor: '#EEEEEE' }}
        style={{ paddingHorizontal: 20, paddingVertical: 10, borderColor: '#EEEEEE' }}
        textStyle={{ fontSize: 16 }}
        placeholderStyle={{ color: '#9a9a9a' }}
        dropDownContainerStyle={{ borderColor: '#EEEEEE', paddingHorizontal: 10 }}
      />
      <Label>문의 제목</Label>
      <Input
        placeholder="제목을 입력하세요"
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        value={title}
        onChangeText={setTitle}
      />
      <Label>문의 내용</Label>
      <Input
        placeholder="문의내용을 입력하세요"
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={4}
        style={{ height: 200 }}
      />
      <Button title="문의하기"  
      containerStyle={{borderRadius: 10,marginBottom:20}} 
      textStyle={{fontSize:16}}  
      backgroundColor="#008DF3"
      onPress={() => submit() }/>
    </Container>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <FlatList
        data={[{ key: 'inquiry' }]}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </KeyboardAvoidingView>
  );
};

export default InquirySubmit;
