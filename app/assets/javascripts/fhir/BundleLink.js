const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const BundleLinkSchema = BackboneElementSchemaFunction({
  relation: PrimitiveStringSchema,
  url: PrimitiveUriSchema,
  typeName: { type: String, default: 'BundleLink' },
  _type: { type: String, default: 'FHIR::BundleLink' },
});

class BundleLink extends mongoose.Document {
  constructor(object) {
    super(object, BundleLinkSchema);
    this.typeName = 'BundleLink';
    this._type = 'FHIR::BundleLink';
  }
}

module.exports.BundleLinkSchema = BundleLinkSchema;
module.exports.BundleLink = BundleLink;
