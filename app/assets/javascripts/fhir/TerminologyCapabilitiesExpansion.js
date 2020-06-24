const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TerminologyCapabilitiesExpansionParameterSchema } = require('./TerminologyCapabilitiesExpansionParameter');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesExpansionSchema = BackboneElementSchemaFunction({
   hierarchical : Boolean,
   paging : Boolean,
   incomplete : Boolean,
   parameter : [TerminologyCapabilitiesExpansionParameterSchema],
   textFilter : String,
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesExpansion' },
});

class TerminologyCapabilitiesExpansion extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesExpansionSchema);
    this._type = 'FHIR::TerminologyCapabilitiesExpansion';
  }
};


module.exports.TerminologyCapabilitiesExpansionSchema = TerminologyCapabilitiesExpansionSchema;
module.exports.TerminologyCapabilitiesExpansion = TerminologyCapabilitiesExpansion;
