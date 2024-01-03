 // 
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://gitee.com/gujinlong_705/mark/raw/master/element.css';
    document.head.appendChild(link);
    let arr = [
        'https://gitee.com/gujinlong_705/mark/raw/master/vue.js',
        'https://gitee.com/gujinlong_705/mark/raw/master/element.js',
        'https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js',
    ]
    // 延时加载
    let arr2 = [
        'https://gitee.com/gujinlong_705/mark/raw/master/dom.js',
        'https://gitee.com/gujinlong_705/mark/raw/master/main.js',

    ]
    arr.forEach(t => {
        let script = document.createElement('script');
        script.src = t;
        document.body.appendChild(script);
    });
    setTimeout(() => {
        arr2.forEach(t => {
            let script = document.createElement('script');
            script.src = t;
            document.body.appendChild(script);
        });
    }, 2000);