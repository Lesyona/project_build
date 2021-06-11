function loadScript(url, callback) {
    // callback case
    if (typeof url === 'function') {
        url();
        return;
    }

    if (typeof url === 'string') {
        let urlArray = [];
        urlArray.push(url);
        url = urlArray;
    }

    // check duplicate urls
    const urlsSet = new Set(url);
    if (urlsSet.size !== url.length) {
        url = [...urlsSet];
    }

    let promises = [];
    url.forEach(item => {
        promises.push(loadOneScript(item));
    });

    Promise.all(promises)
        .then(callback)
        .catch((script) => {
            console.log(`Failed to load ${script} file`);
        })
}

function loadOneScript(url) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = url;
        script.onload = function () {
            resolve(url);
        };
        script.onerror = function () {
            reject(url);
        };
        document.body.appendChild(script);
    });
}