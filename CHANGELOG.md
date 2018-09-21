## Changelog

#### v1.2.1 - 2018/09/21

- Change the margins to hide the drawers instead of the width. 
A width of 0 with overflow-x hidden, doesn't hide the content.

#### v1.2.0 - 2018/09/20

- Make the drawer slots scoped with the fixed, width, minified and hidden parameters.
- Adding default slots in the buttons.
- drawer slot navigation renamed to top. Now you have 3 slots in drawer: default, top and bottom. This is more consistent.
- Remove `overflow-x: hidden` from the drawer component.

#### v1.1.4 - 2018/09/19

- Don't require default styling classes in the buttons and layout.

#### v1.1.3 - 2018/09/19

- Dimensions are saved in the Layout component. They were by default null.
But it has to be 0 if the component is not used.
- Add the demo JSFiddle.


#### v1.1.2 - 2018/09/19

- The fixed bars were overlapping the drawers in non-full-bar mode. I added a fix for that bug.

#### v1.1.1 - 2018/09/19

- Remove the application content from the default slot

#### v1.1.0 - 2018/09/19

- Add css to the package
- Add purge css to minimize the css files

#### v1.0.2 - 2018/09/19

- Update the changelog

#### v1.0.1 - 2018/09/19

- Changed the default footer property of VueAdsBar to false instead of true
- Make github the default repository in package.json

#### v1.0.0 - 2018/09/18

- Initial release.
