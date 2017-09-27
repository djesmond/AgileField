# AgileField
Simple controlled inputs for react.
AgileFields is an easy way to separate the presentational(stateless) component from the stateful input component.

I no longer work on this project. Consider using [formik](https://github.com/jaredpalmer/formik).

# Usage
AgileField allows any component to be wrapped with a stateful component to handle [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components) React inputs. 

AgileField uses a High order component (HOC) to wrap a React class component around any other component, to give it access to value handling behind the scenes.

An input can be created in a stateless component:

```jsx
const Input = (props) => {
  return (
    <p>Input</p>
     <input value={props.state.value} onChange={props.onChange} />
  )
}
//wrap it with state
const controlledInput = bindState(Input);

```
`bindState` will expose props for controlling input. The most basic are the value and the change function. 


## Included Fields
AgileField includes some prebuilt inputs that are built using the `bindState` function.

The minimal syntax looks like this for a text field.
```jsx
<AgileField label="Field" />

```
`label` is the only required props to generate a field.

Inputs default to `type="text"` if the `type` prop isn't set.
`type` supports: `text` and `password`.

Styling is done inline, but you can use any method for your own components.

The fields come with additional functionality

### Hint text
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
  hintText="Hello"
  label="Field"
  validateInput={true}
/>

```
AF ships with a simple and not that useful validator, which can be used for testing.
Each field is validated when the user leaves the field [see](https://facebook.github.io/react/docs/events.html#focus-events)

Internally, AF has a state, which specifies how the component should render.
The state is changed by the validator which returns an object:
```javascript
return {

    isValid: bool, //Used to determine if the value is valid
    message: string, //A message to display below the input field
    state: string, //represents a custom state, which controls styling

}

```
All validators is encouraged to return this object.
This allows for a field to have more than just a simple true or false state.
You can write custom validators, that can provide richer feedback to the user.
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
The default styles support `state: 'base'`, `state: 'valid'` and `state: 'invalid'`

You can provide your validator using the prop `validator`
```jsx
<AgileField
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
  hintText="Hello"
  label="Field"
  style={styles}
/>

```
Which is translated to inline styling.
Note: The custom style is merged with the default style internally. This means it preserves default styling for everything that isn't overwritten.

The styling points are:
* `fieldContainer`: Styling for the container (div).
* `fieldText`: Styling for all text inside the container. Use this for fonts etc.
* `fieldLabel`: Style the label (Header) of the field.
* `fieldHintText`: Style the hint text.
* `fieldInput`: Styling for the html input.
* `fieldFeedback`: Styling for the feedback message below the input.

All of these support states from your validators. You can add as many as you want.
By default the all contain 3 states:
* `base`: This is the initial render of the component.
* `invalid`: Style when the provided input is not valid based on the validator.
* `valid`: Style when the input is valid based on the validator.

Note that fields with no validation(default) never change state from `base`.

### A note on `:focus`, `:hover` `:disabled` etc
AF use [Radium](http://formidable.com/open-source/radium/) for styling. This allows you to style `:hover`. Please check their documentation for more information.
