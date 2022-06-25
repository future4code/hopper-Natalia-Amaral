import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectedPages';

const ErrorPage = () => {
  const navigate = useNavigate();
  useProtectedPage();

  return (
    <>
      <h1 onClick={() => navigate('/')}>Página não encontrada!!</h1>
    </>
  );
}

export default ErrorPage;