const mongoose = require('mongoose/browser');
const { ConstraintSeveritySchema } = require('./ConstraintSeverity');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ElementDefinitionConstraintSchema = ElementSchemaFunction({
  key: PrimitiveIdSchema,
  requirements: PrimitiveStringSchema,
  severity: ConstraintSeveritySchema,
  human: PrimitiveStringSchema,
  expression: PrimitiveStringSchema,
  xpath: PrimitiveStringSchema,
  source: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'ElementDefinitionConstraint' },
  _type: { type: String, default: 'FHIR::ElementDefinitionConstraint' },
});

class ElementDefinitionConstraint extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionConstraintSchema);
    this.typeName = 'ElementDefinitionConstraint';
    this._type = 'FHIR::ElementDefinitionConstraint';
  }
}

module.exports.ElementDefinitionConstraintSchema = ElementDefinitionConstraintSchema;
module.exports.ElementDefinitionConstraint = ElementDefinitionConstraint;
