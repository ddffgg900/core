var $;
(function(){
    "use strict";
    $ = function(e, type){
        if(!type){
            var node;
            if(typeof(e) != "undefined" && e !== null){
                if(typeof(e) === "string"){
                    node = document.getElementById(e);
                }
                if(typeof(e) === "object"){
                    node = e;
                }
                return new pro(node).init();
            }
            return false;
        }
        if(type === "class"){
            if(typeof(e) === "string"){
                var node_list = document.getElementsByClassName (e);
                return node_list;
            }
            return false;
        }
    };
    var pro = function(node){
        this.node = node;
    };
    pro.prototype = {
        CK: function(fn){
            this.onclick = function(e){
                e = e || window.event;
                e.stopPropagation();
                var target = e.currentTarget || e.srcElement;
                fn(target);
            };
        },
        CG: function(fn){
            this.onchange = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                fn (target);
            };
        },
        CC: function(type){
            var new_node = document.createElement(type);
            this.appendChild (new_node);
            return $(new_node);
        },
        S: function(obj){
            var i;
            var a;
            for(i in obj){
                if(obj.hasOwnProperty(i)){
                    a = "";
                    switch(i){
                        case "W":
                            a = "width";
                            this.style[a] = $.topx(obj[i]);
                            break;
                        case "H":
                            a = "height";
                            this.style[a] = $.topx(obj[i]);
                            break;
                        case "P":
                            a = "position";
                            if(obj[i] == "a"){
                                this.style[a] = "absolute";
                            }else if(obj[i] == "r"){
                                this.style[a] = "relative";
                            }
                            break;
                        case "T":
                            a = "top";
                            this.style[a] = $.topx(obj[i]);
                            break;
                        case "B":
                            a = "bottom";
                            this.style[a] = $.topx(obj[i]);
                            break;
                        case "L":
                            a = "left";
                            this.style[a] = $.topx(obj[i]);
                            break;
                        case "R":
                            a = "right";
                            this.style[a] = $.topx(obj[i]);
                            break;
                        case "MT":
                            a = "marginTop";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "MB":
                            a = "marginBottom";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "ML":
                            a = "marginLeft";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "MR":
                            a = "marginRight";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "D":
                            a = "display";
                            if(obj[i] === "i"){
                                this.style[a] = "inline";
                            }else if(obj[i] === "b"){
                                this.style[a] = "block";
                            }else if(obj[i] === "ib"){
                                this.style[a] = "inline-block";
                            }
                            break;
                        case "C":
                            a = "color";
                            this.style[a] = obj[i];
                            break;
                        case "FS":
                            a = "fontSize";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "FL":
                            a = "float";
                            this.style[a] = obj[i];
                            break;
                        case "BD":
                            a = "border";
                            this.style[a] = obj[i];
                            break;
                        case "M":
                            a = "margin";
                            this.style[a] = obj[i];
                            break;
                        case "I":
                            a = "innerHTML";
                            this[a] = obj[i];
                            break;
                        case "src":
                            a = "src";
                            this[a] = obj[i];
                            break;
                        case "CN":
                            a = "className";
                            this[a] = obj[i];
                            break;
                        case "ID":
                            a = "id";
                            this[a] = obj[i];
                            break;
                        case "V":
                            a = "value";
                            this[a] = obj[i];
                            break;
                        case "LH":
                            a = "lineHeight";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "BG":
                            a = "background";
                            this.style[a] = obj[i];
                            break;
                        case "BR":
                            a = "borderRadius";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "PT":
                            a = "paddingTop";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "PB":
                            a = "paddingBottom";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "PL":
                            a = "paddingLeft";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "PR":
                            a = "paddingRight";
                            this.style[a] = $.topx (obj[i]);
                            break;
                        case "PD":
                            a = "padding";
                            this.style[a] = obj[i];
                            break;
                        case "O":
                            a = "opacity";
                            this.style[a] = obj[i];
                            break;
                        default:
                            this.style[i] = obj[i];
                    }
                }
            }
            return $(this);
        },
        ATT: function(obj){
            var i;
            for(i in obj){
                 if(obj.hasOwnProperty(i)){
                    switch(i){
                        case "I":
                            this.innerHTML = obj[i];
                            break;
                        case "H":
                            this.href = obj[i];
                            break;
                        case "T":
                            this.target = obj[i];
                            break;
                        default:
                            this.setAttribute(i, obj[i]);
                    }
                }
            }
            return $(this);
        },
        H: function(){
            this.style.display = "none";
            return $(this);
        },
        V: function(){
            this.style.display = "";
            return $(this);
        },
        I: function(){
            return this.innerHTML;
        },
        //animate: function(obj, time, fn){
        //    var that = this;
        //    if(that.animate_status == 0){
        //        that.animate_status = 1;
        //        that.animate_timeline += time;
        //        time = time / 15;
        //        var begin = {};
        //        var speed = {};
        //        for (var i in obj){
        //            if(obj.hasOwnProperty(i)){
        //                switch(i){
        //                    case "W":
        //                        begin.W = that.offsetWidth;
        //                        speed.W = (obj[i]-begin.W)/time;
        //                        break;
        //                    case "H":
        //                        begin.H = that.offsetHeight;
        //                        speed.H = (obj[i]-begin.H)/time;
        //                        break;
        //                    case "T":
        //                        begin.T = that.offsetTop;
        //                        speed.T = (obj[i]-begin.T)/time;
        //                        break;
        //                    case "L":
        //                        begin.L = that.offsetLeft;
        //                        speed.L = (obj[i]-begin.L)/time;
        //                        break;
        //                    case "O":
        //                        begin.O = parseInt(that.style.opacity);
        //                        speed.O = (obj[i]-begin.O)/time;
        //                        break;
        //                }
        //            }
        //        }
        //        var now = begin;
        //        function run(){
        //            for(var i in begin){
        //                if(begin.hasOwnProperty(i)){
        //                    now[i] += speed[i];
        //                    if((speed[i] > 0 && now[i] >= obj[i]) || (speed[i] < 0 && now[i] <= obj[i])){
        //                        that.S(obj);
        //                        if(fn){
        //                            fn();
        //                        }
        //                        that.animate_status = 0;
        //                        that.animate_timeline = 0;
        //                        return;
        //                    }
        //                }
        //            }
        //            that.S(now);
        //            setTimeout(run, 15);
        //        }
        //        run();
        //    } else {
        //        setTimeout(function(){
        //            time = time / 20;
        //            var begin = {};
        //            var speed = {};
        //            for (var i in obj){
        //                if(obj.hasOwnProperty(i)){
        //                    switch(i){
        //                        case "W":
        //                            begin.W = that.offsetWidth;
        //                            speed.W = (obj[i]-begin.W)/time;
        //                            break;
        //                        case "H":
        //                            begin.H = that.offsetHeight;
        //                            speed.H = (obj[i]-begin.H)/time;
        //                            break;
        //                        case "T":
        //                            begin.T = that.offsetTop;
        //                            speed.T = (obj[i]-begin.T)/time;
        //                            break;
        //                        /* case "B":
        //                            begin.B = that.offsetBottom;
        //                            speed.B = (obj[i]-begin.B)/time;
        //                            break; */
        //                        case "L":
        //                            begin.L = that.offsetLeft;
        //                            speed.L = (obj[i]-begin.L)/time;
        //                            break;
        //                        /* case "R":
        //                            begin.R = that.offsetRight;
        //                            speed.R = (obj[i]-begin.R)/time;
        //                            break; */
        //                        case "O":
        //                            begin.O = parseInt(that.style.opacity)*1000;
        //                            speed.O = (obj[i]-begin.O)/(time*1000);
        //                            break;
        //                    }
        //                }
        //            }
        //            var now = begin;
        //            function run(){
        //                for(var i in begin){
        //                    if(begin.hasOwnProperty(i)){
        //                        now[i] += speed[i];
        //                        if((speed[i] > 0 && now[i] >= obj[i]) || (speed[i] < 0 && now[i] <= obj[i])){
        //                            that.S(obj);
        //                            if(fn){
        //                                fn();
        //                            }
        //                            that.animate_status = 0;
        //                            that.animate_timeline = 0;
        //                            return;
        //                        }
        //                    }
        //                }
        //                that.S(now);
        //                setTimeout(run, 20);
        //            }
        //            run();
        //        }, that.animate_timeline)
        //        that.animate_timeline += time;
        //    }
        //    return this;
        //},
        init:function(){
            this.node.PN = this.node.parentNode;
            this.node.C = this.node.children;
            this.node.OW = this.node.offsetWidth;
            this.node.OH = this.node.offsetHeight;
            this.node.CK = this.CK;
            this.node.CC = this.CC;
            this.node.CG = this.CG;
            this.node.S = this.S;
            this.node.H = this.H;
            this.node.V = this.V;
            this.node.I = this.I;
            this.node.ATT = this.ATT;
            //this.node.animate = this.animate;
            if(!this.node.animate_status){
                this.node.animate_status = 0;
            }
            if(!this.node.animate_timeline){
                this.node.animate_timeline = 0;
            }
            //this.node.each = this.each;
            return this.node;
        }
    };
    $.body = $(document.body);
    $.IH = function(){
        return window.innerHeight || document.documentElement.clientHeight || document.body.offsetHeight;
    };
    $.IW = function(){
        return window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
    };
    $.AJAX = function(method, url, obj, fn, async){
        var xmlhttp = new XMLHttpRequest();
        var keys = [];
        var values = [];
        var arr = [];
        var str = "";
        var i;
        for(i in obj){
            if(obj.hasOwnProperty(i)){
                keys.push(i);
                values.push(obj[i]);
            }
        }
        for(i = 0;i < keys.length; i += 1){
            arr.push("" + keys[i] + "=" + values[i]);
        }
        str = arr.join("&");
        if(typeof(async) === "undefined"){
            async = false;
        }
        if(method=="get"){
            xmlhttp.open("GET", url+"?"+str, async);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
            xmlhttp.send(null);
        } else {
            xmlhttp.open("POST", url, async);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
            xmlhttp.send(str);
        }
        var responseText = xmlhttp.responseText;
        fn(responseText);
    };
    $.each = function(arr, fn){
        var i;
        for(i = 0; i < arr.lenght; i += 1){
            fn(i, arr[i]);
        }
    };
    $.get = function(url, obj, fn, async){
        var xmlhttp = new XMLHttpRequest();
        var keys = [];
        var values = [];
        var arr = [];
        var str = "";
        var i;
        for(i in obj){
            if(obj.hasOwnProperty(i)){
                keys.push(i);
                values.push(obj[i]);
            }
        }
        for(i = 0; i < keys.length; i += 1){
            arr.push("" + keys[i] + "=" + values[i]);
        }
        str = arr.join("&");
        if(typeof(async) === "undefined"){
            async = false;
        }
        xmlhttp.open("GET", url+"?"+str, async);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xmlhttp.send(null);
        var responseText = xmlhttp.responseText;
        fn(xmlhttp.responseText);
    };
    $.post = function(url, obj, fn, async){
        var xmlhttp = new XMLHttpRequest();
        var keys = [];
        var values = [];
        var arr = [];
        var str = "";
        var i;
        for(i in obj){
            if(obj.hasOwnProperty(i)){
                keys.push(i);
                values.push(obj[i]);
            }
        }
        for(i = 0; i < keys.length; i += 1){
            arr.push("" + keys[i] + "=" + values[i]);
        }
        str = arr.join("&");
        if(typeof(async) === "undefined"){
            async = false;
        }
        xmlhttp.open("POST", url, async);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xmlhttp.send(str);
        var responseText = xmlhttp.responseText;
        fn(xmlhttp.responseText);
    };
    $.each = function(arr, fn){
        var i;
        for(i = 0; i < arr.lenght; i += 1){
            fn(i, arr[i]);
        }
    };
    $.topx = function(str){
        if(str.toString().indexOf("%") < 0 && str.toString().indexOf("em") < 0){
            return parseInt(str) + "px";
        }else{
            return str;
        }
    };
    $.IST = "createTouch" in document || "ontouchstart" in window;
    $.loadImg = function(arr, fn){
        var newimages = [];
        var loadedimages = 0;
        var i;
        arr = (typeof arr !== "object")? [arr] : arr;
        for (i = 0; i < arr.length; i += 1){
            newimages[i] = new Image();
            newimages[i].src = arr[i];
            newimages[i].onload = function(){
                loadedimages += 1;
                if(loadedimages === arr.length){
                    fn();
                }
            };
        }
    };
    $.getArgs = function(){
        var args = {};
        var match = null;
        var search = decodeURIComponent(location.search.substring(1));
        var reg = /(?:([^&]+)=([^&]+))/g;
        while((match = reg.exec(search)) !== null){
            args[match[1]] = match[2];
        }
        return args;
    }
    $.getLoadImg = function(father){
        var obj_list = [];
        var img_list = [];
        var array = father.getElementsByTagName("img");
        var i;
        for(i = 0; i < array.length; i += 1){
            var src = array[i].getAttribute("load-img");
            if(src !== null){
                img_list.push(src);
                obj_list.push($(array[i]));
            }
        }
        return {obj_list: obj_list, img_list: img_list};
    }
    $.loadAllImg = function(fn){
        var obj_list = [];
        var img_list = [];
        var array = document.getElementsByTagName("img");
        var i;
        for(i = 0; i < array.length; i += 1){
            var src = array[i].getAttribute("load-src");
            if(src !== null){
                img_list.push(src);
                obj_list.push($(array[i]));
            }
        }
    }
}());
