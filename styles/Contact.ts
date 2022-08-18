import styled from 'styled-components';
import { colors } from './constants';

export const FormContainer = styled.article`
  display: flex;
  margin: 40px 0 40px 0;
  gap: 10px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Input = styled.input`
  width: 300px;
  padding: 5px;
`;
export const InputLabel = styled.label`
  width: 120px;
  font-weight: bold;
`;

export const TextareaLabel = styled.label`
  width: 150px;
  font-weight: bold;
`;

export const Textarea = styled.textarea`
  width: 80%;
  height: 200px;
  padding: 20px;
  font-family: 'Arial';
`;
export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 80px 0 80px;

  > p {
    margin: 5px 0;

    > span {
      font-weight: bold;
    }
  }
`;

export const InfosSubtitle = styled.h2`
  font-size: 1.6em;
  margin: 0 0 50px 0;
  font-weight: bold;
  color: ${colors.rose};
`;
