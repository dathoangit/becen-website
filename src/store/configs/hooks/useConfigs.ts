import { useDispatch, useSelector } from 'react-redux';
import { State } from '../types';
import { setLanguageReduce } from '../reduce';
import { IConfigs } from '../types';
import { isEqual } from 'lodash';

export const useConfigs = () => {
  const { configs, chainConfigs, chainId } = useSelector((state: State) => {
    return {
      configs: state.configs,
      chainConfigs: state.configs.chainConfigs,
      chainId: state.configs.chainId,
    };
  }, isEqual);

  const dispatch = useDispatch();

  const updateLanguage = (lang: IConfigs['language']) => {
    dispatch(setLanguageReduce({ language: lang }));
  };

  return {
    configs,
    chainConfigs,
    updateLanguage,
    chainId,
  };
};
