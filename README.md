# AgileField
Simple input fields for react

# Usage
AF comes preconfigured with som standard behavior.
AF is a [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components) React component internally
The minimal syntax looks like this.
```jsx
<AgileField type="text" label="Field" />

```
![fieldNoHint](https://github.com/djesmond/agileField/tree/develop/docs/images/fieldNoHint.png)

AF field translate to `<input>` along side some other html.
`Type` and `label` are the only required props to generate a field.
The above field will render:
```html
<div>
  <p>Field</p>
  <input type="text">
</div>

```
Styling is done inline.

The fields come with additional functionality

## Hint text
You can provide a hint text for the input using the`hintText`prop.
```jsx
<AgileField
  type="text"
  hintText="Hello"
  label="Field"
/>

```

## Validation
Each field supports validation.
Validation is disabled by default.
To enable validation use the validateInput prop.
```jsx
<AgileField
  type="text"
  hintText="Hello"
  label="Field"
  validateInput={true}
/>

```
AF ships with a simple and not that usefull validator, which can be used for testing.
Each field is validated when the user leaves the field [see](https://facebook.github.io/react/docs/events.html#focus-events)

Internally, AF has a state, which specifices how the component should render.
The state is changed by the validator which returns an object:
```javascript
return {

    isValid: bool, //Used to determine if the value is valid
    message: string, //A message to display below the input field
    state: string, //represents a custom state, which controls styling

}

```
All validators must return this object.
This allows for a field to have more than just a simple true or false state.
You can write custom validators, that can provide richier feedback to the user.
```javascript
function validator(input) {
  if(input.length === 0) {
    return {
      isValid: false,
      message: 'This field is required',
      state: 'inComplete'
    }
  }else if (input.length > 0 && input.length < 8) {
    return {
      isValid: false,
      message: 'This password is too short',
      state: 'invalid'
    }
  }else if (input.length > 8) {
    return {
      isValid: true,
      message: '',//You can leave it blank to hide the message
      state: 'valid'
    }
  }
}
```
The default styles support `state: 'valid'` and `state: 'invalid'`

You can provide your validator using the pro `validator`
```jsx
<AgileField
  type="text"
  hintText="Lets validate your input"
  label="Validation field"
  validateInput={true}
  validator={customvalidator}
/>

```

## Styling
AF comes with some default styling. This can be overwritten using the `style` prop
```jsx
<AgileField
  type="text"
  hintText="Hello"
  label="Field"
  style={styles}
/>

```
Which is translated to inline styling.
Note: The custom style is merged with the default style internally. This means it perserves default styling for everything that isn't overwritten.

The styling points are:
`fieldContainer`: Styling for the container (div).
`fieldText`: Styling for all text inside the container. Use this for fonts etc.
`fieldLabel`: Style the label (Header) of the field.
`fieldHintText`: Style the hint text.
`fieldInput`: Styling for the html input.
`fieldMessage`: Styling for the message below the input.

All of these support states from your validators. You can add as many as you want.
By default the all contain 3 states:
`base`: This is the initial render of the component.
`invalid`: Style when the provided input is not valid based on the validator.
`valid`: Style when the input is valid based on the validator.
Note that fields with no validation(default) never change state from `base`.

### A note on :focus, :hover :disabled etc
AF use [Radium](http://formidable.com/open-source/radium/) for styling. This allows you to style `:hover`. Please check their documentation for more information.
