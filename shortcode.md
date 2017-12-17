# Shortcode

- [add_shortcode()](#add_shortcode)
    - [Description](#add_shortcode_description)
    - [Parameters](#add_shortcode_parameters)
- [do_shortcode()](#do_shortcode)
    - [Description](#do_shortcode_description)
    - [Parameters](#do_shortcode_parameters)
- [generate_shortcode()](#generate_shortcode)
    
This concept based on Wordpress functions.

<a name="add_shortcode"></a>
## add_shortcode()

** Reference: https://developer.wordpress.org/reference/functions/add_shortcode **

Function: Add hook for shortcode tag.

```php
add_shortcode(string $tag, callable $func)
```
    
<a name="add_shortcode_description"></a>
### Description

There can only be one hook for each shortcode. 
Which means that if another plugin has a similar shortcode, it will override yours or yours will override theirs depending on which order the plugins are included and/or ran.

Simplest example of a shortcode tag using the API:

```php
// [footag foo="bar"]
function footag_func( $atts ) {
    return "foo = {
        $atts[foo]
    }";
}
add_shortcode( 'footag', 'footag_func' );
```
    
Example with nice attribute defaults:

```php
// [bartag foo="bar"]
function bartag_func( $atts ) {
    $args = shortcode_atts( array(
        'foo' => 'no foo',
        'baz' => 'default baz',
    ), $atts );

    return "foo = {$args['foo']}";
}
add_shortcode( 'bartag', 'bartag_func' );
```

Example with enclosed content:

```php
// [baztag]content[/baztag]
function baztag_func( $atts, $content = '' ) {
    return "content = $content";
}
add_shortcode( 'baztag', 'baztag_func' );
```

<a name="add_shortcode_parameters"></a>
### Parameters

**$tag**: (string) (Required) Shortcode tag to be searched in post content.

**$func**: (callable) (Required) Hook to run when shortcode is found.

<a name="do_shortcode"></a>
## do_shortcode()

** Reference: https://developer.wordpress.org/reference/functions/do_shortcode **

Function: Search content for shortcodes and filter shortcodes through their hooks.

```php
do_shortcode(string $content, bool $ignore_html = false)
```
    
<a name="add_shortcode_description"></a>
### Description

If there are no shortcode tags defined, then the content will be returned without any filtering. 
This might cause issues when plugins are disabled but the shortcode will still show up in the post or content.

<a name="do_shortcode_parameters"></a>
### Parameters

**$content**: (string) (Required) Content to search for shortcodes.(string) (Required) The name of the shortcode hook.

**$ignore_html**: 
- (bool) (Optional) When true, shortcodes inside HTML elements will be skipped.
- Default value: false

<a name="generate_shortcode"></a>
##generate_shortcode()

```php
/**
 * @param $name
 * @param array $attributes
 * @return string
 */
function generate_shortcode($name, array $attributes)
```