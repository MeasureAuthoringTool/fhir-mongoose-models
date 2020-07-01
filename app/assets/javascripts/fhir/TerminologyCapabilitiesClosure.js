const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');

const TerminologyCapabilitiesClosureSchema = BackboneElementSchemaFunction({
  translation: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'TerminologyCapabilitiesClosure' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesClosure' },
});

class TerminologyCapabilitiesClosure extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesClosureSchema);
    this.typeName = 'TerminologyCapabilitiesClosure';
    this._type = 'FHIR::TerminologyCapabilitiesClosure';
  }
}

module.exports.TerminologyCapabilitiesClosureSchema = TerminologyCapabilitiesClosureSchema;
module.exports.TerminologyCapabilitiesClosure = TerminologyCapabilitiesClosure;
