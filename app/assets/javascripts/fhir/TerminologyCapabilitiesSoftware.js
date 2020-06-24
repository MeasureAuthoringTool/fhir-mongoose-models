const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesSoftwareSchema = BackboneElementSchemaFunction({
   name : String,
   version : String,
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesSoftware' },
});

class TerminologyCapabilitiesSoftware extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesSoftwareSchema);
    this._type = 'FHIR::TerminologyCapabilitiesSoftware';
  }
};


module.exports.TerminologyCapabilitiesSoftwareSchema = TerminologyCapabilitiesSoftwareSchema;
module.exports.TerminologyCapabilitiesSoftware = TerminologyCapabilitiesSoftware;
