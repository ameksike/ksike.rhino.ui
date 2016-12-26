/**
 * @package: OasiS
 * @subpackage: base
 * @version: 0.1
 * @description: Graphical User Interface framework
 * @authors: ing. Antonio Membrides Espinosa
 * @require: Bootstrap, JQuery, KOOP
 * @made: 28/04/2014
 * @update: 05/05/2014
 * @license: LGPL v2
 **/
var Ksui = {
    lib: {
        Base: function(){
            this.ns = function(strns, owner){
                var ons = owner || window;
                var lns = this.isString(strns) ? strns.split(".") : [];
                for(var i in lns) ons = (ons[lns[i]]) ? ons[lns[i]] : {};
                return ons;
            }
            this.clone = function(obj, under){
                under =  under || "json";
                var clon = {};
                switch (under){
                    case "eval": clon = eval(uneval(obj)); break;
                    case "json": clon = JSON.decode(JSON.encode(obj)); break;
                    case "prototype":
                        clon = function(){};
                        clon.prototype = obj;
                        return new clon();
                        break;
                    case "cp": for(var i in obj) clon[i]=obj[i]; break;
                }
                return clon;
            }
            this.widget = function(selector){
                if(selector instanceof Object){
                    return this.factory(selector);
                }else{
                    var widgets = [];
                    var _this = this;
                    $(selector).each(function(i, el){ widgets.push(_this.factory($(el).attr("widget"), $(el))); });
                    return (widgets.length>0) ? (widgets.length > 1) ? widgets : widgets[0] : false;
                }
            }
            this.clear = function(prototype, cloned, keyword){
                var ell = (!cloned) ? this.clone(prototype) : prototype;
                for(var i in keyword) delete ell[keyword[i]];
                return ell;
            }
            this.factory = function(prototype, element){
                var name = (prototype instanceof Object) ? prototype.type : prototype;
                var Component  = (this.lib[name]) ? this.lib[name] : this.ns(name);
                return (Component instanceof Function) ? new Component(prototype, element) : { element : $(document.createElement(name  || "div")) };
            }
            this.compile = function (prototype, keyword){
                prototype = prototype || {};
                var el = this.factory(prototype).element;
                if (prototype.html) el.html(prototype.html);
                if (prototype.items instanceof Array) for(var i in prototype.items) el.append(this.compile(prototype.items[i], keyword));
                else if(prototype.items instanceof Object) el.append(this.compile(prototype.items, keyword));
                el.attr(this.clear(prototype, false,keyword));
                return el;
            }
            this.update = function(host, prototype, keyword, add){
                host = this.isJquery(host) ? host : $(host);
                if(!add) host.html("");
                if(prototype.items) this.append(host, prototype.items, keyword);
                if(prototype.class) host.addClass(prototype.class);
                if(prototype.css) host.css(prototype.css);
                delete prototype.class;
                host.attr(this.clear(prototype, false, keyword));
            }
            this.append = function(host, prototype, keyword){
                if(prototype instanceof Array){
                    for(var i in prototype) this.append(host, prototype[i], keyword);
                }else{
                    prototype = this.isElement(prototype) || this.isJquery(prototype) ? prototype : this.compile(prototype, keyword);
                    this.isJquery(host) ?  host.append(prototype) : host.appendChild(prototype.context);
                }
            }
            this.isElement = function(obj){
                return (obj instanceof Element);
            }
            this.isJquery = function(obj){
                return (obj.jquery);
            }
            this.isString = function(str){
                return (typeof str == 'string' || str instanceof String);
            }
            this.isWidget = function(obj){
                return (obj instanceof this.lib.Widget);
            }
            this.overload = function(score, setters, callback, params){
                for(var i in setters){
                    (function(property, score, callback, params){
                        var _this = score;
                        score.__defineGetter__(property, function(){
                            _this.private.road  += property+".";
                            _this.private.access = property;
                            if(callback instanceof Function) callback.apply(_this, params);
                            return _this;
                        });
                    })(setters[i], score, callback, params);
                }
            }
            this.class = koop.class;
        }
    }
}
Ksui.lib.Base.apply(Ksui, []);
if(JSON){
    JSON.encode = JSON.stringify;
    JSON.decode = JSON.parse;
}