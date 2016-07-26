({
	submitForm : function(component, event, helper) {
		
        if(helper.validateCamp(component)) {
            //create it
           var newCamp = component.get("v.newCamp");
            console.log("co wciskamy: " + JSON.stringify(newCamp));
            helper.createItem(component, newCamp);
            console.log("submitForm complete");
            
           
        }
        
        
	},
    
})