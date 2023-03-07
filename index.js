function decodePolyline(polyline) {
  var _ = {};

  _.Ya = function (a, b, c) {
    null != b && (a = Math.max(a, b));
    null != c && (a = Math.min(a, c));
    return a;
  };
  _.Za = function (a, b, c) {
    c -= b;
    return ((((a - b) % c) + c) % c) + b;
  };
  _.w = function (a) {
    return a ? a.length : 0;
  };

  _.E = function (a, b, c) {
    a -= 0;
    b -= 0;
    c || ((a = _.Ya(a, -90, 90)), 180 != b && (b = _.Za(b, -180, 180)));
    this.latitude = function () {
      return a;
    };
    this.longitude = function () {
      return b;
    };
  };

  function decodePath(a) {
    for (
      var b = _.w(a),
        c = Array(Math.floor(a.length / 2)),
        d = 0,
        e = 0,
        f = 0,
        g = 0;
      d < b;
      ++g
    ) {
      var h = 1,
        l = 0,
        n;
      do (n = a.charCodeAt(d++) - 63 - 1), (h += n << l), (l += 5);
      while (31 <= n);
      e += h & 1 ? ~(h >> 1) : h >> 1;
      h = 1;
      l = 0;
      do (n = a.charCodeAt(d++) - 63 - 1), (h += n << l), (l += 5);
      while (31 <= n);
      f += h & 1 ? ~(h >> 1) : h >> 1;
      c[g] = new _.E(1e-5 * e, 1e-5 * f, !0);
    }
    c.length = g;
    return c;
  }

  var result = decodePath(polyline).map(function (el) {
    return {
      latitude: Number(el.latitude().toFixed(5)),
      longitude: Number(el.longitude().toFixed(5)),
    };
  });

  return result;
}

module.exports = decodePolyline;
