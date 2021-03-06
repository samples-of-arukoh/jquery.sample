/*
 * sample
 * https://github.com/arukoh/jquery.sample
 *
 * Copyright (c) 2015 arukoh
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.sample = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.sample = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.sample.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.sample.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].sample = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
