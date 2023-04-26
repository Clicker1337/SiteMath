import {AxiosResponse} from 'axios';
import $api from '../store/http';
import BackendApi from '../types/classes/BackendApi';

export interface IGroup {
    id: number;
    label: string;
}

export default class GroupService {
    static fetchGroups(): Promise<AxiosResponse<IGroup[]>> {
        return $api.get<IGroup[]>(BackendApi.LOCATION + BackendApi.GET_GROUPS);
    }
}
