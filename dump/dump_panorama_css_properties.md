=== -s2-mix-blend-mode ===
Controls blending mode for the panel.  See CSS mix-blend-mode docs on web, except normal for us is with alpha blending.<br><br><b>Examples:</b><pre>-s2-mix-blend-mode: normal;
-s2-mix-blend-mode: multiply;
-s2-mix-blend-mode: screen;</pre>


=== align ===
&lt;Needs a description&gt;


=== animation ===
&lt;Needs a description&gt;


=== animation-delay ===
&lt;Needs a description&gt;


=== animation-direction ===
&lt;Needs a description&gt;


=== animation-duration ===
&lt;Needs a description&gt;


=== animation-iteration-count ===
&lt;Needs a description&gt;


=== animation-name ===
&lt;Needs a description&gt;


=== animation-timing-function ===
&lt;Needs a description&gt;


=== background-color ===
Sets the background fill color/gradient/combination for a panel.<br><br><b>Examples:</b><pre>background-color: #FFFFFFFF;
background-color: gradient( linear, 0% 0%, 0% 100%, from( #fbfbfbff ), to( #c0c0c0c0 ) );
background-color: gradient( linear, 0% 0%, 0% 100%, from( #fbfbfbff ), color-stop( 0.3, #ebebebff ), to( #c0c0c0c0 ) );
background-color: gradient( radial, 50% 50%, 0% 0%, 80% 80%, from( #00ff00ff ), to( #0000ffff ) );
background-color: #0d1c22ff, gradient( radial, 100% -0%, 100px -40px, 320% 270%, from( #3a464bff ), color-stop( 0.23, #0d1c22ff ), to( #0d1c22ff ) );</pre>


=== background-image ===
Comma separated list of images or movies to draw in the background. Can specify "none" to not draw a background layer. Combined with background-position, background-size and background-repeat values.<br><br><b>Example:</b><pre>background-image: url("file://{images}/default.tga"), url( "file://{movies}/Background1080p.webm" );</pre>


=== background-position ===
Controls the horizontal and vertical placement of the background image, with the format: &lt;left|center|right&gt; &lt;horizontal length&gt; &lt;top|center|bottom&gt; &lt;vertical length&gt;<br><br>If length is a percent, the specified location within the image is positioned over that same specified position in the background. If the length is pixels, the top left corner is placed relative to the provided alignment keywords (left, bottom, etc.). See examples for more details.<br><br>If 1 value is specified, the other value is assumed to be center. If 2 values are specified, the first value must be for horizontal placement and the second for vertical.<br><br><b>Examples:</b><pre>// aligns the top left corner of the image with the top left corner of the panel (default)
background-position: 0% 0%;

// centers the image within the background (same as "center center")
background-position: center;

// aligns the bottom right corner of the image with the bottom right corner of the panel (same as "100% 100%")
background-position: right bottom;

// the top left corner of the image is placed 10px to the right of, 40px below the top left corner of the panel
background-position: left 10px top 40px;</pre>


=== background-repeat ===
Controls if the background should be repeated in the horizontal and vertical directions.<br><br>Possible values per direction:<br>"repeat" - (default) Repeated in the specified direction until it fills the panel<br>"space" - Repeated as many times as required to fill the panel w/o being clipped. Space is added between images to to align first and last image with panel edges.<br>"round" - Repeated as many times as required to fill the panel w/o being clipped. The image is resized to align first and last image with panel edges.<br>"no-repeat" - Not repeated<br><br>Possible single values:<br>"repeat-x" - equals "repeat no-repeat"<br>"repeat-y" - equals "no-repeat repeat"<br><br><b>Examples:</b><pre>background-repeat: repeat; // equals "repeat repeat" (default)
background-repeat: repeat space; // repeats horizontally, spaces vertically 
background-repeat: no-repeat round; // 1 column of images, scaled to fit evenly</pre>


=== background-size ===
Sets the horizontal and vertical dimensions used to draw the background image. Can be set in pixels, percent, "contains" to size down to panel dimensions or "auto" preserves the image aspect ratio. By default, set to "auto" which preveres the image's original size.<br><br>Multiple background layers can be specified in a comma separated list, which are then combined with background-image, background-position, and background-repeat values.<br><br><b>Examples:</b><pre>background-size: auto; // same as "auto auto" (default) 
background-size: 100% 100%; // image fills the panel
background-size: 50% 75%; // image fills 50% of the panel's width, and 75% of the panel's height
background-size: 300px 200px; // image is drawn 300px wide, 200px tall</pre>


=== blur ===
Sets the amount of blur to apply to the panel and all it's children during composition.  Default is no blur, for now Gaussian is the only blur type and takes a horizontal standard deviation, vertical standard deviation, and number of passes.  Good std deviation values are around 0-10, if 10 is still not intense enough consider more passes, but more than one pass is bad for perf.  As shorthand you can specify with just one value, which will be used for the standard deviation in both directions and 1 pass will be set.<br><br><b>Examples:</b><pre>blur: gaussian( 2.5 );
blur: gaussian( 6, 6, 1 );</pre>


=== border ===
Shorthand for setting panel border. Specify width, style, and color.  Supported styles are: solid, none.<br><br><b>Examples:</b><pre>border: 2px solid #111111FF;</pre>


=== border-bottom ===
Shorthand for setting the bottom panel border. Specify width, style, and color.  Supported styles are: solid, none.<br><br><b>Examples:</b><pre>border-bottom: 2px solid #111111FF;</pre>


=== border-bottom-color ===
Specifies border color for the bottom edge of the panel. <br><br><b>Examples:</b><pre>border-bottom-color: #111111FF;</pre>


=== border-bottom-left-radius ===
Specifies border-radius for bottom-left corner which rounds off border and clips background/foreground content to rounded edge.  Takes 1 or 2 values in px or %, first value is horizontal radii for elliptical corner, second is vertical radii, if only one is specified then horizontal/vertical will both be set and corner will be circular.<br><br><b>Examples:</b><pre>border-bottom-left-radius: 2px 2px;
border-bottom-left-radius: 5%;</pre>


=== border-bottom-right-radius ===
Specifies border-radius for bottom-right corner which rounds off border and clips background/foreground content to rounded edge.  Takes 1 or 2 values in px or %, first value is horizontal radii for elliptical corner, second is vertical radii, if only one is specified then horizontal/vertical will both be set and corner will be circular.<br><br><b>Examples:</b><pre>border-bottom-right-radius: 2px 2px;
border-bottom-right-radius: 5%;</pre>


=== border-bottom-style ===
Specifies border style for the bottom edge of the panel. <br><br><b>Examples:</b><pre>border-bottom-style: solid;</pre>


=== border-bottom-width ===
Specifies border width for the bottom edge of the panel. <br><br><b>Examples:</b><pre>border-bottom-width: 2px;</pre>


=== border-color ===
Specifies border color for panel.  If a single color value is set it applies to all sides, if 2 are set the first is top/bottom and the second is left/right, if all four are set then they are top, right, bottom, left in order.<br><br><b>Examples:</b><pre>border-color: #111111FF;
border-color: #FF0000FF #00FF00FF #0000FFFF #00FFFFFF;</pre>


=== border-left ===
Shorthand for setting the left panel border. Specify width, style, and color.  Supported styles are: solid, none.<br><br><b>Examples:</b><pre>border-left: 2px solid #111111FF;</pre>


=== border-left-color ===
Specifies border color for the left edge of the panel. <br><br><b>Examples:</b><pre>border-left-color: #111111FF;</pre>


=== border-left-style ===
Specifies border style for the left edge of the panel. <br><br><b>Examples:</b><pre>border-left-style: solid;</pre>


=== border-left-width ===
Specifies border width for the left edge of the panel. <br><br><b>Examples:</b><pre>border-left-width: 2px;</pre>


=== border-radius ===
Shorthand to set border radius for all corners at once.  Border radius rounds off corners of the panel, adjusting the border to smoothly round and also clipping background image/color and contents to the specified elliptical or circular values.  In this shorthand version you may specify a single value for all raddi, or horizontal / vertical separated by the '/' character.  For both horizontal and vertical you may specify 1 to 4 values in pixels or %, they will be taken in order as top-left, top-right, bottom-right, bottom-left radii values.<br><br><b>Examples:</b><pre>// 2 px circular corners on all sides
border-radius: 2px;
// Perfect circular or elliptical panel (circular if box was square)
border-radius: 50% / 50%;
// 2 px horizontal radii 4px vertical elliptical corners on all sides
border-radius: 2px / 4px;
// All corners fully specified 
border-radius: 2px 3px 4px 2px / 2px 3px 3px 2px;</pre>


=== border-right ===
Shorthand for setting the right panel border. Specify width, style, and color.  Supported styles are: solid, none.<br><br><b>Examples:</b><pre>border-right: 2px solid #111111FF;</pre>


=== border-right-color ===
Specifies border color for the right edge of the panel. <br><br><b>Examples:</b><pre>border-right-color: #111111FF;</pre>


=== border-right-style ===
Specifies border style for the right edge of the panel. <br><br><b>Examples:</b><pre>border-right-style: solid;</pre>


=== border-right-width ===
Specifies border width for the right edge of the panel. <br><br><b>Examples:</b><pre>border-right-width: 2px;</pre>


=== border-style ===
Specifies border style for panel.  If a single style value is set it applies to all sides, if 2 are set the first is top/bottom and the second is left/right, if all four are set then they are top, right, bottom, left in order.<br><br><b>Examples:</b><pre>border-style: solid;
border-style: solid none solid none;</pre>


=== border-top ===
Shorthand for setting the top panel border. Specify width, style, and color.  Supported styles are: solid, none.<br><br><b>Examples:</b><pre>border-top: 2px solid #111111FF;</pre>


=== border-top-color ===
Specifies border color for the top edge of the panel. <br><br><b>Examples:</b><pre>border-top-color: #111111FF;</pre>


=== border-top-left-radius ===
Specifies border-radius for top-left corner which rounds off border and clips background/foreground content to rounded edge.  Takes 1 or 2 values in px or %, first value is horizontal radii for elliptical corner, second is vertical radii, if only one is specified then horizontal/vertical will both be set and corner will be circular.<br><br><b>Examples:</b><pre>border-top-left-radius: 2px 2px;
border-top-left-radius: 5%;</pre>


=== border-top-right-radius ===
Specifies border-radius for top-right corner which rounds off border and clips background/foreground content to rounded edge.  Takes 1 or 2 values in px or %, first value is horizontal radii for elliptical corner, second is vertical radii, if only one is specified then horizontal/vertical will both be set and corner will be circular.<br><br><b>Examples:</b><pre>border-top-right-radius: 2px 2px;
border-top-right-radius: 5%;</pre>


=== border-top-style ===
Specifies border style for the top edge of the panel. <br><br><b>Examples:</b><pre>border-top-style: solid;</pre>


=== border-top-width ===
Specifies border width for the top edge of the panel. <br><br><b>Examples:</b><pre>border-top-width: 2px;</pre>


=== border-width ===
Specifies border width for panel.  If a single width value is set it applies to all sides, if 2 are set the first is top/bottom and the second is left/right, if all four are set then they are top, right, bottom, left in order.<br><br><b>Examples:</b><pre>border-width: 1px;'
border-width: 20px 1px 20px 1px;</pre>


=== box-shadow ===
Specifies outer shadows for boxes, or inset shadows/glows.  The shadow shape will match the border box for the panel,so use border-radius to affect rounding.  Syntax takes optional 'inset', optional 'fill' then color, and then horizontal offset pixels, vertical offset pixels, blur radius pixels, and spread distance in pixels. Inset means the shadow is an inner shadow/glow, fill is validonly on outer shadows and means draw the shadow behind the entire box, not clipping it to outside the border area only.<br><br><b>Examples:</b><pre>box-shadow: #ffffff80 4px 4px 8px 0px; // outer
box-shadow: fill #ffffff80 4px 4px 8px 0px; // outer, filled
box-shadow: inset #333333b0 0px 0px 8px 12px; // inner</pre>


=== brightness ===
Sets the brightness that applies to the panel and all it's children during composition. The value is a multiplier on the HSB brightness value.<br><br><b>Example:</b><pre>brightness: 1.5;</pre>


=== clip ===
Specifies a clip region within the panel, where contents will be clipped at render time. This clipping has no impact on layout, and is fast and supported for transitions/animations. Radial clip mode takes a center point, start angle and angular width of the revealed sector.<br><br><b>Example:</b><pre>clip: rect( 10%, 90%, 90%, 10% );clip: radial( 50% %50, 0deg, 90deg );</pre>


=== color ===
Sets the foreground fill color/gradient/combination for a panel.  This color is the color used to render text within the panel.<br><br><b>Examples:</b><pre>color: #FFFFFFFF;
color: gradient( linear, 0% 0%, 0% 100%, from( #cbcbcbff ), to( #a0a0a0a0 ) );</pre>


=== context-menu-arrow-position ===
Specifies where to point the arrow of a context menu at on this panel. The first value controls how the arrow is positioned horizontally when the context menu is to the top or bottom of the panel, and the second value controls how the arrow is positioned vertically when the context menu is to the left or right of the panel. Default is '50% 50%'.<br><br><b>Example:</b><pre>context-menu-arrow-position: 25% 50%;</pre>


=== context-menu-body-position ===
Specifies where to position the body of a context menu relative to this panel. The first value controls how the body is aligned horizontally when the context menu is to the top or bottom of the panel, and the second value controls how the body is aligned vertically when the context menu is to the left or right of the panel. 0% means left/top aligned, 50% means center/middle aligned, and 100% means right/bottom aligned. Default is '0% 0%'.<br><br><b>Example:</b><pre>context-menu-body-position: 50% 100%;</pre>


=== context-menu-position ===
Specifies where to position a context menu relative to this panel. Valid options include 'left', 'top', 'right', and 'bottom'. List up to 4 positions to determine the order that positions are tried if the context menu doesn't fully fit on screen. Default is 'right left bottom top'. If less than 4 positions are specified, the context menu first tries the opposite of the specified position along the same axis before switching to the other axis.<br><br><b>Examples:</b><pre>context-menu-position: bottom;
context-menu-position: left bottom;</pre>


=== contrast ===
Sets the contrast that applies to the panel and all it's children during composition.<br><br><b>Example:</b><pre>contrast: 1.5;</pre>


=== flow-children ===
&lt;Needs a description&gt;


=== font ===
&lt;Needs a description&gt;


=== font-family ===
Specifies the font face to use.<br><br><b>Examples:</b><pre>font-family: Arial;
font-family: "Comic Sans MS";</pre>


=== font-size ===
Specifies the target font face height in pixels.<br><br><b>Example:</b><pre>font-size: 12;</pre>


=== font-style ===
Specifies the font style to use. Supported values are normal, and italic<br><br><b>Example:</b><pre>font-style: normal;</pre>


=== font-weight ===
Specifies the font weight to use. Supported values are light, thin, normal, medium, bold, and black.<br><br><b>Examples:</b><pre>font-weight: normal;
font-weight: bold;
font-weight: thin;</pre>


=== height ===
Sets the height for this panel. Possible values:<br>"fit-children" - Panel size is set to the required size of all children (default)<br>&lt;pixels&gt; - Any fixed pixel value (ex: "100px")<br>&lt;percentage&gt; - Percentage of parent height (ex: "100%")<br>"fill-parent-flow( &lt;weight&gt; )" - Fills to remaining parent width. If multiple children are set to this value, weight is used to determine final height. For example, if three children are set to fill-parent-flow of 1.0 and the parent is 300px tall, each child will be 100px tall. (ex: "fill-parent-flow( 1.0 )" )<br>"width-percentage( &lt;percentage&gt; )" - Percentage of the panel's width, which allows you to enforce a particular aspect ratio.  The width cannot also be height-percentage.


=== horizontal-align ===
&lt;Needs a description&gt;


=== hue-rotation ===
Sets the hue rotation to apply to the panel and all it's children during composition. Default of 0.0 means no adjustment, domain is in degrees.<br><br><b>Example:</b><pre>hue-rotation: 180deg;</pre>


=== letter-spacing ===
Sets letter-spacing for text in a string. Possible values:<br>normal - no manual spacing<br>&lt;pixels&gt; - Any fixed pixel value (ex: "1px")


=== line-height ===
Specifies the line height (distance between top edge of line above and line below) to use for text.  By default this is unset and a value that matches the font-size reasonably will be used automatically.<br><br><b>Example:</b><pre>line-height: 20px;</pre>


=== margin ===
&lt;Needs a description&gt;


=== margin-bottom ===
&lt;Needs a description&gt;


=== margin-left ===
&lt;Needs a description&gt;


=== margin-right ===
&lt;Needs a description&gt;


=== margin-top ===
&lt;Needs a description&gt;


=== max-height ===
&lt;Needs a description&gt;


=== max-width ===
&lt;Needs a description&gt;


=== min-height ===
&lt;Needs a description&gt;


=== min-width ===
&lt;Needs a description&gt;


=== opacity ===
Sets the opacity or amount of transparency applied to the panel and all it's children during composition. Default of 1.0 means fully opaque, 0.0 means fully transparent.<br><br><b>Example:</b><pre>opacity: 0.8;</pre>


=== opacity-mask ===
Applies an image as an opacity mask that stretches to the panel bounds and fades out it's content based on the alpha channel. The second float value is an optional opacity value for the mask itself, the image won't interpolate/cross-fade, but you can animate the opacity to fade the mask in/out. The -scroll-up, -scroll-down, and -scroll-up-down varients override the mask and apply only when the various vertical scroll scenarios affect the panel based on the overflow property.<br><br><b>Examples:</b><pre>opacity-mask: url( "file://{images}/upper_row_mask.tga" );
opacity-mask: url( "file://{images}/upper_row_mask.tga" ) 0.5;
opacity-mask-scroll-up: url( "file://{images}/upper_row_mask_up.tga" ) 0.5;
opacity-mask-scroll-down: url( "file://{images}/upper_row_mask_down.tga" ) 0.5;
opacity-mask-scroll-up-down: url( "file://{images}/upper_row_mask_up_down.tga" ) 0.5;</pre>


=== opacity-mask-scroll-down ===



=== opacity-mask-scroll-up ===



=== opacity-mask-scroll-up-down ===



=== overflow ===
Specifies what to do with contents that overflow the available space for the panel. Possible values:<br>"squish" - Children are squished to fit within the panel's bounds if needed (default)<br>"clip" - Children maintain their desired size but their contents are clipped<br>"scroll" - Children maintain their desired size and a scrollbar is added to this panel<br><br><b>Examples:</b><pre>overflow: squish squish; // squishes contents in horizontal and vertical directions
overflow: squish scroll; // scrolls contents in the Y direction</pre>


=== padding ===
&lt;Needs a description&gt;


=== padding-bottom ===
&lt;Needs a description&gt;


=== padding-left ===
&lt;Needs a description&gt;


=== padding-right ===
&lt;Needs a description&gt;


=== padding-top ===
&lt;Needs a description&gt;


=== perspective ===
Sets the perspective depth space available for children of the panel.  Default of 1000 would mean that children at 1000px zpos are right at the viewers eye, -1000px are just out of view distance faded to nothing.<br><br><b>Example:</b><pre>perspective: 1000;</pre>


=== perspective-origin ===
Sets the perspective origin which will be used when transforming children of this panel.  This can be thought of as the camera x/y position relative to the panel.<br><br><b>Example:</b><pre>perspective-origin: 50% 50%;</pre>


=== position ===
Sets the x, y, z position for a panel. Must not be in a flowing layout.<br><br><b>Example:</b><pre>position: 3% 20px 0px;</pre>


=== pre-transform-rotate2d ===
Sets 2 dimensional rotation degrees that apply to the quad for this panel prior to 3 dimensional transforms. This rotation applies without perspective and leaves the panel centered at the same spot as it started.<br><br><b>Example:</b><pre>pre-transform-rotate2d: 45deg;</pre>


=== pre-transform-scale2d ===
Sets 2 dimensional X/Y scale factors that apply to the quad for this panel prior to 3 dimensional transforms. This scaling applies without perspective and leaves the panel centered at the same spot as it started. Default of 1.0 means no scaling, 0.5 would be half size.<br><br><b>Examples:</b><pre>pre-transform-scale2d: 0.8
pre-transform-scale2d: 0.4, 0.6</pre>


=== saturation ===
Sets the amount of saturation to apply to the panel and all it's children during composition.  Default of 1.0 means no adjustment, 0.0 means fully desaturated to gray scale, greater than 1.0 means over-saturation.<br><br><b>Example:</b><pre>saturation: 0.4;</pre>


=== sound ===
Specifies a sound name to play when this selector is applied.<br><br><b>Example:</b><pre>sound: "whoosh_in";</pre>


=== sound-out ===
Specifies a sound name to play when this selector is removed.<br><br><b>Example:</b><pre>sound-out: "whoosh_out";</pre>


=== text-align ===
Specifies the text alignment for text within this panel, defaults to left.<br><br><b>Examples:</b><pre>text-align: left;
text-align: right;
text-align: center;</pre>


=== text-decoration ===
Specifies the decoration for text within this panel, defaults to none. Possible values: none, underline, line-through.<br><br><b>Example:</b><pre>text-decoration: underline;</pre>


=== text-overflow ===
Controls truncation of text that doesn't fit in a panel.  "clip" means to simply truncate (on char boundaries), "ellipsis" means to end with '...', and "shrink" means to a 
We default to ellipsis, which is contrary to the normal CSS spec.<br><br><b>Examples:</b><pre>text-overflow: ellipsis;
text-overflow: clip;
text-overflow: shrink;
</pre>


=== text-shadow ===
Specifies text shadows.  The shadow shape will match the text the panel can generate,and this is only meaningful for labels.  Syntax takes horizontal offset pixels, vertical offset pixels, blur radius pixels, strength, and then shadow color.<br><br><b>Example:</b><pre>text-shadow: 2px 2px 8px 3.0 #333333b0;</pre>


=== text-transform ===
Specifies the transform for text within this panel, defaults to none. Possible values: none, uppercase, lowercase.<br><br><b>Example:</b><pre>text-transform: uppercase;</pre>


=== texture-sampling ===
Controls texture sampling mode for the panel. Set to alpha-only to use the textures alpha data across all 3 color channels.<br><br><b>Examples:</b><pre>texture-sampling: normal;
texture-sampling: alpha-only;</pre>


=== tooltip-arrow-position ===
Specifies where to point the arrow of a tooltip at on this panel. The first value controls how the arrow is positioned horizontally when the tooltip is to the top or bottom of the panel, and the second value controls how the arrow is positioned vertically when the tooltip is to the left or right of the panel. Default is '50% 50%'.<br><br><b>Example:</b><pre>tooltip-arrow-position: 25% 50%;</pre>


=== tooltip-body-position ===
Specifies where to position the body of a tooltip relative to this panel. The first value controls how the body is aligned horizontally when the tooltip is to the top or bottom of the panel, and the second value controls how the body is aligned vertically when the tooltip is to the left or right of the panel. 0% means left/top aligned, 50% means center/middle aligned, and 100% means right/bottom aligned. Default is '0% 0%'.<br><br><b>Example:</b><pre>tooltip-body-position: 50% 100%;</pre>


=== tooltip-position ===
Specifies where to position a tooltip relative to this panel. Valid options include 'left', 'top', 'right', and 'bottom'. List up to 4 positions to determine the order that positions are tried if the tooltip doesn't fully fit on screen. Default is 'right left bottom top'. If less than 4 positions are specified, the tooltip first tries the opposite of the specified position along the same axis before switching to the other axis.<br><br><b>Examples:</b><pre>tooltip-position: bottom;
tooltip-position: left bottom;</pre>


=== transform ===
Sets the transforms to apply to the panel in 2d or 3d space.  You can combine various transforms (comma separated) and they will be applied in order to create a 4x4 3d transform matrix.  The possible operations are: translate3d( x, y, z ), translatex( x ), translatey( y ), translatez( z ), scale3d( x, y, z), rotate3d( x, y, z ), rotatex( x ), rotatey( y ), rotatez( z ).<br><br><b>Examples:</b><pre>transform: translate3d( -100px, -100px, 0px );
transform: rotateZ( -32deg ) rotateX( 30deg ) translate3d( 125px, 520px, 230px );</pre>


=== transform-origin ===
Sets the transform origin about which transforms will be applied.  Default is 50% 50% on the panel so a rotation/scale is centered.<br><br><b>Example:</b><pre>transform-origin: 50% 50%</pre>


=== transition ===
Specifies which properties should transition smoothly to new values if a class/pseudo class changes the styles.  Also specifies duration, timing function, and delay.  Valid timing functions are: ease, ease-in, ease-out, ease-in-out, linear.<br><br><b>Example:</b><pre>transition: position 2.0s ease-in-out 0.0s, perspective-origin 1.2s ease-in-out 0.8s;</pre>


=== transition-delay ===
Specifies the delay in seconds to use for transition properties on this panel, if more than one comma delimited value is specified then the values are applied to each property specified in 'transition-property' in order.  If only one value is specified then it applies to all the properties specified in transition-property.<br><br><b>Examples:</b><pre>transition-delay: 0.0s;
transition-delay: 0.0s, 1.2s;</pre>


=== transition-duration ===
Specifies the durating in seconds to use for transition properties on this panel, if more than one comma delimited value is specified then the values are applied to each property specified in 'transition-property' in order.  If only one value is specified then it applies to all the properties specified in transition-property.<br><br><b>Examples:</b><pre>transition-duration: 2.0s;
transition-duration: 2.0s, 1.2s, 1.2s, 4.0s, 2.0s;</pre>


=== transition-property ===
Specifies which properties should transition smoothly to new values if a class/pseudo class changes the styles.<br><br><b>Examples:</b><pre>transition: position, transform, background-color;</pre>


=== transition-timing-function ===
Specifies the timing function to use for transition properties on this panel, if more than one comma delimited value is specified then the values are applied to each property specified in 'transition-property' in order.  If only one value is specified then it applies to all the properties specified in transition-property. Valid timing functions are: ease, ease-in, ease-out, ease-in-out, linear.<br><br><b>Examples:</b><pre>transition-timing-function: ease-in-out;
transition-timing-function: ease-in-out, linear;
transition-timing-function: cubic-bezier( 0.785, 0.385, 0.555, 1.505 );</pre>


=== vertical-align ===
&lt;Needs a description&gt;


=== visibility ===
Controls if the panel is visible and is included in panel layout. Possible values:<br>"visible" - panel is visible and included in layout (default)<br>"collapse" - panel is invisible and not included in layout


=== wash-color ===
Specifies a 'wash' color, which means a color that will be blended over the panel and all it's children at composition time, tinting them.  The alpha value of the color determines the intensity of the tinting.<br><br><b>Example:</b><pre>wash-color: #39b0d325;</pre>


=== white-space ===
Controls white-space wrapping on rendered text.  "normal" means wrap on whitespace, "nowrap" means do no wrapping at all.<br><br><b>Examples:</b><pre>white-space: normal;
white-space: nowrap;</pre>


=== width ===
Sets the width for this panel. Possible values:<br>"fit-children" - Panel size is set to the required size of all children (default)<br>&lt;pixels&gt; - Any fixed pixel value (ex: "100px")<br>&lt;percentage&gt; - Percentage of parent width (ex: "100%")<br>"fill-parent-flow( &lt;weight&gt; )" - Fills to remaining parent width. If multiple children are set to this value, weight is used to determine final width. For example, if three children are set to fill-parent-flow of 1.0 and the parent is 300px wide, each child will be 100px wide. (ex: "fill-parent-flow( 1.0 )" )<br>"height-percentage( &lt;percentage&gt; )" - Percentage of the panel's height, which allows you to enforce a particular aspect ratio.  The height cannot also be width-percentage.


=== x ===
Sets the x, y, z position for a panel. Must not be in a flowing layout.<br><br><b>Example:</b><pre>position: 3% 20px 0px;</pre>


=== y ===
Sets the x, y, z position for a panel. Must not be in a flowing layout.<br><br><b>Example:</b><pre>position: 3% 20px 0px;</pre>


=== z ===
Sets the x, y, z position for a panel. Must not be in a flowing layout.<br><br><b>Example:</b><pre>position: 3% 20px 0px;</pre>


=== z-index ===
Sets the z-index for a panel, panels will be sorted and painted in order within a parent panel.  The sorting first sorts by the z-pos computed from position and transforms, then if panels have matching zpos zindex is used. z-index is different than z-pos in that it doesn't affect rendering perspective, just paint/hit-test ordering. The default z-index value is 0, and any floating point value is accepted.<br><br><b>Example:</b><pre>z-index: 1;</pre>