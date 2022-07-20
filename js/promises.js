(async function() {

    const url = 'https://api.github.com/users'

    const options = {
        method: 'GET',
        headers: {
            "Authorization": MAPBOX_API_KEY
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


})();


//
// fetch(url, {headers: {'Authorization': 'GITHUB_API_KEY'}})
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
//
//     await options.request('GET /repos/{owner}/{repo}/events', {
//         owner: 'OWNER',
//         repo: 'REPO'
//     })
// })