# vue-ads-layout

This is a vue component library to create a default web application layout.
You can create a toolbar, footer, left and right drawers. 
And each of those 4 components can be placed as a fixed component.

The left and right drawers can be minified or hidden by buttons or by resizing the window (responsive design)

I also added two default buttons to hide and minify the drawers.

## Demo

I've written a demo in [JSFiddle](https://jsfiddle.net/arnedesmedt/h35yqLxb)

## Installation

You can install the package via npm or yarn.

#### NPM

```npm install vue-ads-layout --save```

#### YARN

```yarn add vue-ads-layout```

## Usage

Here you can find a simple example on how to use this layout component.

```vue
<template>
    <div id="app">
        <vue-ads-layout :full-bar="true">
            <vue-ads-bar
                slot="toolbar"
                :fixed="true"
                class="bg-red"
            >
                <vue-ads-menu-button slot="first" :hidden="hiddenLeft" @toggle="hideLeft"></vue-ads-menu-button>
                <vue-ads-menu-button slot="last" :hidden="hiddenRight" @toggle="hideRight"></vue-ads-menu-button>
            </vue-ads-bar>
            <vue-ads-bar
                slot="footer"
                :fixed="false"
                :footer="true"
                class="bg-purple"
            >
            </vue-ads-bar>
            <vue-ads-drawer
                slot="left-drawer"
                :minified="minifiedLeft"
                :hidden="hiddenLeft"
                :fixed="true"
                @minify="minifyLeft"
                @hide="hideLeft"
                class="bg-yellow"
            >
                <vue-ads-minify-button slot="bottom" :minified="minifiedLeft" @toggle="minifyLeft"></vue-ads-minify-button>
            </vue-ads-drawer>
            <vue-ads-drawer
                slot="right-drawer"
                :minified="minifiedRight"
                :hidden="hiddenRight"
                :fixed="false"
                @minify="minifyRight"
                @hide="hideRight"
                class="bg-blue"
            >
                <vue-ads-minify-button slot="bottom" :right="true" :minified="minifiedRight" @toggle="minifyRight"></vue-ads-minify-button>
            </vue-ads-drawer>
            
            My content
            
        </vue-ads-layout>
    </div>
</template>

<script>
import './node_modules/@fortawesome/fontawesome-free/css/all.css';

import './node_modules/vue-ads-layout/dist/vue-ads-layout.css';

import { VueAdsLayout, VueAdsBar, VueAdsDrawer, VueAdsMenuButton, VueAdsMinifyButton } from 'vue-ads-layout';

export default {
    name: 'app',

    components: {
        VueAdsMinifyButton,
        VueAdsMenuButton,
        VueAdsDrawer,
        VueAdsBar,
        VueAdsLayout,
    },

    data () {
        return {
            minifiedLeft: false,
            minifiedRight: false,
            hiddenLeft: false,
            hiddenRight: false,
        };
    },

    methods: {
        minifyLeft (minified) {
            this.minifiedLeft = minified;
        },

        hideLeft (hidden) {
            this.hiddenLeft = hidden;
        },

        minifyRight (minified) {
            this.minifiedRight = minified;
        },

        hideRight (hidden) {
            this.hiddenRight = hidden;
        },
    },
};
</script>
```

### Components

#### VueAdsLayout

This is the base component. All the other components need to be nested in this one by slots.

##### Properties

- `full-bar`: *(type: boolean)* If true, a horizontal layout is created, where the bars overlap the drawers.
If false, a vertical layout is created, where the drawers overlap the bars.

##### Templates

###### toolbar

The toolbar template is used to define the top bar. Use the VueAdsBar component for it.

```vue
<vue-ads-bar slot="toolbar"></vue-ads-bar>
```

###### footer

The footer template is used to define the footer. Use the VueAdsBar component for it with the footer option = true.

```vue
<vue-ads-bar slot="footer" :footer="true"></vue-ads-bar>
```

###### left-drawer / right drawer

The left/right-drawer template is used to define the left/right drawer. Use the VueAdsDrawer component for it.

```vue
<vue-ads-drawer slot="left-drawer"></vue-ads-drawer>
<vue-ads-drawer slot="right-drawer"></vue-ads-drawer>
```

###### default

This is the most important template. Here you place your application content.

Just add it as a child element between the `vue-ads-layout` tags.

#### VueAdsBar

The bar component is used to create a toolbar and a footer.

##### Properties

