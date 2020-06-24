const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { HTTPVerbSchema } = require('./HTTPVerb');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BundleEntryRequestSchema = BackboneElementSchemaFunction({
   method : HTTPVerbSchema,
   url : String,
   ifNoneMatch : String,
   ifModifiedSince : DateTime,
   ifMatch : String,
   ifNoneExist : String,
   fhirTitle: { type: String, default: 'BundleEntryRequest' },
});

class BundleEntryRequest extends mongoose.Document {
  constructor(object) {
    super(object, BundleEntryRequestSchema);
    this._type = 'FHIR::BundleEntryRequest';
  }
};


module.exports.BundleEntryRequestSchema = BundleEntryRequestSchema;
module.exports.BundleEntryRequest = BundleEntryRequest;
