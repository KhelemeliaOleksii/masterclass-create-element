/* Material is from cite "Custom JavaScript CreateElement Function": 
https://dev.to/ahmedadel/custom-javascript-createelement-function-244f
 */
export const createElement = (initObj) => {
    const element = document.createElement(initObj.tag);

    for (const prop in initObj) {
        if (prop === "attributes") {
            initObj.attributes.forEach(
                function (attr) {
                    element.setAttribute(attr.key, attr.value)
                }
            )
        } else if (prop === "childNodes") {
            initObj.childNodes.forEach(
                function (node) {
                    element.append(node);
                }
            )
        } else {
            element[prop] = initObj[prop];
        }
    }
    return element;
}