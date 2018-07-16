/**
 * 
 */
class Response
{
	/**
	 * [onSuccess description]
	 * @param  {[type]} data     [description]
	 * @param  {[type]} dispatch [description]
	 * @return {[type]}          [description]
	 */
	onSuccess(data, dispatch) {
		const type = data.headers['Action-Type'];
		dispatch({
			type: type,
			payload: data.data
		});
	}

	/**
	 * [onError description]
	 * @param  {[type]} err [description]
	 * @return {[type]}     [description]
	 */
	onError(err) {
		console.log(err);
	}
}

export Response;