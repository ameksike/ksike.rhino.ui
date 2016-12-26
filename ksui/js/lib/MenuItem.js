/**
 * @package: Ksui
 * @subpackage: base
 * @version: 0.1
 * @description:
 * @authors: ing. Antonio Membrides Espinosa
 * @require: Ksui.lib.Widget
 * @made: 28/04/2014
 * @update: 05/05/2014
 * @license: LGPL v2
 **/
Ksui.class("Ksui.lib.MenuItem",
{
    extend: Ksui.lib.Widget,
    configure: function(){
        var prototype = this.private.prototype;
        this.private.prototype = {
            widget: "MenuItem",
            type: "li",
            items: [{
                type: "a",
                items:[
                    { type: "span", class:"ksui-mi-icon "+(prototype.icon) ? prototype.icon : ""},
                    { type: "span", class:"ksui-mi-notify badge"+(prototype.notify) ? prototype.notify : ""},
                    { type: "span", class:"ksui-mi-label"+(prototype.label) ? prototype.label : ""}
                ]
            }]
        }
        if(prototype.items){
            this.private.prototype.items[0].items.push({ type:"b", class:"caret"});
            this.private.prototype.items[1] = { type:"ul", class:"dropdown-menu", items:[] };
            for(var i in prototype.items) {
                var item = prototype.items[i];
                item.type = "MenuItem";
                this.private.prototype.items[1].items.push(item);
            }
        }
    }
});
