import { useIsAdmin } from './user';
import { useState } from 'react';
import { letterList, letterListAll } from '../../service/letters';
import useAsyncEffect from 'use-async-effect';
import { LetterPublic } from '../../types';

export const useLetters = () => {
  const isAdmin = useIsAdmin();
  const [data, setData] = useState<LetterPublic[]>([]);
  const [loading, setLoading] = useState(true);

  useAsyncEffect(async () => {
    setLoading(true);
    let response;
    if (isAdmin) response = await letterListAll();
    else response = await letterList();
    const data = await response.json();
    setLoading(false);
    setData(data);
  }, [isAdmin]);

  return { data, loading };
};
