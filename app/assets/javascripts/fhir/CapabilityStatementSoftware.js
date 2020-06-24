const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementSoftwareSchema = BackboneElementSchemaFunction({
   name : String,
   version : String,
   releaseDate : DateTime,
   fhirTitle: { type: String, default: 'CapabilityStatementSoftware' },
});

class CapabilityStatementSoftware extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementSoftwareSchema);
    this._type = 'FHIR::CapabilityStatementSoftware';
  }
};


module.exports.CapabilityStatementSoftwareSchema = CapabilityStatementSoftwareSchema;
module.exports.CapabilityStatementSoftware = CapabilityStatementSoftware;
