const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { HTTPVerbSchema } = require('./HTTPVerb');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const BundleEntryRequestSchema = BackboneElementSchemaFunction({
  method: HTTPVerbSchema,
  url: PrimitiveUriSchema,
  ifNoneMatch: PrimitiveStringSchema,
  ifModifiedSince: PrimitiveInstantSchema,
  ifMatch: PrimitiveStringSchema,
  ifNoneExist: PrimitiveStringSchema,
  typeName: { type: String, default: 'BundleEntryRequest' },
  _type: { type: String, default: 'FHIR::BundleEntryRequest' },
});

class BundleEntryRequest extends mongoose.Document {
  constructor(object) {
    super(object, BundleEntryRequestSchema);
    this.typeName = 'BundleEntryRequest';
    this._type = 'FHIR::BundleEntryRequest';
  }
}

module.exports.BundleEntryRequestSchema = BundleEntryRequestSchema;
module.exports.BundleEntryRequest = BundleEntryRequest;
