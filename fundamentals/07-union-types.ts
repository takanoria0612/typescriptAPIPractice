let uniqueIdentifier = 1000;
//uniqueIdentifier = "298878897"; // Vscode will show an error because uniqueIdentifier is a number.
//The reason why it cannot be override is because we have set the type to number. 
//You can do that in javascript but not in typescript.

const keys: (number | string) [] = [1000, "298878897"];

let courseId: number | null = 1000; // You can also set the type to null.The benefit of this is that you can set the type to null and undefined.

courseId = null; // You can set the value to null or undefined.You can use this when you want to set a value to null or undefined.

