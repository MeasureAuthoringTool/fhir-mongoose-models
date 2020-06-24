const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TerminologyCapabilitiesCodeSystemVersionSchema } = require('./TerminologyCapabilitiesCodeSystemVersion');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesCodeSystemSchema = BackboneElementSchemaFunction({
   uri : String,
   version : [TerminologyCapabilitiesCodeSystemVersionSchema],
   subsumption : Boolean,
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesCodeSystem' },
});

class TerminologyCapabilitiesCodeSystem extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesCodeSystemSchema);
    this._type = 'FHIR::TerminologyCapabilitiesCodeSystem';
  }
};


module.exports.TerminologyCapabilitiesCodeSystemSchema = TerminologyCapabilitiesCodeSystemSchema;
module.exports.TerminologyCapabilitiesCodeSystem = TerminologyCapabilitiesCodeSystem;
