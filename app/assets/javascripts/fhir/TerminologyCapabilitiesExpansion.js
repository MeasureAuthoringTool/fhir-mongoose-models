const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { TerminologyCapabilitiesExpansionParameterSchema } = require('./TerminologyCapabilitiesExpansionParameter');

const TerminologyCapabilitiesExpansionSchema = BackboneElementSchemaFunction({
  hierarchical: PrimitiveBooleanSchema,
  paging: PrimitiveBooleanSchema,
  incomplete: PrimitiveBooleanSchema,
  parameter: [TerminologyCapabilitiesExpansionParameterSchema],
  textFilter: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'TerminologyCapabilitiesExpansion' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesExpansion' },
});

class TerminologyCapabilitiesExpansion extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesExpansionSchema);
    this.typeName = 'TerminologyCapabilitiesExpansion';
    this._type = 'FHIR::TerminologyCapabilitiesExpansion';
  }
}

module.exports.TerminologyCapabilitiesExpansionSchema = TerminologyCapabilitiesExpansionSchema;
module.exports.TerminologyCapabilitiesExpansion = TerminologyCapabilitiesExpansion;
