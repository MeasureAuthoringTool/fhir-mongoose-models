const mongoose = require('mongoose/browser');
const { BundleEntrySchema } = require('./BundleEntry');
const { BundleLinkSchema } = require('./BundleLink');
const { BundleTypeSchema } = require('./BundleType');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ResourceSchema } = require('./Resource');
const { ResourceSchemaFunction } = require('./Resource');
const { SignatureSchema } = require('./Signature');

const BundleSchema = ResourceSchemaFunction({
  identifier: IdentifierSchema,
  type: BundleTypeSchema,
  timestamp: PrimitiveInstantSchema,
  total: PrimitiveUnsignedIntSchema,
  link: [BundleLinkSchema],
  entry: [BundleEntrySchema],
  signature: SignatureSchema,
  typeName: { type: String, default: 'Bundle' },
  _type: { type: String, default: 'FHIR::Bundle' },
});

class Bundle extends mongoose.Document {
  constructor(object) {
    super(object, BundleSchema);
    this.typeName = 'Bundle';
    this._type = 'FHIR::Bundle';
  }
}

module.exports.BundleSchema = BundleSchema;
module.exports.Bundle = Bundle;
