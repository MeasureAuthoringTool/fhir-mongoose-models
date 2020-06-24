const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { ResourceSchema } = require('./Resource');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BundleEntryResponseSchema = BackboneElementSchemaFunction({
   status : String,
   location : String,
   etag : String,
   lastModified : DateTime,
   outcome : ResourceSchema,
   fhirTitle: { type: String, default: 'BundleEntryResponse' },
});

class BundleEntryResponse extends mongoose.Document {
  constructor(object) {
    super(object, BundleEntryResponseSchema);
    this._type = 'FHIR::BundleEntryResponse';
  }
};


module.exports.BundleEntryResponseSchema = BundleEntryResponseSchema;
module.exports.BundleEntryResponse = BundleEntryResponse;
