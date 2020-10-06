var usemath = {
    newMathJax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_HTMLorMML-full',
    oldMathJax: 'cdnjs.mathjax.org/mathjax/latest/MathJax.js',

    replaceScript: function (script, src) {
        var newScript = document.createElement('script');
        newScript.src = usemath.newMathJax + src.replace(/.*?(\?|$)/, '$1');
        newScript.onload = script.onload;
        newScript.onerror = script.onerror;
        script.onload = script.onerror = null;
        while (script.firstChild) newScript.appendChild(script.firstChild);
        if (script.id != null) newScript.id = script.id;
        script.parentNode.replaceChild(newScript, script);
    },

    math: function () {
        if (document.currentScript) {
            var script = document.currentScript;
            usemath.replaceScript(script, script.src);
        } else {
            var n = usemath.oldMathJax.length;
            var scripts = document.getElementsByTagName('script');
            for (var i = 0; i < scripts.length; i++) {
                var script = scripts[i];
                var src = (script.src || '').replace(/.*?:\/\//, '');
                if (src.substr(0, n) === usemath.oldMathJax) {
                    usemath.replaceScript(script, src);
                    break;
                }
            }
        }
    }
}
usemath.math();