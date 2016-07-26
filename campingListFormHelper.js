({

    	createItem: function(component, newCamp) {
    var addItem = component.getEvent("createItem");
    addItem.setParams({ "item": newCamp });
          console.log("createItem odpalany z helpera listform");
    addItem.fire();
},
    validateCamp: function(component) {
    var validCamp = true;
        //validation
       var nameField = component.find("campname");
       var campname = nameField.get("v.value");
       var quantField = component.find("campquantity");
       var campquantity = quantField.get("v.value");
       var priceField = component.find("campprice");
       var campprice = priceField.get("v.value");
       
        
        if($A.util.isEmpty(campname)) {
            validCamp = false;
            nameField.set("v.errors", [{message: "Camp name cannot be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
        
        
        //Validate numbers for quantity and price fields
        if($A.util.isEmpty(campquantity) || isNaN(campquantity) || (campquantity <= 0.0) ) {
            validCamp = false;
            quantField.set("v.errors", [{message: "Enter proper quantity number."}]);
        }
        else {
            quantField.set("v.errors", null);
        }
        if($A.util.isEmpty(campprice) || isNaN(campprice) || (campprice <= 0.0)) {
            validCamp = false;
            priceField.set("v.errors", [{message: "Enter proper price."}]);
        }
        else {
            priceField.set("v.errors", null);
        }
        return validCamp;
    }
})