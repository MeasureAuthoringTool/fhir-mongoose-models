const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { TerminologyCapabilitiesCodeSystemVersionSchema } = require('./TerminologyCapabilitiesCodeSystemVersion');

const TerminologyCapabilitiesCodeSystemSchema = BackboneElementSchemaFunction({
  uri: PrimitiveCanonicalSchema,
  version: [TerminologyCapabilitiesCodeSystemVersionSchema],
  subsumption: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'TerminologyCapabilitiesCodeSystem' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesCodeSystem' },
});

class TerminologyCapabilitiesCodeSystem extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesCodeSystemSchema);
    this.typeName = 'TerminologyCapabilitiesCodeSystem';
    this._type = 'FHIR::TerminologyCapabilitiesCodeSystem';
  }
}

module.exports.TerminologyCapabilitiesCodeSystemSchema = TerminologyCapabilitiesCodeSystemSchema;
module.exports.TerminologyCapabilitiesCodeSystem = TerminologyCapabilitiesCodeSystem;
