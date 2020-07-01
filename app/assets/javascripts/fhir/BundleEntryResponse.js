const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ResourceSchema } = require('./Resource');

const BundleEntryResponseSchema = BackboneElementSchemaFunction({
  status: PrimitiveStringSchema,
  location: PrimitiveUriSchema,
  etag: PrimitiveStringSchema,
  lastModified: PrimitiveInstantSchema,
  outcome: ResourceSchema,
  typeName: { type: String, default: 'BundleEntryResponse' },
  _type: { type: String, default: 'FHIR::BundleEntryResponse' },
});

class BundleEntryResponse extends mongoose.Document {
  constructor(object) {
    super(object, BundleEntryResponseSchema);
    this.typeName = 'BundleEntryResponse';
    this._type = 'FHIR::BundleEntryResponse';
  }
}

module.exports.BundleEntryResponseSchema = BundleEntryResponseSchema;
module.exports.BundleEntryResponse = BundleEntryResponse;
