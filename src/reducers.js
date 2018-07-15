import Doctor from './reducers/doctor';
import Patients from './reducers/patients';
import Patient from './reducers/patient';
import Appointment from './reducers/appointment';
import Prescription from './reducers/perscription';

import { combineReducers } from 'redux';

const reducers = combineReducers({
	doctor: Doctor,
	patients: Patients,
	patient: Patient,
	appointment: Appointment,
	prescription: perscription
});

export default reducers;