'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFound() {
  useEffect(() => {
    window.location.href = '/';
  },);

  return null; // Não renderiza nada porque o redirecionamento ocorrerá imediatamente
}
