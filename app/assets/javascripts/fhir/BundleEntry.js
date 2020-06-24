const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BundleEntryRequestSchema } = require('./BundleEntryRequest');
const { BundleEntryResponseSchema } = require('./BundleEntryResponse');
const { BundleEntrySearchSchema } = require('./BundleEntrySearch');
const { BundleLinkSchema } = require('./BundleLink');
const { ResourceSchema } = require('./Resource');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BundleEntrySchema = BackboneElementSchemaFunction({
   link : [BundleLinkSchema],
   fullUrl : String,
   resource : ResourceSchema,
   search : BundleEntrySearchSchema,
   request : BundleEntryRequestSchema,
   response : BundleEntryResponseSchema,
   fhirTitle: { type: String, default: 'BundleEntry' },
});

class BundleEntry extends mongoose.Document {
  constructor(object) {
    super(object, BundleEntrySchema);
    this._type = 'FHIR::BundleEntry';
  }
};


module.exports.BundleEntrySchema = BundleEntrySchema;
module.exports.BundleEntry = BundleEntry;
