(function() {
  var Base, Shop,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Base = require('./base');

  Shop = (function(_super) {

    __extends(Shop, _super);

    Shop.prototype.slug = "shop";

    Shop.prototype.prefix = "/shop";

    function Shop(site) {
      this.get = __bind(this.get, this);      Shop.__super__.constructor.call(this, site);
    }

    Shop.prototype.get = function(params, callback) {
      var url, _ref;
      if (typeof params === 'function') {
        _ref = [callback, params = params || null], params = _ref[0], callback = _ref[1];
      }
      url = this.resource.queryString("" + this.prefix, params);
      return this.resource.get(url, this.slug, callback);
    };

    return Shop;

  })(Base);

  module.exports = Shop;

}).call(this);
