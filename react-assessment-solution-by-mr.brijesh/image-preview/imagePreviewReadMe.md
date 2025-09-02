The application has two components:
The ImagePreview component that allows users to view and hide images by clicking on them.
The HiddenImageDiv component that should be rendered when an image is to be hidden,
The image data is passed to the component as "images" to render in the component.
The application has the following functionalities:
The ImagePreview component renders the following conditionally :
If the visibleattribute is true,then the image with the src and alt attributes passed in the image data.
If the visible attribute is false, then the HiddenImageDiv component
Clicking an image should hide it from the DOM, and the HiddenImageDiv should be visible in its place.
Clicking the HiddenImageDiv component should render the original image again.
On clicking the ShowAll button, all the images should be visible, and any HiddenImageDiv component should be hidden
On clicking the HideAll button, all the images should be hidden, and only the HiddenImageDiv components should be visible