import axios from 'axios';
import { useVillageContext } from '../store/context';
import { fetchSmurfs, successSmurfs, failSmurfs } from '../store/actions';
import { VillageState } from '../store/types';

const useVillageApi = (url: string): [VillageState, () => Promise<void>] => {
  const [state, dispatch] = useVillageContext();

  const callApi = async (): Promise<void> => {
    dispatch(fetchSmurfs());
    try {
      const response = await axios.get(url);
      console.log('response', response);
      dispatch(successSmurfs(response.data));
    } catch (error) {
      dispatch(failSmurfs());
    }
  };

  return [state, callApi];
};

export default useVillageApi;
