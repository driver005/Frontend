import styled, {keyframes} from 'styledcomponents'

/**
 * Custom application mixins available through out the app
 */

// define sass mixin
// Generates single property classes
// -------------------------
export const mixin = (base, property, variants) => {
    for(value in variants) {
        return`${base}: ${value}`
    }
    const thumb(parent, )
}

@mixin property-variants($base, $property, $variants: ()) {
    @each $size, $value in $variants {
      @if $size == 'md' {
        #{$base} {
          #{$property}: $value;
        }
  
        #{$base}-n {
          #{$property}: $value;
        }
      }
  
      #{$base}-#{$size} {
        #{$property}: $value;
      }
  
      #{$base}-n-#{$size} {
        #{$property}: -$value;
      }
    }
  }
  
  // Common thumbnail properties
  // -------------------------
  @mixin thumb($parent, $size) {
    #{$parent} {
      width: $size;
  
      > .glyphicon,
      > .fa {
        line-height: $size;
      }
    }
  }
  
  @mixin placeholder($color: $input-color-placeholder) {
    // Firefox
    &::-moz-placeholder {
      color: $color;
      opacity: 1; // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526
    }
    &:-ms-input-placeholder { color: $color; } // Internet Explorer 10+
    &::-webkit-input-placeholder { color: $color; } // Safari and Chrome
  }
  
  @mixin border-radius($radius) {
    border-radius: $radius;
  }
  
  @mixin scroll-bar($color) {
    &::-webkit-scrollbar {
      height: 8px;
      width: 4px;
    }
  
    &::-webkit-scrollbar-thumb {
      border: none;
      background-color: $color;
    }
  }
  
  @mixin keyframes($name) {
    @-webkit-keyframes #{$name} {
      @content;
    }
  
    @keyframes #{$name} {
      @content;
    }
  }
  
  @mixin icon-style {
    font-weight: $font-weight-semi-bold;
    font-size: 16px;
    span {
      background-color: $icon-color;
      rect {
        fill: #0D2B47;
      }
    }
  }