const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SearchParamTypeSchema } = require('./SearchParamType');

const CapabilityStatementRestResourceSearchParamSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  definition: PrimitiveCanonicalSchema,
  type: SearchParamTypeSchema,
  documentation: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'CapabilityStatementRestResourceSearchParam' },
  _type: { type: String, default: 'FHIR::CapabilityStatementRestResourceSearchParam' },
});

class CapabilityStatementRestResourceSearchParam extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestResourceSearchParamSchema);
    this.typeName = 'CapabilityStatementRestResourceSearchParam';
    this._type = 'FHIR::CapabilityStatementRestResourceSearchParam';
  }
}

module.exports.CapabilityStatementRestResourceSearchParamSchema = CapabilityStatementRestResourceSearchParamSchema;
module.exports.CapabilityStatementRestResourceSearchParam = CapabilityStatementRestResourceSearchParam;
