(async function() {

    const url = `https://api.github.com/users/brekkenjackson/events/public`

    const options = {
        method: 'GET',
        headers: {
            "Authorization": GITHUB_API_KEY
        }
    };

    function getGithubUsernames() {
        return fetch(url, options)
            .then(response => response.json())
            .catch(function (error) {
                console.warn("ERROR: " + error);
            });
    }

    const users = await getGithubUsernames();

    console.log(users);


    function getRecentUserEvent(username){
        return fetch('https://api.github.com/users/' + username + '/events/public', options)
            .then(res => {
                return res.json();
            }).then(events => {
                for (let event of events) {
                    if (event.type === 'PushEvent') {
                        return event.created_at;
                    }
                }
            });
    }

    const recentEventDate = await getRecentUserEvent("madmarcos-codeup");
    console.log(recentEventDate)


})();

