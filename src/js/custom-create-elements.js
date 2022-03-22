/* + Material is from cite "Custom JavaScript CreateElement Function": 
https://dev.to/ahmedadel/custom-javascript-createelement-function-244f

+ Modify argument (DOM-element object) of function createElement->GoIT lectures ([js 42] module 11), lector Venic
 */
export const createElement = (tagName, initObj) => {
    const element = document.createElement(tagName);

    if (!initObj) {
        return element;
    }

    const { attributes, childNodes, ...customProp } = initObj;

    if (customProp) {
        for (const prop in customProp) {
            element[prop] = customProp[prop];
        }
    }

    if (attributes) {
        attributes.forEach((attr) => element.setAttribute(attr.key, attr.value));
    }

    if (childNodes) {
        childNodes.forEach((node) => element.append(node));
    }

    return element;
}
