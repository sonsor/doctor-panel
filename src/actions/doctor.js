import { Action } from '../core/Base/Action';
import {
	ADD_DOCTOR,
	REMOVE_DOCTOR,
	GET_DOCTORS,
	GET_DOCTOR,
	UPDATE_DOCTOR
} from '../constants';

/**
 * 
 */
class Doctor extends Action
{
	/**
	 * [findAll description]
	 * @return {[type]} [description]
	 */
	findAll() {
		return this.request().get('/doctor', {}, GET_DOCTORS);
	}

	/**
	 * [findOne description]
	 * @return {[type]} [description]
	 */
	findOne() {
		findAll() {
		return this.request().get('/doctor', {}, GET_DOCTOR);
	}
}

export default new Doctor();