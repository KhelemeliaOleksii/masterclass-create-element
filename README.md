# Masterclasses. Custom createElement().

Create custom function createElement

+ Material is from cite "Custom JavaScript CreateElement Function": 
https://dev.to/ahmedadel/custom-javascript-createelement-function-244f

+ Modify argument (DOM-element object) of function createElement->GoIT lectures ([js 42] module 11), lector Venic

# So, let's see what this function can do:

   - Create the html element normally.
   - Add attributes to it (Key value pairs).
   - Add any custom property or events to it
   - Add child nodes to this element

# How to use it:

This function takes a tag name and a configure object:

    let myElement = CreateElement(tagName, obj);
    obj = {
            const obj = {
        id: 'myId',
        classList: 'btn btn-danger',
        childNodes: [
            imgElement,
            label
        ],
        attributes:
        [
        {key:'data-src', value: 'https://img.png'},
        {key:'customAttr2', value: 'ABC'},
        ],
    }
    


# What I do

Create custom function createElement

Practice on:
- js -> dynamically create DOM-elements


