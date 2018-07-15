import { BaseAction } from './BaseAction';
import {
	ADD_DOCTOR,
	REMOVE_DOCTOR,
	GET_DOCTORS,
	GET_DOCTOR,
	UPDATE_DOCTOR
} from '../constants';

class Doctor extends BaseAction
{
	findAll() {
		return this.get('/doctor', {}, GET_DOCTORS);
	}

	findOne() {
		findAll() {
		return this.get('/doctor', {}, GET_DOCTOR);
	}
}

export default new Doctor();