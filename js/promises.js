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

    // const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (data[0].created_at) {
    //             resolve();
    //         } else {
    //             reject();
    //         }
    //     });
    // });

    // console.log(myPromise); // a pending promise
    //
    // myPromise.then(() => console.log('resolved!'));
    // myPromise.catch(() => console.log('rejected!'));

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