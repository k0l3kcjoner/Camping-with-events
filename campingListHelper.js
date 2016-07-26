({
    createItem: function(component, dupa) {
        console.log("dociera do createitem");
    this.saveCamp(component, dupa, function(response){
        var state = response.getState();
        if (component.isValid() && state === "SUCCESS") {
            var newCamp = component.get("v.items");
            newCamp.push(response.getReturnValue());
            component.set("v.items", newCamp);
        }
    });
},

updateItem: function(component, dupa) { //
    this.saveCamp(component, dupa);
},

    saveCamp: function(component, newCamp, callback) {
    var action = component.get("c.saveItem");
    action.setParams({
        "camp": newCamp
    });
    if (callback) {
        action.setCallback(this, callback);
    }
    $A.enqueueAction(action);
},

    
})