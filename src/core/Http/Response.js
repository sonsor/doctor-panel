class Response
{
	onSuccess(data, dispatch) {
		const type = data.headers['Action-Type'];
		dispatch({
			type: type,
			payload: data.data
		});
	}

	onError(err) {
		console.log(err);
	}
}

export Response;