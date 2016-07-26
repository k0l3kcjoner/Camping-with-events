({
	
    doInit: function(component, event, helper) {
      var action = component.get("c.getItems");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(component.isValid() && state === 'SUCCESS') {
              component.set("v.items", response.getReturnValue());
              
            }
            else {
                console.log("Something gone wrong. Here is the state: " + state);
            }
        });
        //Now the action has to be executed by salesforce
        $A.enqueueAction(action);
    }, 
    
    
   handleAdditem: function(component, event, helper) {
    var newCamp = event.getParam("item");
       console.log("handleAdditem: " + JSON.stringify(newCamp) );
    helper.createItem(component, newCamp); 
},

    
    handleUpdateCamping: function(component, event, helper) {
    var updatedCmp = event.getParam("item");
        console.log("handleUpdateitem: " );
    helper.updateCamp(component, updatedCmp); 
}


})