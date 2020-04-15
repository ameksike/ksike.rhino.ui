# ksui
Micro framework oriented to the construction of graphical user interfaces based on HTML, CSS and JavaScript, in the style of ExtJs, etc. It uses JQuery and Bootstrap below, it presents a marked academic character. The main idea is to promote the creation of components based on prototypes, as well as the necessary mechanisms to access and manipulate them in an efficient and simple way.


### How to load the basic files to use this library
```html
<script src="vendor/js/jquery.js"></script>
<script src="vendor/js/bootstrap.min.js"></script>

<script src="vendor/js/koop/src/common/Class.js"></script>
<script src="vendor/js/koop/src/common/keyword/Extend.js"></script>
<script src="../ksui/js/Main.js"></script>
<script src="../ksui/js/lib/Widget.js"></script>
<script src="../ksui/js/lib/Region.js"></script>
<script src="../ksui/js/lib/Viewport.js"></script>
<script src="../ksui/js/lib/MenuSlider.js"></script>
<script src="../ksui/js/lib/MenuBar.js"></script>
```

### How to conform the main object of the user interface
```javascript
   var view = Ksui.widget({
        type: "Viewport",
        id: "myview",
        controller: ["MyController1", "MyController2"],
        region: {
            north:{
                items:[
                    { type: "a", html:"NORTH-CHILD1" },
                    { type: "MenuBar", html:"MenuBar1-HTML1" },
                    { type: "a", html:"<b>NORTH-CHILD3</b>" },
                    { type: "h1", html:"NORTH-CHILD4" },
                    {
                        id:"my",
                        type: "MenuBar",
                        html:"MenuBar2-HTML1",
                        region: {
                            general:{
                                items:[{
                                    label:"TEST-LABEl",
                                    icon: "glyphicon glyphicon-user",
                                    notify: 50
                                },{
                                    icon: "glyphicon glyphicon-list-alt",
                                    notify: 50
                                }]
                            },
                            notify:{
                                items:[{
                                    label:"TEST-LABEl",
                                    icon: "glyphicon glyphicon-user",
                                    notify: 50
                                },{
                                    icon: "glyphicon glyphicon-list-alt",
                                    notify: 50
                                }]
                            }
                        },
                        items:[{
                            type:"span",
                            label:"TEST-LABEl",
                            icon: "glyphicon glyphicon-user",
                            notify: 50
                        },{
                            icon: "glyphicon glyphicon-list-alt",
                            notify: 50
                        }]
                    }
                ]
            },
            south:{
                items: { type: "h1", html:"SOUTH-CHILD1" }
            },
            east:{
                items:[{
                    type: "h1",
                    html:"EAST-CHILD1"
                },{
                    type: "h1",
                    html:"EAST-CHILD2"
                }]
            },
            west:{
                items:{ type: "h1", html:"WEST-CHILD1" }
            },
            center:{
                items:{ type: "h1", html:"CENTER-CHILD1" }
            }
        }
    });
```

### How to handle all resources
```javascript
    view.render();

    var view = Ksui.widget("#myview");

    view.set({ class:"test", "new-property":"myvalue" }, "north"  );
    view.region.north.set({ class:"test", "new-property":"myvalue" });
    view.region.south.set( "style", "background-color:blue;" );
    view.region.west.set({ css: { backgroundColor:"yellow", fontWeight:"bolder" }});
    view.region.west.add({ type: "h1", html:"WEST-CHIlD-ADD1" });
    view.region.center.add([
        { type: "h1", html:"CENTER-CHIlD-ADD1" }, 
        { type: "h1", html:"CENTER-CHIlD-ADD2" } 
    ]);
```

## How to create custom components
For the creation of new components it is only necessary to use the namespace established for this library called Ksui.lib, below is an example of the methods that can be implemented. Note that the render function determines the display of the component. 

```javascript
Ksui.class("Ksui.lib.MyCustomComponent",
{
    construct: function(prototype, element, assist){},
    configure: function(){},
    build: function(){},
    render: function(host){},
    clear: function(){}
});
```
This library has no dependency or incompatibilities with others, so the components can be created using third parties such as Bootstrap or natively in HTML and CSS.