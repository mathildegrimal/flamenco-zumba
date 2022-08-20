import styled from 'styled-components';

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
`;
