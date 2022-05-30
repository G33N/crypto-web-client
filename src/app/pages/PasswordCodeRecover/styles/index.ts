import styled from 'styled-components/macro';

export const Body = styled.div`
  text-align: left;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;

export const InputNum = styled.input`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  margin-left: 14px;
  border: 1px solid #cecece;
  border-radius: 8.64px;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

export const Label = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  width: 100%;
  text-align: left;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 8px;
`;

export const Subtitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${p => p.theme.text};
  margin-bottom: 16px;
`;

export const TextCounter = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  padding-right: 5px;
`;

export const TextIn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 24px;
`;

export const TextMail = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  width: 100%;
  height: 32px;
  font-weight: 700;
  font-size: 24px;
  color: ${p => p.theme.text};
  letter-spacing: 0.0022em;
  line-height: 32px;
  margin-bottom: 20px;
`;

export const TitleSecond = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${p => p.theme.text};
  margin-bottom: 16px;
`;

export const Validator = styled.p`
  font-size: 0.6rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const WrapperCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #92c1fd;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 45px;
`;
