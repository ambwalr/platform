// Generated by CoffeeScript 1.6.3
(function() {
  var Filters, root,
    __slice = [].slice;

  Filters = {};

  Filters.getCanvas = function(w, h) {
    var c;
    c = $("<canvas>")[0];
    c.width = w;
    c.height = h;
    return c;
  };

  Filters.getPixels = function(img) {
    var c, ctx;
    c = Filters.getCanvas(img.naturalWidth, img.naturalHeight);
    ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return ctx.getImageData(0, 0, c.width, c.height);
  };

  Filters.filterImage = function() {
    var filter, image, varargs;
    filter = arguments[0], image = arguments[1], varargs = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    varargs.unshift(this.getPixels(image));
    return filter.apply(null, varargs);
  };

  Filters.grayscale = function(pixels, args) {
    var b, d, g, i, r, v;
    d = pixels.data;
    i = 0;
    while (i < d.length) {
      r = d[i];
      g = d[i + 1];
      b = d[i + 2];
      v = 0.2 * r + 0.7 * g + 0.07 * b;
      d[i] = d[i + 1] = d[i + 2] = v;
      i += 4;
    }
    return pixels;
  };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Filters = Filters;

}).call(this);
