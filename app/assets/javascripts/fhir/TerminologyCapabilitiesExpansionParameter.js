const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesExpansionParameterSchema = BackboneElementSchemaFunction({
   name : String,
   documentation : String,
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesExpansionParameter' },
});

class TerminologyCapabilitiesExpansionParameter extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesExpansionParameterSchema);
    this._type = 'FHIR::TerminologyCapabilitiesExpansionParameter';
  }
};


module.exports.TerminologyCapabilitiesExpansionParameterSchema = TerminologyCapabilitiesExpansionParameterSchema;
module.exports.TerminologyCapabilitiesExpansionParameter = TerminologyCapabilitiesExpansionParameter;
