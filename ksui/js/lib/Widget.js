/**
 * @package: Ksui
 * @subpackage: base
 * @version: 0.1
 * @description: GUI Component Interface
 * @authors: ing. Antonio Membrides Espinosa
 * @require: Bootstrap, JQuery, OOP
 * @made: 28/04/2014
 * @update: 05/05/2014
 * @license: LGPL v2
 **/
Ksui.class("Ksui.lib.Widget",
{
    construct: function(prototype, element, assist){
        this.assist = assist || Ksui;
        this.private = {
            "prototype": (prototype) ? (this.assist.isString(prototype)) ? { type:prototype } : prototype : {},
            "element": element,
            "cls":{},
            "access": "",
            "road": ""
        }
        this.keyword = ["items","html", "set", "add", "css", "type"];

        this.__defineGetter__("element", function() {
            if(!this.private.element) this.private.element = this.build();
            return this.private.element;
        });
        this.__defineSetter__("prototype", function(value) {
            this.private.prototype = value;
        });
        this.__defineGetter__("prototype", function() {
            return this.private.prototype;
        });
    },
    configure: function(){
        this.private.prototype.widget = this.private.prototype.widget || "Ksui.lib.Widget";
        this.private.prototype.type = this.private.prototype.type || "div";
    },
    build: function(){
        this.configure();
        return this.assist.compile(this.private.prototype, this.keyword);
    },
    render: function(host){
        var host = (host) ? (host instanceof Object) ? host : document.getElementById(host) : document.body;
        this.assist.append(host, this.element, this.keyword);
        return this;
    },
    clear: function(){
        this.private.access = "";
        this.private.road = "";
    }
});