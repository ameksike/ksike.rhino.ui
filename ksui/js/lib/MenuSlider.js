/*
 * @author: Antonio Membrides Espinosa
 * @made: 28/4/2014
 * @update: 28/4/2014
 * @description: this is the class to build main menu
 * @require: Ksui.lib.Widget
 * */
Ksui.class("Ksui.lib.MenuSlider",
{
    extend: Ksui.lib.Widget,
    configure:function(){
        this.parent.configure.apply(this, arguments);
        this.private.prototype.widget = "MenuSlider";
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