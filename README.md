## OverlayScrollbarsChat

**OverlayScrollbarsChat** is a simple extension for **[OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars)** plugin that provides basic chat window behaviour.

## Features

- Eliminates scroll jump when prepending the content (for example old messages in chat box)
- Scrolls down to appended content (for example new message in chat box)

## Download

You can download **OverlayScrollbarsChat** manually from **dist** folder or install it via npm:

```
npm install overlayscrollbarschat --save
```

## Usage

#### HTML

Include **OverlayScrollbarsChat.umd.js** to your HTML file (after the **OverlayScrollbars**!)

```html
<script type="text/javascript" src="path/to/OverlayScrollbars.js"></script>
<script type="text/javascript" src="path/to/OverlayScrollbarsChat.umd.js"></script>
```

#### Javascript

```js
document.addEventListener('DOMContentLoaded', function() {
  //Initialize the plugin and get its instance
  const myScrollbar = OverlayScrollbars(document.querySelectorAll('body'), { });

  //Add the extension "OverlayScrollbarsChat" to the plugin instance
  myScrollbar.addExt('OverlayScrollbarsChat');
});
```

For more details about adding extensions check out [this](https://kingsora.github.io/OverlayScrollbars/#!documentation/method-addext) article in official OverlayScrollbars documentation.

## Options

<table>
  <thead>
		<tr>
			<th align="left" colspan="2">option</th>
			<th align="left">type</th>
			<th align="left">default</th>
			<th align="left">description</th>
		</tr>
	</thead>
  <tr>
		<th align="left" colspan="5">appendScroll : {</th>
	</tr>
	<tr>
		<td></td>
		<td>duration</td>
		<td>number</td>
		<td><code>200</code></td>
		<td>Indicates scroll duration when appending the content.</td>
	</tr>
	<tr>
		<td></td>
		<td>easing</td>
		<td>string</td>
		<td><code>linear</code></td>
		<td>Indicates scroll easing when appending the content.</td>
    <tr>
		  <th align="left" colspan="5">}</th>
	  </tr>
	</tr>
</table>

#### Example

```js
myScrollbar.addExt('OverlayScrollbarsChat', {
  appendScroll: {
    duration: 300,
    easing: 'swing'
  }
});
```

## License

MIT
