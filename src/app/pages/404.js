// pages/404.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/'); // Redireciona para a página inicial
  }, [router]);

  return null; // Pode retornar null porque o redirecionamento ocorrerá imediatamente
};

export default Custom404;