- `fixed`: *(type: boolean, default: false)* Indicates if the bar is positioned fixed.
- `height`: *(type: number, default: 16)* If you want to increase the default height, add this option.
Only use the valid, numeric [Tailwindcss height options](https://tailwindcss.com/docs/height)
- `footer`: *(type: boolean, default: false)* Indicates if the bar is a footer.

##### Templates

There are 2 possibilities for using the bar templates: 
- overriding the default template with a custom template.
- use the predefined 3 column template: `first`, `middle`, `last`.
This method uses the flex css style, where the middle template has a flex-grow attribute.

For example if you want to use the VueAdsMenuButton buttons on the left/right position of the bar,
use the following templates.

```vue
<vue-ads-menu-button slot="first" :hidden="hiddenLeft" @toggle="hideLeft"></vue-ads-menu-button>
<vue-ads-menu-button slot="last" :hidden="hiddenRight" @toggle="hideRight"></vue-ads-menu-button>
```

#### VueAdsDrawer

The drawer component is used to create a drawers on the left and right side of your screen.

##### Properties

- `fixed`: *(type: boolean, default: false)* Indicates if the drawer is positioned fixed.
- `width`: *(type: number, default: 64)* If you want to increase the default width, add this option.
Only use the valid, numeric [Tailwindcss width options](https://tailwindcss.com/docs/width)
- `minified-width`: *(type: number, default: 16)* If you want to increase the minified width, add this option.
Only use the valid, numeric [Tailwindcss width options](https://tailwindcss.com/docs/width)
- `minified`: *(type: boolean, default: false)* Indicates if the drawer is minified.
- `hidden`: *(type: boolean, default: false)* Indicates if the drawer is hidden.
- `responsive-minified`: *(type: array, default: ['all', 'sm'])* A list of all [Tailwindcss screen sizes](https://tailwindcss.com/docs/responsive-design)
where the drawer has to be minified.
- `responsive-hidden`: *(type: array, default: ['all'])* A list of all [Tailwindcss screen sizes](https://tailwindcss.com/docs/responsive-design)
where the drawer has to be hidden.

##### Events

- `minify`: Emitted if the drawer is minified.
    - `minified`: *(type: boolean)* Indicates if the drawer is minified.
- `hide`: Emitted if the drawer is hidden.
    - `hidden`: *(type: boolean)* Indicates if the drawer is hidden.
 
 ##### Templates
 
 There are 2 possibilities for using the drawer templates: 
 - overriding the default template with a custom template.
 - use the predefined 2 rows template: `top`, `bottom`.
 This method uses the flex css style, where the top template has a flex-grow attribute.
 
 All the slots (default, top and bottom) are scoped with the following variables:
 
 - `fixed`: *(type: boolean)* Indicates if the drawer is positioned fixed.
 - `minified`: *(type: boolean)* Indicates if the drawer is minified.
 - `hidden`: *(type: boolean)* Indicates if the drawer is hidden.
 - `hidden`: *(type: boolean)* Indicates if the drawer is hidden.
 - `width`: *(type: number)* the current numeric [tailwindcss width](https://tailwindcss.com/docs/width)
 
 For example if you want to use the VueAdsMinifyButton on the bottom of the bar to minify it,
 use the following template.
 
 ```vue
 <vue-ads-minify-button slot="bottom" :minified="minifiedLeft" @toggle="minifyLeft"></vue-ads-minify-button>
 ```
 
#### VueAdsMenuButton

A menu button that can be used to open or close the drawers. 

If you want to use the font awesome icons,
don't forget to import the css library. It's a dependency of this library so it's automatically installed. 

##### Properties

- `hidden`: *(type: boolean, required)* Indicates if the linked drawer is hidden or not.

##### Events

- `toggle`: Emitted if the button is clicked.
    - `hidden`: *(type: boolean)* Indicates if the drawer is hidden.
    
##### Templates

You can add a default template to override the default icon.

```vue
<vue-ads-menu-button :hidden="false">
   <i class="fa fa-check"></i>
</vue-ads-menu-button>
 ```
    
#### VueAdsMinifyButton

A minify button that can be used to minify the drawers. 

If you want to use the font awesome icons,
don't forget to import the css library. It's a dependency of this library so it's automatically installed. 

##### Properties

- `minified`: *(type: boolean, required)* Indicates if the linked drawer is minified or not.
- `right`: *(type: boolean, default: false)* Indicates if the button is used for the right drawer.
If so the arrows are flipped.

##### Events

- `toggle`: Emitted if the button is clicked.
    - `minified`: *(type: boolean)* Indicates if the drawer is minified.
    
##### Templates

###### default

You can add a default template to override the default icon. 
The slot is scoped with the following variable:

- `left`: *(type: boolean)* Indicates if icon points to left. Collapse for the left drawer and expand for the right drawer.

```vue
<vue-ads-minify-button :minified="false">
   <i slot-scope="props" class="fa fa-check"></i>
</vue-ads-minify-button>
 ```
 
 ###### extra
 
 Or add the named template `extra` to add some extra content after the arrow icon.
 The slot is scoped with the following variable:
 
 - `left`: *(type: boolean)* Indicates if icon points to left. Collapse for the left drawer and expand for the right drawer.
 
 ```vue
<vue-ads-minify-button :minified="false">
   <div slot="extra" slot-scope="props">Collapse</div>
</vue-ads-minify-button>
```
        

## Testing

Needs to be done. You can run all the test (currently zero) by executing the following command.

```
npm run test:unit
```

## Changelog

Read the [CHANGELOG](CHANGELOG.md) file to check what has changed.

## Issues

If you have any issues (bugs, features, ...) on the current project, add them [here](https://gitlab.com/arnedesmedt/vue-ads-layout/issues/new).

## Contributing

Do you like to contribute to this project? Please, read the [CONTRIBUTING](CONTRIBUTING.md) file.

## Social

[1]: http://www.twitter.com/arnesmedt
[1.1]: http://i.imgur.com/wWzX9uB.png (@ArneSmedt)
 - Follow me on [![alt text][1.1]][1]
 
## Donate

Want to make a donation? 
That would be highly appreciated!

Make a donation via [PayPal](https://www.paypal.me/arnedesmedt).
