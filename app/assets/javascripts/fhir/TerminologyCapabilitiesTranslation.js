const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');

const TerminologyCapabilitiesTranslationSchema = BackboneElementSchemaFunction({
  needsMap: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'TerminologyCapabilitiesTranslation' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesTranslation' },
});

class TerminologyCapabilitiesTranslation extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesTranslationSchema);
    this.typeName = 'TerminologyCapabilitiesTranslation';
    this._type = 'FHIR::TerminologyCapabilitiesTranslation';
  }
}

module.exports.TerminologyCapabilitiesTranslationSchema = TerminologyCapabilitiesTranslationSchema;
module.exports.TerminologyCapabilitiesTranslation = TerminologyCapabilitiesTranslation;
