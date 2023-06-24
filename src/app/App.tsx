import { useThemeLayout } from '@app/shared/theme';
import styled from 'styled-components';
import './resetBrowserStyles.css';
import { Typography } from '@mui/material';

const SomeComponent = () => <Typography variant='h1'> TITLE </Typography>;

// remove
const StyledMain = styled.main`
  padding: 20px 20px;
  flex: 1 1 auto;
  background: ${({ theme }) => theme.palette.colors.mainBackground};
  color: ${({ theme }) => theme.palette.colors.text};
  min-height: 100vh;
`;

export const App = (props: any) => {
  const theme = useThemeLayout();

  return (
    <StyledMain /* onClick={theme.toggleColorMode} */>
      <SomeComponent />
      <Typography> Hello world </Typography>
    </StyledMain>
  );
};
