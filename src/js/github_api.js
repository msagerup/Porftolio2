const gitHubContent = 'https://api.github.com/users/msagerup';

(function () {
	const gitHubAPI = new XMLHttpRequest();
	gitHubAPI.onreadystatechange = function () {
		if (this.readyState === 4) {
			window.myInfo = JSON.parse(this.responseText);

		}
	};
	gitHubAPI.open('GET', gitHubContent, true);
	gitHubAPI.send();
})();