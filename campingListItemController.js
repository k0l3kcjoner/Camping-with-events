({
    clickPacked: function(component, event, helper) {
        var packed = component.get("v.new");
        var updateEvent = component.getEvent("updateItem");
        updateEvent.setParams({"item" : packed}); //first we we set the name in the event,
        //then we set the local variable that the event will be updated with
        updateEvent.fire();
    }
   }
})