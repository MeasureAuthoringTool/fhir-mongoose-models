const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BundleEntrySchema } = require('./BundleEntry');
const { BundleLinkSchema } = require('./BundleLink');
const { BundleTypeSchema } = require('./BundleType');
const { IdentifierSchema } = require('./Identifier');
const { ResourceSchema } = require('./Resource');
const { SignatureSchema } = require('./Signature');
const { ResourceSchemaFunction } = require('./Resource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BundleSchema = ResourceSchemaFunction({
   identifier : IdentifierSchema,
   type : BundleTypeSchema,
   timestamp : DateTime,
   total : Number,
   link : [BundleLinkSchema],
   entry : [BundleEntrySchema],
   signature : SignatureSchema,
   fhirTitle: { type: String, default: 'Bundle' },
});

class Bundle extends mongoose.Document {
  constructor(object) {
    super(object, BundleSchema);
    this._type = 'FHIR::Bundle';
  }
};


module.exports.BundleSchema = BundleSchema;
module.exports.Bundle = Bundle;
