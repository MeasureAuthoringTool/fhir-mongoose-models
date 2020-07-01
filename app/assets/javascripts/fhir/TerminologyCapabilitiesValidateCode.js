const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');

const TerminologyCapabilitiesValidateCodeSchema = BackboneElementSchemaFunction({
  translations: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'TerminologyCapabilitiesValidateCode' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesValidateCode' },
});

class TerminologyCapabilitiesValidateCode extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesValidateCodeSchema);
    this.typeName = 'TerminologyCapabilitiesValidateCode';
    this._type = 'FHIR::TerminologyCapabilitiesValidateCode';
  }
}

module.exports.TerminologyCapabilitiesValidateCodeSchema = TerminologyCapabilitiesValidateCodeSchema;
module.exports.TerminologyCapabilitiesValidateCode = TerminologyCapabilitiesValidateCode;
