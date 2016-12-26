/**
 * @package: Ksui
 * @subpackage: base
 * @version: 0.1
 * @description:
 * @authors: ing. Antonio Membrides Espinosa
 * @require: Ksui.lib.MenuItem
 * @made: 28/04/2014
 * @update: 05/05/2014
 * @license: LGPL v2
 **/
Ksui.class("Ksui.lib.MenuBar",
{
    extend: Ksui.lib.Region,
    construct: function(){
        this.parent.construct.apply(this, arguments);
        this.private.cls = { component:"ksui-mb", region: "ksui-mb-region-" };
        this.assist.overload(this, ["notify", "general"]);
    },
    configure: function(){
        //this.parent.configure.apply(this, arguments);
        this.private.prototype.widget = "MenuBar";
        this.private.prototype.type = "div";
        this.private.prototype.class = (this.prototype.class) ? this.private.cls.component + " navbar-inverse " + this.prototype.class : this.private.cls.component + " navbar-inverse ";
        this.private.prototype.items = this.prototype.items || [];
        this.private.prototype.items.push({
            class: "container",
            items: [{
                class:"navbar-header",
                items:{
                    type:"button",
                    class:"navbar-toggle",
                    "data-toggle":"collapse",
                    "data-target":".navbar-collapse",
                    items:[{type:"span", class:"icon-bar"},{type:"span", class:"icon-bar"},{type:"span", class:"icon-bar"}]
                }
            },{
                class:"navbar-collapse collapse",
                items:[{
                    type:"ul",
                    class: this.private.cls.region+"general nav navbar-nav navbar-left"
                },{
                    type:"ul",
                    class: this.private.cls.region+"notify nav navbar-nav navbar-right"
                }]
            }]
        });
    },
    add: function(item, host){
        host = host || this.private.access;
        var prototype =  (item instanceof Array) ? { "items": item } : { "items": [item] };
        this.assist.update(".ksui-mb-region-"+host, prototype, this.keyword, true);
    }
});