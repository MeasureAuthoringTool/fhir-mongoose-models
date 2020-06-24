const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesValidateCodeSchema = BackboneElementSchemaFunction({
   translations : Boolean,
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesValidateCode' },
});

class TerminologyCapabilitiesValidateCode extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesValidateCodeSchema);
    this._type = 'FHIR::TerminologyCapabilitiesValidateCode';
  }
};


module.exports.TerminologyCapabilitiesValidateCodeSchema = TerminologyCapabilitiesValidateCodeSchema;
module.exports.TerminologyCapabilitiesValidateCode = TerminologyCapabilitiesValidateCode;
