import { Action } from '../core/Base/Action';
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
		return this.request().get('/doctor', {}, GET_DOCTORS);
	}

	findOne() {
		findAll() {
		return this.request().get('/doctor', {}, GET_DOCTOR);
	}
}

export default new Doctor();

.com/keithamu?stab=repositories