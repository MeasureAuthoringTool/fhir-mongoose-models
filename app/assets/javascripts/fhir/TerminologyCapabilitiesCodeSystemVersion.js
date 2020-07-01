const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { TerminologyCapabilitiesCodeSystemVersionFilterSchema } = require('./TerminologyCapabilitiesCodeSystemVersionFilter');

const TerminologyCapabilitiesCodeSystemVersionSchema = BackboneElementSchemaFunction({
  code: PrimitiveStringSchema,
  isDefault: PrimitiveBooleanSchema,
  compositional: PrimitiveBooleanSchema,
  language: [PrimitiveCodeSchema],
  filter: [TerminologyCapabilitiesCodeSystemVersionFilterSchema],
  property: [PrimitiveCodeSchema],
  typeName: { type: String, default: 'TerminologyCapabilitiesCodeSystemVersion' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesCodeSystemVersion' },
});

class TerminologyCapabilitiesCodeSystemVersion extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesCodeSystemVersionSchema);
    this.typeName = 'TerminologyCapabilitiesCodeSystemVersion';
    this._type = 'FHIR::TerminologyCapabilitiesCodeSystemVersion';
  }
}

module.exports.TerminologyCapabilitiesCodeSystemVersionSchema = TerminologyCapabilitiesCodeSystemVersionSchema;
module.exports.TerminologyCapabilitiesCodeSystemVersion = TerminologyCapabilitiesCodeSystemVersion;
