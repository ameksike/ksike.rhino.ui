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
Ksui.class("Ksui.lib.Region",
{
    extend: Ksui.lib.Widget,
    construct: function(){
        this.parent.construct.apply(this, arguments);
        this.private.region = (arguments[0]) ? arguments[0].region || [] : [];
        this.assist.overload(this, ["region"]);
        this.keyword.push("name");
        this.keyword.push("region");
    },
    render: function(host){
        this.parent.render.apply(this, arguments);
        for(var i in this.private.region)
            this.assist.update("."+this.private.cls.region+i, this.private.region[i], this.keyword);
        $("."+this.private.cls.region+"body").css("margin-top", $("."+this.private.cls.region+"north").height() );
        return this;
    },
    set: function(attr, value, host){
        var prototype =  attr;
        if(this.assist.isString(prototype)){
            prototype = {};
            prototype[attr] = value;
        }else host = value;
        host = host || this.private.access;
        this.assist.update((host=="region") ? "."+this.private.cls.component :
            "."+this.private.cls.region+host, prototype, this.keyword, true);
    },
    add: function(item, host){
        host = host || this.private.access;
        var prototype =  (item instanceof Array) ? { "items": item } : { "items": [item] };
        this.assist.update("."+this.private.cls.region+host, prototype, this.keyword, true);
    },
    del: function(pos, host){
        /*host = host || this.private.access;
         delete this.region[name][pos];
         this.assist.update(".Ksui-vp-r-"+host, this.region[host]);*/
    }
});