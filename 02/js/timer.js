loadScript(['js/common.js', 'js/another.js', 'js/common.js'], () => {
    console.log('Array callback');
})


loadScript("js/common.js", () => {
    loadScript("https://cdn.jsdelivr.net/npm/luxon@1.25.0/build/global/luxon.min.js", () => {
        console.log("timer.js");
    })
})


loadScript(() => {
    console.log('Callback callback');
})