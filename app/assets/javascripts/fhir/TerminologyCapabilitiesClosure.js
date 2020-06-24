const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesClosureSchema = BackboneElementSchemaFunction({
   translation : Boolean,
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesClosure' },
});

class TerminologyCapabilitiesClosure extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesClosureSchema);
    this._type = 'FHIR::TerminologyCapabilitiesClosure';
  }
};


module.exports.TerminologyCapabilitiesClosureSchema = TerminologyCapabilitiesClosureSchema;
module.exports.TerminologyCapabilitiesClosure = TerminologyCapabilitiesClosure;
