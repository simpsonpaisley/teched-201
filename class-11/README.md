# Class 11

## Forms in HTML

Forms can be made in HTML using the `<form>` tag.

This sets the section of the page which contains the different form elements, such as inputs, radio buttons, and selectors.

Every element in a form should have a `name` and an `id` attribute.

### Input

One of the elements which can be contained inside a `<form>` tag is **`<input>`**.

Input tags are self-closing.

This can be given one of several type attributes, such as:

- `text` - this displays a single line text input field.
- `radio` - this displays a radio buttonm which can be used to select one of several choices.
- `checkbox` - this displays a checkbox, for selecting one or more of several choices.
- `submit` - this displays a submit button. This will submit the form.
- `button` - this displays a button.
- 'password' - this can be used for passwords, as it hides the text entered in the input box.
- `email` - this can be used for email addresses. It will automatically validate the text entered follows the conventions of an email address.

Another useful attribute for inputs is `required`. This will make it so the user is REQUIRED to enter information in the input before the form can be submitted.

### Name Attribute

Every element in a form must have a `name` attribute.

This is used to reference the data from a form when it is submitted.

For example:

```html
<form name="myForm">
	<input
		type="text"
		name="firstName"
	/>
	<input
		type="text"
		name="lastName"
	/>
</form>
```

The attribute `placeholder` can be used in text inputs, to place placeholder text in the input box. T

This lets users know what they are meant to be entering.

You can use the CSS code:

```html
input[type="inputType"] { }
```

### id Attribute

This is used in the same way as id's in other elements. This is useful for people with screenreaders, as it allows the `<label>` element to reference the inputs, so people using screenreaders know which label goes with which input.

### Label

Labels should be used on all form elements.

These are important, as they allow screen readers to focus on the form element.

Using a label also makes the click area on form elements bigger.

They can be used as so:

```html
<form name="myForm">
	<label for="firstName">First Name </label>
	<input
		type="text"
		id="firstName"
		name="firstName"
	/>
</form>
```

---

## Form Backend

To create an event listener and handler for a form submission, we can use the event listener `onsubmit`.

We can then write a function for how to handle the submission.

We can't see a console log of the information, because as soon as the usre clicks submit, the page will immediately refresh.

To stop this we can use the following code:

```javascript
function formHandler() {
	event.preventDefault(); // this will stop the page from reloading when the form is submitted.
}
```

This will stop the page from reloading when the form is submitted, this is because it prevents the default behaviours of the submit are prevented.

When information is submitted, it will be saved in an `event` object.

This will contain a key-value pair `target`. This shows where the information is coming from.

We can also use `console.log(event.target.name)` to narrow it down to the inputs with the same name value.

We can then use `console.log(event.target.name.value);` to see the value the inputs contain.
