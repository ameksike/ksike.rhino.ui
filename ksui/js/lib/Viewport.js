/**
 * @package: Ksui
 * @subpackage: base
 * @version: 0.1
 * @description:
 * @authors: ing. Antonio Membrides Espinosa
 * @require: Ksui.lib.Region
 * @made: 28/04/2014
 * @update: 05/05/2014
 * @license: LGPL v2
 **/
Ksui.class("Ksui.lib.Viewport",
{
    extend: Ksui.lib.Region,
    construct:function(){
        this.parent.construct.apply(this, arguments);
        this.private.cls = { component:"ksui-vp", region: "ksui-vp-region-" };
        this.assist.overload(this, ["north", "south", "east", "west", "center"]);
    },
    configure: function(){
        //this.parent.configure.apply(this, arguments);
        this.private.prototype.widget = "Viewport";
        this.private.prototype.type = "section";
        this.private.prototype.class = (this.prototype.class) ? this.private.cls.component + this.prototype.class : this.private.cls.component;
        this.private.prototype.items = this.prototype.items || [];
        this.private.prototype.items.push({ type:"header", class:this.private.cls.region+"north navbar navbar-fixed-top" });
        this.private.prototype.items.push({
            type:"section",
            class:this.private.cls.region+"body row",
            items:[{
                class:this.private.cls.region+"east col-md-2"
            },{
                class:this.private.cls.region+"center col-md-7"
            },{
                class:this.private.cls.region+"west col-md-3"
            }]
        });
        this.private.prototype.items.push({ type:"footer", class:this.private.cls.region+"south row" });
    }
});