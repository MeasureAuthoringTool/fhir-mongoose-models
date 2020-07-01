const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { IdentifierUseSchema } = require('./IdentifierUse');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const IdentifierSchema = ElementSchemaFunction({
  use: IdentifierUseSchema,
  type: CodeableConceptSchema,
  system: PrimitiveUriSchema,
  value: PrimitiveStringSchema,
  period: PeriodSchema,
  assigner: ReferenceSchema,
  typeName: { type: String, default: 'Identifier' },
  _type: { type: String, default: 'FHIR::Identifier' },
});

class Identifier extends mongoose.Document {
  constructor(object) {
    super(object, IdentifierSchema);
    this.typeName = 'Identifier';
    this._type = 'FHIR::Identifier';
  }
}

module.exports.IdentifierSchema = IdentifierSchema;
module.exports.Identifier = Identifier;
