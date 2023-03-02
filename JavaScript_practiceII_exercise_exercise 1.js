// Let's define a constant "cafe" that represents cafe information and add information about opening and closing hours.
const cafe = {
    name: "JavaScriptcafe",
    businessHours: {
      // Substitute the following two elements for the value of businessHours in the constant "cafe".
      // first one
      // property name: opening
      // value: (string) 10:00(AM)  
      // second one
      // property name: closing
      // value: (string) 8:00(PM)
      opening:"10:00(AM)",
      closing:"8:00(PM)"
    }
  };
  
  // Please output "store name: ~~ (= "name" in constant "cafe")".
  console.log(`store name: ${cafe.name}`);
  // Please output "open hours: ** (= "opening" in constant "cafe") to ?? (= "closing" in constant "cafe")".
  console.log(`open hours: ${cafe.businessHours.opening} to ${cafe.businessHours.closing}`);