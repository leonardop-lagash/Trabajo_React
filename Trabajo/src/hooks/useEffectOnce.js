import { useEffect } from 'react';

const useEffectOne = effect => {
  useEffect(effect, []);
};

export default useEffectOne;
