import { createElement } from "./custom-create-elements.js";

const imgObj = {
    classList: 'imgClass',
    attributes: [
        {key: 'src', value:"https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg"},
        {key: 'alt', value:"test"},
    ]
}

const imgElement = createElement("img", imgObj);

const label = createElement('p', {
    classList: 'label',
    childNodes: [
        "I'm a picture",
    ],
})
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
const myElement = createElement('a', obj);

const body = document.querySelector('body');
body.append(myElement);
// console.log(body);