function build() {

   var view = Ksui.widget({
        type: "Viewport",
        id: "myview",
        //controller: "MyController",
        //controller: ["MyController1", "MyController2"],
        //delegate: "MyController",
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

    view.render();

    var view = Ksui.widget("#myview");
    view.set( {class:"test", "new-property":"myvalue" }, "north"  );
    view.region.north.set( {class:"test", "new-property":"myvalue" } );
    view.region.south.set( "style", "background-color:blue;" );
    view.region.west.set( { css: { backgroundColor:"yellow", fontWeight:"bolder" }} );
    view.region.west.add({ type: "h1", html:"WEST-CHIlD-ADD1" });
    view.region.center.add([{ type: "h1", html:"CENTER-CHIlD-ADD1" }, { type: "h1", html:"CENTER-CHIlD-ADD2" } ]);
}