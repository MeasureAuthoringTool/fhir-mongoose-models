const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { BundleEntryRequestSchema } = require('./BundleEntryRequest');
const { BundleEntryResponseSchema } = require('./BundleEntryResponse');
const { BundleEntrySearchSchema } = require('./BundleEntrySearch');
const { BundleLinkSchema } = require('./BundleLink');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ResourceSchema } = require('./Resource');

const BundleEntrySchema = BackboneElementSchemaFunction({
  link: [BundleLinkSchema],
  fullUrl: PrimitiveUriSchema,
  resource: ResourceSchema,
  search: BundleEntrySearchSchema,
  request: BundleEntryRequestSchema,
  response: BundleEntryResponseSchema,
  typeName: { type: String, default: 'BundleEntry' },
  _type: { type: String, default: 'FHIR::BundleEntry' },
});

class BundleEntry extends mongoose.Document {
  constructor(object) {
    super(object, BundleEntrySchema);
    this.typeName = 'BundleEntry';
    this._type = 'FHIR::BundleEntry';
  }
}

module.exports.BundleEntrySchema = BundleEntrySchema;
module.exports.BundleEntry = BundleEntry;
